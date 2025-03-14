import {
  TaostatsPluginConfig,
  PriceData,
  PriceHistoryData,
  PriceOHLCData,
  BlockData,
  NetworkStatsData,
  SubnetData,
  ValidatorData,
  AccountData,
  ApiResponse,
} from "./types.ts";
import { ApiError, createRateLimiter } from "../../../common/utils.ts";

export class TaostatsApiClient {
  private config: TaostatsPluginConfig;
  private rateLimiter: ReturnType<typeof createRateLimiter>;

  constructor(config: TaostatsPluginConfig) {
    this.config = config;
    this.rateLimiter = createRateLimiter(
      config.rateLimitPerMinute || 60,
      60000
    );
    console.log(`[TAOSTATS] API client initialized with base URL: ${this.config.baseUrl}`);
  }

  private async makeRequest<T>(
    endpoint: string,
    params: Record<string, string> = {},
    version: string = "v1" // Default to v1 but allow overriding
  ): Promise<T> {
    console.log(`[TAOSTATS] Making request to endpoint: ${endpoint} (version: ${version})`);
    
    if (!this.rateLimiter.checkLimit()) {
      console.error(`[TAOSTATS] Rate limit exceeded for ${endpoint}`);
      throw new ApiError("Rate limit exceeded. Please try again later.");
    }

    // Format the full URL with version at the end
    const url = new URL(`${this.config.baseUrl}${endpoint}/${version}`);
    
    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });

    console.log(`[TAOSTATS] Full request URL: ${url.toString()}`);
    console.log(`[TAOSTATS] Request parameters:`, params);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      console.error(`[TAOSTATS] Request to ${endpoint} timed out after ${this.config.timeoutMs || 10000}ms`);
    }, this.config.timeoutMs || 10000);

    try {
      console.log(`[TAOSTATS] Sending request to ${url.toString()}`);
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": this.config.apiKey, // API key should already be in the proper format
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      
      console.log(`[TAOSTATS] Response status: ${response.status}`);
      
      if (!response.ok) {
        console.error(`[TAOSTATS] API error: ${response.statusText} (${response.status})`);
        throw new ApiError(
          `Taostats API error: ${response.statusText}`,
          response.status
        );
      }

      console.log(`[TAOSTATS] Parsing response JSON`);
      const data = await response.json();
      console.log(`[TAOSTATS] Response data:`, JSON.stringify(data).substring(0, 500));
      
      // Wrap raw data in our API response format if it's not already in that format
      let apiResponse: ApiResponse<any>;
      
      if ('success' in data) {
        apiResponse = data as ApiResponse<any>;
      } else {
        // If the API doesn't return in our expected format, wrap it
        apiResponse = {
          success: true,
          data: data
        };
      }
      
      console.log(`[TAOSTATS] Response data processed for ${endpoint}`);
      
      return apiResponse as T;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if ((error as any).name === 'AbortError') {
        console.error(`[TAOSTATS] Request aborted due to timeout`);
        throw new ApiError(`Request timed out`);
      }
      
      if (error instanceof ApiError) {
        console.error(`[TAOSTATS] API error: ${error.message}`);
        throw error;
      }
      
      console.error(`[TAOSTATS] Failed to fetch data: ${(error as Error).message}`);
      throw new ApiError(`Failed to fetch data: ${(error as Error).message}`);
    }
  }

  // Price endpoints
  async getPrice(asset: string = "tao"): Promise<ApiResponse<PriceData>> {
    console.log(`[TAOSTATS] Getting price for ${asset}`);
    try {
      const response = await this.makeRequest<ApiResponse<any>>("/price/latest", { asset });
      console.log(`[TAOSTATS] Price response structure:`, JSON.stringify(response).substring(0, 500));
      
      if (response.success && response.data) {
        // The API returns data in a nested structure with pagination
        if (response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
          const priceItem = response.data.data[0];
          console.log(`[TAOSTATS] Price item:`, priceItem);
          
          // Map the received data to our PriceData interface
          const priceData: PriceData = {
            price: parseFloat(priceItem.price) || 0,
            timestamp: new Date(priceItem.last_updated).getTime(),
            change24h: parseFloat(priceItem.percent_change_24h) || 0,
            change7d: parseFloat(priceItem.percent_change_7d) || 0,
            marketCap: parseFloat(priceItem.market_cap) || 0,
            volume24h: parseFloat(priceItem.volume_24h) || 0
          };
          
          console.log(`[TAOSTATS] Successfully retrieved price for ${asset}: $${priceData.price}`);
          return {
            success: true,
            data: priceData
          };
        } else {
          console.error(`[TAOSTATS] Unexpected price data structure`);
          return {
            success: false,
            error: "Unexpected price data structure"
          };
        }
      } else {
        console.error(`[TAOSTATS] No price data found in response`);
        return {
          success: false,
          error: "No price data found in response"
        };
      }
    } catch (error: any) {
      console.error(`[TAOSTATS] Error getting price for ${asset}: ${error.message}`);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getPriceHistory(
    interval: string = "1d",
    limit: number = 30
  ): Promise<ApiResponse<PriceHistoryData>> {
    return this.makeRequest<ApiResponse<PriceHistoryData>>("/price/history", {
      interval,
      limit: limit.toString(),
    });
  }

  async getPriceOHLC(
    interval: string = "1d",
    limit: number = 30
  ): Promise<ApiResponse<PriceOHLCData>> {
    return this.makeRequest<ApiResponse<PriceOHLCData>>("/price/ohlc", {
      interval,
      limit: limit.toString(),
    });
  }

  // Network/Chain endpoints
  async getBlocks(
    limit: number = 10
  ): Promise<ApiResponse<BlockData[]>> {
    return this.makeRequest<ApiResponse<BlockData[]>>("/blocks", {
      limit: limit.toString(),
    });
  }

  async getNetworkStats(): Promise<ApiResponse<NetworkStatsData>> {
    return this.makeRequest<ApiResponse<NetworkStatsData>>("/stats/latest");
  }

  // Subnet endpoints
  async getSubnets(): Promise<ApiResponse<SubnetData[]>> {
    console.log(`[TAOSTATS] Getting list of subnets`);
    
    // Try different potential endpoints based on documentation
    const potentialEndpoints = [
      "/subnet/list", 
      "/metagraph/list", 
      "/subnets", 
      "/subnet/subnets"
    ];
    
    for (const endpoint of potentialEndpoints) {
      try {
        console.log(`[TAOSTATS] Trying endpoint: ${endpoint}`);
        const result = await this.makeRequest<ApiResponse<any>>(endpoint);
        console.log(`[TAOSTATS] Response for ${endpoint}:`, JSON.stringify(result).substring(0, 300));
        
        if (result.success && result.data) {
          // Extract subnet data from the response
          let subnets: SubnetData[] = [];
          
          if (Array.isArray(result.data)) {
            // Map the API response to our SubnetData structure
            subnets = result.data.map((item: any) => ({
              netuid: parseInt(item.netuid) || 0,
              name: item.name || `Subnet ${item.netuid}`,
              description: item.description || "",
              owner: item.owner || "",
              emission: parseFloat(item.emission) || 0,
              registrationCost: parseFloat(item.registration_cost) || 0,
              totalStake: parseFloat(item.total_stake) || 0,
              totalValidators: parseInt(item.validators_count) || 0,
              totalMiners: parseInt(item.miners_count) || 0
            }));
          } else if (result.data.data && Array.isArray(result.data.data)) {
            // Alternative data structure with pagination
            subnets = result.data.data.map((item: any) => ({
              netuid: parseInt(item.netuid) || 0,
              name: item.name || `Subnet ${item.netuid}`,
              description: item.description || "",
              owner: item.owner || "",
              emission: parseFloat(item.emission) || 0,
              registrationCost: parseFloat(item.registration_cost) || 0,
              totalStake: parseFloat(item.total_stake) || 0,
              totalValidators: parseInt(item.validators_count) || 0,
              totalMiners: parseInt(item.miners_count) || 0
            }));
          }
          
          if (subnets.length > 0) {
            console.log(`[TAOSTATS] Successfully mapped ${subnets.length} subnets from ${endpoint}`);
            return {
              success: true,
              data: subnets
            };
          }
        }
        
        console.log(`[TAOSTATS] Endpoint ${endpoint} didn't return useful data, trying next...`);
      } catch (error: any) {
        console.error(`[TAOSTATS] Error with endpoint ${endpoint}: ${error.message}`);
        // Continue to next endpoint
      }
    }
    
    // If we've tried all endpoints and none worked
    console.error(`[TAOSTATS] All subnet list endpoints failed`);
    return {
      success: false,
      error: "Failed to retrieve subnet list from any available endpoint"
    };
  }

  async getSubnet(
    netuid: number
  ): Promise<ApiResponse<SubnetData>> {
    console.log(`[TAOSTATS] Getting details for subnet ${netuid}`);
    
    // Try different potential endpoints based on documentation
    const potentialEndpoints = [
      "/subnet/info", 
      "/subnet/get", 
      `/subnet/${netuid}`
    ];
    
    for (const endpoint of potentialEndpoints) {
      try {
        console.log(`[TAOSTATS] Trying endpoint: ${endpoint}`);
        const formattedEndpoint = endpoint.replace('${netuid}', netuid.toString());
        const params: Record<string, string> = endpoint.includes('${netuid}') ? {} : { netuid: netuid.toString() };
        
        const result = await this.makeRequest<ApiResponse<any>>(formattedEndpoint, params);
        console.log(`[TAOSTATS] Response for ${formattedEndpoint}:`, JSON.stringify(result).substring(0, 300));
        
        if (result.success && result.data) {
          // Extract subnet data from the response
          let subnetData: SubnetData | null = null;
          
          if (result.data.netuid !== undefined) {
            // Direct subnet object
            subnetData = {
              netuid: parseInt(result.data.netuid) || netuid,
              name: result.data.name || `Subnet ${netuid}`,
              description: result.data.description || "",
              owner: result.data.owner || "",
              emission: parseFloat(result.data.emission) || 0,
              registrationCost: parseFloat(result.data.registration_cost) || 0,
              totalStake: parseFloat(result.data.total_stake) || 0,
              totalValidators: parseInt(result.data.validators_count) || 0,
              totalMiners: parseInt(result.data.miners_count) || 0
            };
          } else if (result.data.data && result.data.data.netuid !== undefined) {
            // Subnet data nested under 'data'
            const item = result.data.data;
            subnetData = {
              netuid: parseInt(item.netuid) || netuid,
              name: item.name || `Subnet ${netuid}`,
              description: item.description || "",
              owner: item.owner || "",
              emission: parseFloat(item.emission) || 0,
              registrationCost: parseFloat(item.registration_cost) || 0,
              totalStake: parseFloat(item.total_stake) || 0,
              totalValidators: parseInt(item.validators_count) || 0,
              totalMiners: parseInt(item.miners_count) || 0
            };
          }
          
          if (subnetData) {
            console.log(`[TAOSTATS] Successfully retrieved details for subnet ${netuid} from ${formattedEndpoint}`);
            return {
              success: true,
              data: subnetData
            };
          }
        }
        
        console.log(`[TAOSTATS] Endpoint ${formattedEndpoint} didn't return useful data, trying next...`);
      } catch (error: any) {
        console.error(`[TAOSTATS] Error with endpoint ${endpoint}: ${error.message}`);
        // Continue to next endpoint
      }
    }
    
    // If we've tried all endpoints and none worked
    console.error(`[TAOSTATS] All subnet detail endpoints failed for subnet ${netuid}`);
    return {
      success: false,
      error: `Failed to retrieve details for subnet ${netuid} from any available endpoint`
    };
  }

  // Validator endpoints
  async getValidator(
    hotkey: string
  ): Promise<ApiResponse<ValidatorData>> {
    return this.makeRequest<ApiResponse<ValidatorData>>(`/validator/${hotkey}`);
  }

  async getValidatorsInSubnet(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorData[]>> {
    return this.makeRequest<ApiResponse<ValidatorData[]>>(
      `/subnet/${netuid}/validators`,
      { limit: limit.toString() }
    );
  }

  // Account endpoints
  async getAccount(
    address: string
  ): Promise<ApiResponse<AccountData>> {
    return this.makeRequest<ApiResponse<AccountData>>(`/account/${address}`);
  }
} 