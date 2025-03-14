import {
  IAgentRuntime,
  Memory,
  State,
} from "@ai16z/eliza";
import { TaostatsApiClient } from "../api/client.ts";
import { formatValidatorData } from "../utils/formatting.ts";
import { handleTaostatsApiError, extractQuery, extractHotkey } from "../utils/errors.ts";
import { SearchAction } from "../../../common/types.ts";

// Get validator details action
export const TAOSTATS_VALIDATOR_ACTION: SearchAction = {
  name: "TAOSTATS_VALIDATOR",
  description: "Get detailed information about a specific validator by hotkey",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me validator 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Get information about validator 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Tell me about validator 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn" },
      },
    ],
  ],
  similes: ["taostats validator", "bittensor validator", "validator info"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("validator") &&
        /[a-zA-Z0-9]{48}/.test(query)
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
      const apiClient = runtime.services?.get("taostatsApiClient") as TaostatsApiClient;
      if (!apiClient) {
        return {
          success: false,
          response: "Taostats API client is not available",
        };
      }

      const query = extractQuery(message.content);
      const hotkey = extractHotkey(query);

      const response = await apiClient.getValidator(hotkey);
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || `Failed to fetch details for validator ${hotkey}`,
        };
      }

      return {
        success: true,
        response: formatValidatorData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
};

// Get validators in subnet action
export const TAOSTATS_VALIDATORS_IN_SUBNET_ACTION: SearchAction = {
  name: "TAOSTATS_VALIDATORS_IN_SUBNET",
  description: "Get a list of validators in a specific subnet",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me validators in subnet 1" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "List validators for subnet 5" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Who are the validators in subnet 11?" },
      },
    ],
  ],
  similes: ["taostats subnet validators", "bittensor subnet validators", "subnet validators"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("validator") &&
        query.includes("subnet") &&
        /\d+/.test(query)
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
      const apiClient = runtime.services?.get("taostatsApiClient") as TaostatsApiClient;
      if (!apiClient) {
        return {
          success: false,
          response: "Taostats API client is not available",
        };
      }

      const query = extractQuery(message.content);
      const matches = query.match(/\d+/);
      
      if (!matches || matches.length === 0) {
        return {
          success: false,
          response: "No subnet ID found in the query",
        };
      }
      
      const subnetId = parseInt(matches[0], 10);
      
      // Determine the limit based on the query
      let limit = 5;
      if (query.includes("all") || query.includes("list all")) {
        limit = 10;
      }

      const response = await apiClient.getValidatorsInSubnet(subnetId, limit);
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || `Failed to fetch validators for subnet ${subnetId}`,
        };
      }

      const formattedValidators = response.data.map((validator, index) => {
        return `${index + 1}. Validator: ${validator.hotkey.substring(0, 10)}...\n   Stake: ${validator.stake.toFixed(6)} τ\n   Rank: ${validator.rank}\n   Emission: ${validator.emission.toFixed(6)} τ`;
      }).join("\n\n");

      return {
        success: true,
        response: `Validators in Subnet ${subnetId}:\n\n${formattedValidators}`,
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
}; 