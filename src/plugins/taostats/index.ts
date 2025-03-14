import { Plugin, Service } from "@ai16z/eliza";
import { TaostatsPluginConfig, DEFAULT_CONFIG } from "./api/types.ts";
import { TaostatsApiClient } from "./api/client.ts";
import { validateApiKey } from "../../common/utils.ts";

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

  services: Service[] = [
    {
      name: "taostatsApiClient",
      instance: () => this.apiClient,
    },
  ];
}

// Export default instance with API key from environment variable
export default new TaostatsPlugin({
  apiKey: process.env.TAOSTATS_API_KEY || "",
}); 