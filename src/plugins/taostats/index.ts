import { Plugin, Service } from "@ai16z/eliza";
import { TaostatsPluginConfig, DEFAULT_CONFIG } from "./api/types.ts";
import { TaostatsApiClient } from "./api/client.ts";
import { validateApiKey } from "../../common/utils.ts";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Import actions
import { TAOSTATS_PRICE_ACTION, TAOSTATS_PRICE_HISTORY_ACTION } from "./actions/price.ts";
import { TAOSTATS_BLOCKS_ACTION, TAOSTATS_NETWORK_STATS_ACTION } from "./actions/network.ts";
import { TAOSTATS_SUBNETS_LIST_ACTION, TAOSTATS_SUBNET_DETAILS_ACTION } from "./actions/subnet.ts";
import { TAOSTATS_VALIDATOR_ACTION, TAOSTATS_VALIDATORS_IN_SUBNET_ACTION } from "./actions/validator.ts";
import { TAOSTATS_ACCOUNT_ACTION } from "./actions/account.ts";

export class TaostatsPlugin implements Plugin {
  readonly name: string = "taostats";
  readonly description: string = "Access Bittensor network data using the Taostats API";
  config: TaostatsPluginConfig;
  private apiClient: TaostatsApiClient;

  constructor(config: TaostatsPluginConfig) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    validateApiKey(this.config);
    this.apiClient = new TaostatsApiClient(this.config);
  }

  actions = [
    // Price actions
    TAOSTATS_PRICE_ACTION,
    TAOSTATS_PRICE_HISTORY_ACTION,
    
    // Network actions
    TAOSTATS_BLOCKS_ACTION,
    TAOSTATS_NETWORK_STATS_ACTION,
    
    // Subnet actions
    TAOSTATS_SUBNETS_LIST_ACTION,
    TAOSTATS_SUBNET_DETAILS_ACTION,
    
    // Validator actions
    TAOSTATS_VALIDATOR_ACTION,
    TAOSTATS_VALIDATORS_IN_SUBNET_ACTION,
    
    // Account actions
    TAOSTATS_ACCOUNT_ACTION,
  ];

  get services() {
    return [
      {
        name: "taostatsApiClient",
        value: this.apiClient,
      } as unknown as Service,
    ];
  }
}

// Export default instance with API key from environment variable
console.log(`[TAOSTATS] Creating TaostatsPlugin with API key: ${process.env.TAOSTATS_API_KEY ? "Key found" : "Key not found"}`);
if (!process.env.TAOSTATS_API_KEY) {
  console.error("[TAOSTATS] WARNING: No API key found in environment variables. API calls may fail.");
}

console.log(`[TAOSTATS] Base URL: ${DEFAULT_CONFIG.baseUrl}`);
console.log(`[TAOSTATS] Default timeout: ${DEFAULT_CONFIG.timeoutMs}ms`);

const taostatsPlugin = new TaostatsPlugin({
  apiKey: process.env.TAOSTATS_API_KEY || "",
});

console.log(`[TAOSTATS] Plugin initialized with ${taostatsPlugin.actions.length} actions`);
console.log(`[TAOSTATS] Available actions: ${taostatsPlugin.actions.map(a => a.name).join(', ')}`);

export default taostatsPlugin; 