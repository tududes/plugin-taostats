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
  StakeBalanceData,
  RuntimeVersionData,
  ValidatorWeightsData,
  ValidatorMetricsData,
  ValidatorIdentityData,
  ValidatorPerformanceData,
  SubnetOwnerData,
  SubnetDescriptionData,
  SubnetRegistrationCostData,
  ExchangeData,
  TransferData,
  EventData,
  ExtrinsicData,
  StatusData,
  BlockIntervalData,
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
    } catch (error: unknown) {
      clearTimeout(timeoutId);
      
      console.error(`[TAOSTATS] Request to ${endpoint} failed:`, error);
      
      if (error instanceof ApiError) {
        throw error;
      } else if (typeof error === 'object' && error !== null && 'name' in error && (error as { name: string }).name === 'AbortError') {
        throw new ApiError("Request timed out. Please try again later.");
      } else {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new ApiError(`Failed to fetch data from ${endpoint}: ${errorMessage}`);
      }
    }
  }

  // Price endpoints
  async getPrice(asset: string = "tao"): Promise<ApiResponse<PriceData>> {
    return this.makeRequest<ApiResponse<PriceData>>("/price/latest", { asset });
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
    return this.makeRequest<ApiResponse<BlockData[]>>("/block", {
      limit: limit.toString(),
    });
  }

  async getNetworkStats(): Promise<ApiResponse<NetworkStatsData>> {
    return this.makeRequest<ApiResponse<NetworkStatsData>>("/stats/latest");
  }

  async getStatus(): Promise<ApiResponse<StatusData>> {
    return this.makeRequest<ApiResponse<StatusData>>("/status");
  }

  async getBlockInterval(): Promise<ApiResponse<BlockIntervalData>> {
    return this.makeRequest<ApiResponse<BlockIntervalData>>("/block/interval");
  }

  // Subnet endpoints
  async getSubnets(): Promise<ApiResponse<SubnetData[]>> {
    return this.makeRequest<ApiResponse<SubnetData[]>>("/subnet/latest");
  }

  async getSubnet(
    netuid: number
  ): Promise<ApiResponse<SubnetData>> {
    return this.makeRequest<ApiResponse<SubnetData>>("/subnet/latest", {
      netuid: netuid.toString(),
    });
  }

  async getSubnetHistory(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<SubnetData[]>> {
    return this.makeRequest<ApiResponse<SubnetData[]>>("/subnet/history", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getSubnetOwner(
    netuid: number
  ): Promise<ApiResponse<SubnetOwnerData>> {
    return this.makeRequest<ApiResponse<SubnetOwnerData>>("/subnet/owner", {
      netuid: netuid.toString(),
    });
  }

  async getSubnetDescription(
    netuid: number
  ): Promise<ApiResponse<SubnetDescriptionData>> {
    return this.makeRequest<ApiResponse<SubnetDescriptionData>>("/subnet/description", {
      netuid: netuid.toString(),
    });
  }

  async getSubnetRegistrationCostLatest(): Promise<ApiResponse<SubnetRegistrationCostData[]>> {
    return this.makeRequest<ApiResponse<SubnetRegistrationCostData[]>>("/subnet/registration_cost/latest");
  }

  async getSubnetRegistrationCostHistory(
    limit: number = 10
  ): Promise<ApiResponse<SubnetRegistrationCostData[]>> {
    return this.makeRequest<ApiResponse<SubnetRegistrationCostData[]>>("/subnet/registration_cost/history", {
      limit: limit.toString(),
    });
  }

  // Validator endpoints
  async getValidator(
    hotkey: string
  ): Promise<ApiResponse<ValidatorData>> {
    return this.makeRequest<ApiResponse<ValidatorData>>("/validator/latest", {
      hotkey,
    });
  }

  async getValidatorHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorData[]>> {
    return this.makeRequest<ApiResponse<ValidatorData[]>>("/validator/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  async getValidatorsInSubnet(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorData[]>> {
    return this.makeRequest<ApiResponse<ValidatorData[]>>("/validator/latest", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getValidatorWeightsLatest(
    hotkey: string
  ): Promise<ApiResponse<ValidatorWeightsData>> {
    return this.makeRequest<ApiResponse<ValidatorWeightsData>>("/validator/weights/latest", {
      hotkey,
    });
  }

  async getValidatorWeightsHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorWeightsData[]>> {
    return this.makeRequest<ApiResponse<ValidatorWeightsData[]>>("/validator/weights/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  async getValidatorMetricsLatest(
    hotkey: string
  ): Promise<ApiResponse<ValidatorMetricsData>> {
    return this.makeRequest<ApiResponse<ValidatorMetricsData>>("/validator/metrics/latest", {
      hotkey,
    });
  }

  async getValidatorMetricsHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorMetricsData[]>> {
    return this.makeRequest<ApiResponse<ValidatorMetricsData[]>>("/validator/metrics/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  async getValidatorPerformance(
    hotkey: string
  ): Promise<ApiResponse<ValidatorPerformanceData>> {
    return this.makeRequest<ApiResponse<ValidatorPerformanceData>>("/validator/performance", {
      hotkey,
    });
  }

  async getValidatorIdentity(
    hotkey: string
  ): Promise<ApiResponse<ValidatorIdentityData>> {
    return this.makeRequest<ApiResponse<ValidatorIdentityData>>("/validator/identity", {
      hotkey,
    });
  }

  // Account endpoints
  async getAccount(
    address: string
  ): Promise<ApiResponse<AccountData>> {
    return this.makeRequest<ApiResponse<AccountData>>("/account/latest", {
      address,
    });
  }

  async getAccountHistory(
    address: string,
    limit: number = 10
  ): Promise<ApiResponse<AccountData[]>> {
    return this.makeRequest<ApiResponse<AccountData[]>>("/account/history", {
      address,
      limit: limit.toString(),
    });
  }

  // Stake endpoints
  async getStakeBalanceLatest(
    coldkey: string,
    hotkey: string
  ): Promise<ApiResponse<StakeBalanceData>> {
    return this.makeRequest<ApiResponse<StakeBalanceData>>("/stake_balance/latest", {
      coldkey,
      hotkey,
    });
  }

  async getStakeBalanceHistory(
    coldkey: string,
    hotkey: string,
    limit: number = 10,
    block_start?: number,
    block_end?: number,
    timestamp_start?: number,
    timestamp_end?: number
  ): Promise<ApiResponse<StakeBalanceData[]>> {
    const params: Record<string, string> = {
      coldkey,
      hotkey,
      limit: limit.toString(),
    };

    if (block_start !== undefined) params.block_start = block_start.toString();
    if (block_end !== undefined) params.block_end = block_end.toString();
    if (timestamp_start !== undefined) params.timestamp_start = timestamp_start.toString();
    if (timestamp_end !== undefined) params.timestamp_end = timestamp_end.toString();

    return this.makeRequest<ApiResponse<StakeBalanceData[]>>("/stake_balance/history", params);
  }

  // Event and Extrinsic endpoints
  async getEvents(
    module?: string,
    method?: string,
    limit: number = 10
  ): Promise<ApiResponse<EventData[]>> {
    const params: Record<string, string> = {
      limit: limit.toString(),
    };
    
    if (module) params.module = module;
    if (method) params.method = method;
    
    return this.makeRequest<ApiResponse<EventData[]>>("/event", params);
  }

  async getExtrinsics(
    module?: string,
    method?: string,
    limit: number = 10
  ): Promise<ApiResponse<ExtrinsicData[]>> {
    const params: Record<string, string> = {
      limit: limit.toString(),
    };
    
    if (module) params.module = module;
    if (method) params.method = method;
    
    return this.makeRequest<ApiResponse<ExtrinsicData[]>>("/extrinsic", params);
  }

  // Transfer endpoints
  async getTransfers(
    address?: string,
    limit: number = 10
  ): Promise<ApiResponse<TransferData[]>> {
    const params: Record<string, string> = {
      limit: limit.toString(),
    };
    
    if (address) params.address = address;
    
    return this.makeRequest<ApiResponse<TransferData[]>>("/transfer", params);
  }

  // Exchange endpoints
  async getExchanges(): Promise<ApiResponse<ExchangeData[]>> {
    return this.makeRequest<ApiResponse<ExchangeData[]>>("/exchange");
  }

  // Runtime Version endpoints
  async getRuntimeVersionLatest(): Promise<ApiResponse<RuntimeVersionData>> {
    return this.makeRequest<ApiResponse<RuntimeVersionData>>("/runtime_version/latest");
  }

  async getRuntimeVersionHistory(
    limit: number = 10
  ): Promise<ApiResponse<RuntimeVersionData[]>> {
    return this.makeRequest<ApiResponse<RuntimeVersionData[]>>("/runtime_version/history", {
      limit: limit.toString(),
    });
  }
} 