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
  }

  private async makeRequest<T>(
    endpoint: string,
    params: Record<string, string> = {}
  ): Promise<T> {
    if (!this.rateLimiter.checkLimit()) {
      throw new ApiError("Rate limit exceeded. Please try again later.");
    }

    const url = new URL(`${this.config.baseUrl}${endpoint}`);
    
    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.config.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new ApiError(
          `Taostats API error: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(`Failed to fetch data: ${(error as Error).message}`);
    }
  }

  // Price endpoints
  async getPrice(): Promise<ApiResponse<PriceData>> {
    return this.makeRequest<ApiResponse<PriceData>>("/price");
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
    return this.makeRequest<ApiResponse<SubnetData[]>>("/subnets");
  }

  async getSubnet(
    netuid: number
  ): Promise<ApiResponse<SubnetData>> {
    return this.makeRequest<ApiResponse<SubnetData>>(`/subnet/${netuid}`);
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