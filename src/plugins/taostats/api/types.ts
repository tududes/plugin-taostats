// Types for the Taostats API client

// Base configuration for the Taostats plugin
export interface TaostatsPluginConfig {
  apiKey: string;
  baseUrl?: string;
  maxResults?: number;
  rateLimitPerMinute?: number;
  timeoutMs?: number;
}

// Default configuration values
export const DEFAULT_CONFIG: Partial<TaostatsPluginConfig> = {
  baseUrl: "https://api.taostats.io/api",
  maxResults: 10,
  rateLimitPerMinute: 60,
  timeoutMs: 10000, // 10 seconds timeout by default
};

// Price data types
export interface PriceData {
  price: number;
  timestamp: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
}

export interface PriceHistoryData {
  prices: Array<{
    price: number;
    timestamp: number;
  }>;
  interval: string;
}

export interface PriceOHLCData {
  ohlc: Array<{
    open: number;
    high: number;
    low: number;
    close: number;
    timestamp: number;
  }>;
  interval: string;
}

// Network/Chain data types
export interface BlockData {
  blockNumber: number;
  hash: string;
  timestamp: number;
  extrinsicsCount: number;
  eventsCount: number;
  validator: string;
}

export interface NetworkStatsData {
  blockHeight: number;
  finalizedBlockHeight: number;
  totalAccounts: number;
  totalTransfers: number;
  totalExtrinsics: number;
  totalEvents: number;
}

// Subnet data types
export interface SubnetData {
  netuid: number;
  name: string;
  description: string;
  owner: string;
  emission: number;
  registrationCost: number;
  totalStake: number;
  totalValidators: number;
  totalMiners: number;
}

// Validator data types
export interface ValidatorData {
  hotkey: string;
  coldkey: string;
  stake: number;
  rank: number;
  emission: number;
  subnets: number[];
  trust: number;
  consensus: number;
  incentive: number;
  dividends: number;
}

// Account data types
export interface AccountData {
  address: string;
  balance: number;
  totalStake: number;
  totalEmission: number;
  validators: string[];
  transfers: Array<{
    from: string;
    to: string;
    amount: number;
    timestamp: number;
    blockNumber: number;
    hash: string;
  }>;
}

// Extended types for new endpoints
export interface StakeBalanceData {
  coldkey: string;
  hotkey: string;
  stake: number;
  timestamp: number;
  blockNumber: number;
}

export interface RuntimeVersionData {
  specVersion: number;
  transactionVersion: number;
  implVersion: number;
  authoringVersion: number;
  specName: string;
  implName: string;
  timestamp: number;
  blockNumber: number;
}

export interface ValidatorWeightsData {
  hotkey: string;
  netuid: number;
  weights: Array<{
    uid: number;
    weight: number;
  }>;
}

export interface ValidatorMetricsData {
  hotkey: string;
  trust: number;
  consensus: number;
  incentive: number;
  dividends: number;
  emission: number;
  rank: number;
  netuid: number;
  timestamp: number;
  blockNumber: number;
}

export interface ValidatorIdentityData {
  hotkey: string;
  display: string;
  legal: string;
  web: string;
  riot: string;
  email: string;
  twitter: string;
  image: string;
}

export interface ValidatorPerformanceData {
  hotkey: string;
  rankStats: {
    avg: number;
    min: number;
    max: number;
    change24h: number;
  };
  emissionStats: {
    avg: number;
    min: number;
    max: number;
    total: number;
    change24h: number;
  };
}

export interface SubnetOwnerData {
  netuid: number;
  owner: string;
}

export interface SubnetDescriptionData {
  netuid: number;
  description: string;
}

export interface SubnetRegistrationCostData {
  netuid: number;
  registrationCost: number;
  timestamp: number;
  blockNumber: number;
}

export interface ExchangeData {
  name: string;
  url: string;
  pairs: Array<{
    pair: string;
    price: number;
    volume24h: number;
    lastUpdated: number;
  }>;
}

export interface TransferData {
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  blockNumber: number;
  hash: string;
  success: boolean;
}

export interface EventData {
  module: string;
  method: string;
  data: any;
  timestamp: number;
  blockNumber: number;
  index: number;
}

export interface ExtrinsicData {
  hash: string;
  module: string;
  method: string;
  args: any;
  timestamp: number;
  blockNumber: number;
  success: boolean;
  index: number;
}

export interface StatusData {
  status: string;
  version: string;
  uptime: number;
  lastUpdate: number;
}

export interface BlockIntervalData {
  intervalMs: number;
  lastBlocks: Array<{
    blockNumber: number;
    timestamp: number;
  }>;
  timestamp: number;
}

// New types for missing endpoints
export interface SubnetDistributionData {
  netuid: number;
  distribution: Array<{
    ip: string;
    count: number;
    percentage: number;
  }>;
}

export interface HotkeyFamilyData {
  hotkey: string;
  parent: string;
  children: string[];
}

export interface ColdkeyReportData {
  coldkey: string;
  stake: number;
  validators: number;
  activeValidators: number;
  emission: number;
  totalReward: number;
  startTime: number;
  endTime: number;
}

export interface StakeBalanceSumData {
  coldkey: string;
  stake: number;
  timestamp: number;
}

export interface NeuronRegistrationData {
  hotkey: string;
  coldkey: string;
  timestamp: number;
  blockNumber: number;
  subnet: number;
}

export interface NeuronDeregistrationData {
  hotkey: string;
  coldkey: string;
  timestamp: number;
  blockNumber: number;
  subnet: number;
}

export interface MetagraphData {
  netuid: number;
  neurons: Array<{
    uid: number;
    hotkey: string;
    coldkey: string;
    stake: number;
    rank: number;
    emission: number;
    trust: number;
    consensus: number;
    incentive: number;
    dividends: number;
    weights: Array<{
      uid: number;
      weight: number;
    }>;
  }>;
  timestamp: number;
  blockNumber: number;
}

export interface EVMAddressData {
  ss58: string;
  hex: string;
  evm: string;
}

export interface EVMBlockData {
  blockNumber: number;
  hash: string;
  timestamp: number;
  transactionCount: number;
}

export interface EVMTransactionData {
  hash: string;
  blockNumber: number;
  from: string;
  to: string;
  value: string;
  gasUsed: number;
  timestamp: number;
}

export interface EVMContractData {
  address: string;
  creator: string;
  creationTransaction: string;
  creationBlock: number;
  creationTimestamp: number;
}

export interface EVMLogData {
  address: string;
  topics: string[];
  data: string;
  blockNumber: number;
  transactionHash: string;
  timestamp: number;
}

export interface DelegationData {
  delegator: string;
  delegate: string;
  amount: number;
  timestamp: number;
  blockNumber: number;
}

export interface ProxyCallData {
  real: string;
  proxy: string;
  callHash: string;
  timestamp: number;
  blockNumber: number;
}

export interface WeightCopierData {
  from: string;
  to: string;
  netuid: number;
  timestamp: number;
  blockNumber: number;
}

export interface AlphaSharesData {
  hotkey: string;
  shares: number;
  timestamp: number;
  blockNumber: number;
}

export interface SubnetEmissionData {
  netuid: number;
  emission: number;
  timestamp: number;
  blockNumber: number;
}

export interface SubnetPoolData {
  netuid: number;
  emission: number;
  stake: number;
  timespan: number;
  registrationCost: number;
  timestamp: number;
  blockNumber: number;
}

export interface TradingViewHistoryData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface AccountingData {
  address: string;
  startBlock: number;
  endBlock: number;
  startTimestamp: number;
  endTimestamp: number;
  balanceStart: number;
  balanceEnd: number;
  transfersIn: number;
  transfersOut: number;
  rewards: number;
  slashes: number;
  staking: number;
  unstaking: number;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 