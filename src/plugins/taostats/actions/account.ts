import {
  IAgentRuntime,
  Memory,
  State,
} from "@ai16z/eliza";
import { TaostatsApiClient } from "../api/client.ts";
import { formatAccountData } from "../utils/formatting.ts";
import { handleTaostatsApiError, extractQuery, extractAddress } from "../utils/errors.ts";
import { SearchAction } from "../../../common/types.ts";

// Get account details action
export const TAOSTATS_ACCOUNT_ACTION: SearchAction = {
  name: "TAOSTATS_ACCOUNT",
  description: "Get detailed information about a Bittensor account by address",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me account 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Get information about wallet 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Tell me about coldkey 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn" },
      },
    ],
  ],
  similes: ["taostats account", "bittensor account", "wallet info", "coldkey info"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        (query.includes("account") || 
         query.includes("wallet") || 
         query.includes("coldkey")) &&
        /5[a-zA-Z0-9]{47}/.test(query)
      );
    } catch {
      return false;
    }
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      // @ts-ignore - Service access pattern may vary between Eliza versions
      const apiClient = runtime.services?.taostatsApiClient?.value || runtime.services?.get("taostatsApiClient")?.instance?.();
      if (!apiClient) {
        return {
          success: false,
          response: "Taostats API client is not available",
        };
      }

      const query = extractQuery(message.content);
      const address = extractAddress(query);

      const response = await apiClient.getAccount(address);
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || `Failed to fetch details for account ${address}`,
        };
      }

      return {
        success: true,
        response: formatAccountData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
}; 