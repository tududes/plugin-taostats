// Types for the Taostats API client

// Base configuration for the Taostats plugin
export interface TaostatsPluginConfig {
  apiKey: string;
  baseUrl?: string;
  maxResults?: number;
  rateLimitPerMinute?: number;
}

// Default configuration values
export const DEFAULT_CONFIG: Partial<TaostatsPluginConfig> = {
  baseUrl: "https://api.taostats.io/v2",
  maxResults: 10,
  rateLimitPerMinute: 60,
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

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 