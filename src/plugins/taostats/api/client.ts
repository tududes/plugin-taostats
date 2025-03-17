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
  SubnetDistributionData,
  HotkeyFamilyData,
  ColdkeyReportData,
  StakeBalanceSumData,
  NeuronRegistrationData,
  NeuronDeregistrationData,
  MetagraphData,
  EVMAddressData,
  EVMBlockData,
  EVMTransactionData,
  EVMContractData,
  EVMLogData,
  DelegationData,
  ProxyCallData,
  WeightCopierData,
  AlphaSharesData,
  SubnetEmissionData,
  SubnetPoolData,
  TradingViewHistoryData,
  AccountingData
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

  async getSubnetIPDistribution(
    netuid: number
  ): Promise<ApiResponse<SubnetDistributionData>> {
    return this.makeRequest<ApiResponse<SubnetDistributionData>>("/subnet/distribution/ip", {
      netuid: netuid.toString(),
    });
  }

  async getSubnetColdkeyDistribution(
    netuid: number
  ): Promise<ApiResponse<SubnetDistributionData>> {
    return this.makeRequest<ApiResponse<SubnetDistributionData>>("/subnet/distribution/coldkey", {
      netuid: netuid.toString(),
    });
  }

  async getSubnetIncentiveDistribution(
    netuid: number
  ): Promise<ApiResponse<SubnetDistributionData>> {
    return this.makeRequest<ApiResponse<SubnetDistributionData>>("/subnet/distribution/incentive", {
      netuid: netuid.toString(),
    });
  }

  async getSubnetRegistrations(
    limit: number = 10
  ): Promise<ApiResponse<NeuronRegistrationData[]>> {
    return this.makeRequest<ApiResponse<NeuronRegistrationData[]>>("/subnet/registration", {
      limit: limit.toString(),
    });
  }

  async getSubnetNeuronRegistrations(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<NeuronRegistrationData[]>> {
    return this.makeRequest<ApiResponse<NeuronRegistrationData[]>>("/subnet/neuron/registration", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getSubnetNeuronDeregistrations(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<NeuronDeregistrationData[]>> {
    return this.makeRequest<ApiResponse<NeuronDeregistrationData[]>>("/subnet/neuron/deregistration", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getSubnetEmission(
    netuid: number
  ): Promise<ApiResponse<SubnetEmissionData>> {
    return this.makeRequest<ApiResponse<SubnetEmissionData>>("/subnet/emission", {
      netuid: netuid.toString(),
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

  async getWeightCopiers(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<WeightCopierData[]>> {
    return this.makeRequest<ApiResponse<WeightCopierData[]>>("/validator/weight_copier", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getValidatorAlphaSharesLatest(
    hotkey: string
  ): Promise<ApiResponse<AlphaSharesData>> {
    return this.makeRequest<ApiResponse<AlphaSharesData>>("/dtao/hotkey_alpha_shares/latest", {
      hotkey,
    });
  }

  async getValidatorAlphaSharesHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<AlphaSharesData[]>> {
    return this.makeRequest<ApiResponse<AlphaSharesData[]>>("/dtao/hotkey_alpha_shares/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  async getHotkeyFamilyLatest(
    hotkey: string
  ): Promise<ApiResponse<HotkeyFamilyData>> {
    return this.makeRequest<ApiResponse<HotkeyFamilyData>>("/hotkey/family/latest", {
      hotkey,
    });
  }

  async getHotkeyFamilyHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<HotkeyFamilyData[]>> {
    return this.makeRequest<ApiResponse<HotkeyFamilyData[]>>("/hotkey/family/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  // dTAO endpoints
  async getDTAOValidator(
    hotkey: string
  ): Promise<ApiResponse<ValidatorData>> {
    return this.makeRequest<ApiResponse<ValidatorData>>("/dtao/validator/latest", {
      hotkey,
    });
  }

  async getDTAOValidatorHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorData[]>> {
    return this.makeRequest<ApiResponse<ValidatorData[]>>("/dtao/validator/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  async getDTAOValidatorPerformanceLatest(
    hotkey: string
  ): Promise<ApiResponse<ValidatorPerformanceData>> {
    return this.makeRequest<ApiResponse<ValidatorPerformanceData>>("/dtao/validator/performance/latest", {
      hotkey,
    });
  }

  async getDTAOValidatorPerformanceHistory(
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<ValidatorPerformanceData[]>> {
    return this.makeRequest<ApiResponse<ValidatorPerformanceData[]>>("/dtao/validator/performance/history", {
      hotkey,
      limit: limit.toString(),
    });
  }

  async getDTAOStakeBalanceLatest(
    coldkey: string,
    hotkey: string
  ): Promise<ApiResponse<StakeBalanceData>> {
    return this.makeRequest<ApiResponse<StakeBalanceData>>("/dtao/stake_balance/latest", {
      coldkey,
      hotkey,
    });
  }

  async getDTAOStakeBalanceHistory(
    coldkey: string,
    hotkey: string,
    limit: number = 10
  ): Promise<ApiResponse<StakeBalanceData[]>> {
    return this.makeRequest<ApiResponse<StakeBalanceData[]>>("/dtao/stake_balance/history", {
      coldkey,
      hotkey,
      limit: limit.toString(),
    });
  }

  async getDTAOStakeBalanceAggregated(
    coldkey: string
  ): Promise<ApiResponse<StakeBalanceSumData>> {
    return this.makeRequest<ApiResponse<StakeBalanceSumData>>("/dtao/stake_balance_aggregated/latest", {
      coldkey,
    });
  }

  async getDTAODelegationEvents(
    limit: number = 10
  ): Promise<ApiResponse<DelegationData[]>> {
    return this.makeRequest<ApiResponse<DelegationData[]>>("/dtao/delegation", {
      limit: limit.toString(),
    });
  }

  async getDTAOSlippage(): Promise<ApiResponse<any>> {
    return this.makeRequest<ApiResponse<any>>("/dtao/slippage");
  }

  async getDTAOPoolLatest(
    netuid: number
  ): Promise<ApiResponse<SubnetPoolData>> {
    return this.makeRequest<ApiResponse<SubnetPoolData>>("/dtao/pool/latest", {
      netuid: netuid.toString(),
    });
  }

  async getDTAOPoolHistory(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<SubnetPoolData[]>> {
    return this.makeRequest<ApiResponse<SubnetPoolData[]>>("/dtao/pool/history", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getDTAOSubnetEmission(
    netuid: number
  ): Promise<ApiResponse<SubnetEmissionData>> {
    return this.makeRequest<ApiResponse<SubnetEmissionData>>("/dtao/subnet_emission", {
      netuid: netuid.toString(),
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

  // Accounting endpoints
  async getAccounting(
    address: string,
    startBlock?: number,
    endBlock?: number,
    startTimestamp?: number,
    endTimestamp?: number
  ): Promise<ApiResponse<AccountingData>> {
    const params: Record<string, string> = {
      address,
    };

    if (startBlock) params.start_block = startBlock.toString();
    if (endBlock) params.end_block = endBlock.toString();
    if (startTimestamp) params.start_timestamp = startTimestamp.toString();
    if (endTimestamp) params.end_timestamp = endTimestamp.toString();

    return this.makeRequest<ApiResponse<AccountingData>>("/accounting", params);
  }

  async getColdkeyReport(
    coldkey: string,
    startTimestamp?: number,
    endTimestamp?: number
  ): Promise<ApiResponse<ColdkeyReportData>> {
    const params: Record<string, string> = {
      coldkey,
    };

    if (startTimestamp) params.start_timestamp = startTimestamp.toString();
    if (endTimestamp) params.end_timestamp = endTimestamp.toString();

    return this.makeRequest<ApiResponse<ColdkeyReportData>>("/accounting/coldkey_report", params);
  }

  async getColdkeyReportCSV(
    coldkey: string,
    startTimestamp?: number,
    endTimestamp?: number
  ): Promise<ApiResponse<string>> {
    const params: Record<string, string> = {
      coldkey,
    };

    if (startTimestamp) params.start_timestamp = startTimestamp.toString();
    if (endTimestamp) params.end_timestamp = endTimestamp.toString();

    return this.makeRequest<ApiResponse<string>>("/accounting/coldkey_report_csv", params);
  }

  // Delegation endpoints
  async getDelegationEvents(
    limit: number = 10
  ): Promise<ApiResponse<DelegationData[]>> {
    return this.makeRequest<ApiResponse<DelegationData[]>>("/delegation", {
      limit: limit.toString(),
    });
  }

  // Chain call endpoints
  async getChainCalls(
    limit: number = 10
  ): Promise<ApiResponse<any[]>> {
    return this.makeRequest<ApiResponse<any[]>>("/call", {
      limit: limit.toString(),
    });
  }

  async getProxyCalls(
    limit: number = 10
  ): Promise<ApiResponse<ProxyCallData[]>> {
    return this.makeRequest<ApiResponse<ProxyCallData[]>>("/proxy_call", {
      limit: limit.toString(),
    });
  }

  // Metagraph endpoints
  async getMetagraphLatest(
    netuid: number
  ): Promise<ApiResponse<MetagraphData>> {
    return this.makeRequest<ApiResponse<MetagraphData>>("/metagraph/latest", {
      netuid: netuid.toString(),
    });
  }

  async getMetagraphHistory(
    netuid: number,
    limit: number = 10
  ): Promise<ApiResponse<MetagraphData[]>> {
    return this.makeRequest<ApiResponse<MetagraphData[]>>("/metagraph/history", {
      netuid: netuid.toString(),
      limit: limit.toString(),
    });
  }

  async getRootMetagraphLatest(): Promise<ApiResponse<MetagraphData>> {
    return this.makeRequest<ApiResponse<MetagraphData>>("/metagraph/root/latest");
  }

  async getRootMetagraphHistory(
    limit: number = 10
  ): Promise<ApiResponse<MetagraphData[]>> {
    return this.makeRequest<ApiResponse<MetagraphData[]>>("/metagraph/root/history", {
      limit: limit.toString(),
    });
  }

  // EVM endpoints
  async getEVMAddressFromSS58(
    address: string
  ): Promise<ApiResponse<EVMAddressData>> {
    return this.makeRequest<ApiResponse<EVMAddressData>>("/evm/address_from_ss58", {
      address,
    });
  }

  async getEVMBlock(
    blockNumber?: number,
    hash?: string,
    limit: number = 10
  ): Promise<ApiResponse<EVMBlockData[]>> {
    const params: Record<string, string> = {
      limit: limit.toString(),
    };

    if (blockNumber) params.block_number = blockNumber.toString();
    if (hash) params.hash = hash;

    return this.makeRequest<ApiResponse<EVMBlockData[]>>("/evm/block", params);
  }

  async getEVMTransaction(
    hash: string
  ): Promise<ApiResponse<EVMTransactionData>> {
    return this.makeRequest<ApiResponse<EVMTransactionData>>("/evm/transaction", {
      hash,
    });
  }

  async getEVMContract(
    address: string
  ): Promise<ApiResponse<EVMContractData>> {
    return this.makeRequest<ApiResponse<EVMContractData>>("/evm/contract", {
      address,
    });
  }

  async getEVMLog(
    address?: string,
    topic0?: string,
    topic1?: string,
    topic2?: string,
    topic3?: string,
    limit: number = 10
  ): Promise<ApiResponse<EVMLogData[]>> {
    const params: Record<string, string> = {
      limit: limit.toString(),
    };

    if (address) params.address = address;
    if (topic0) params.topic0 = topic0;
    if (topic1) params.topic1 = topic1;
    if (topic2) params.topic2 = topic2;
    if (topic3) params.topic3 = topic3;

    return this.makeRequest<ApiResponse<EVMLogData[]>>("/evm/log", params);
  }

  // TradingView endpoints
  async getTradingViewHistory(
    resolution: string = "D",
    from: number = Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60,
    to: number = Math.floor(Date.now() / 1000)
  ): Promise<ApiResponse<TradingViewHistoryData[]>> {
    return this.makeRequest<ApiResponse<TradingViewHistoryData[]>>("/dtao/tradingview/udf/history", {
      resolution,
      from: from.toString(),
      to: to.toString(),
    });
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