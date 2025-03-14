import {
  IAgentRuntime,
  Memory,
  State,
} from "@ai16z/eliza";
import { TaostatsApiClient } from "../api/client.ts";
import { formatBlocksData, formatNetworkStatsData } from "../utils/formatting.ts";
import { handleTaostatsApiError, extractQuery } from "../utils/errors.ts";
import { SearchAction } from "../../../common/types.ts";

// Get recent blocks action
export const TAOSTATS_BLOCKS_ACTION: SearchAction = {
  name: "TAOSTATS_BLOCKS",
  description: "Get information about recent blocks on the Bittensor network",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me recent blocks on Bittensor" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "What are the latest blocks?" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Recent Bittensor blocks information" },
      },
    ],
  ],
  similes: ["taostats blocks", "bittensor blocks", "recent blocks"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("block") &&
        (query.includes("recent") || 
         query.includes("latest") || 
         query.includes("new") ||
         query.includes("last"))
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

      // Determine the limit based on the query
      const query = extractQuery(message.content).toLowerCase();
      let limit = 5;
      
      if (query.includes("many") || query.includes("all")) {
        limit = 10;
      }

      const response = await apiClient.getBlocks(limit);
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || "Failed to fetch blocks data",
        };
      }

      return {
        success: true,
        response: formatBlocksData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
};

// Get network statistics action
export const TAOSTATS_NETWORK_STATS_ACTION: SearchAction = {
  name: "TAOSTATS_NETWORK_STATS",
  description: "Get statistics about the Bittensor network",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me Bittensor network statistics" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "What are the current network stats for Bittensor?" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Bittensor chain statistics" },
      },
    ],
  ],
  similes: ["taostats stats", "bittensor stats", "network statistics"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        (query.includes("network") || query.includes("chain")) &&
        (query.includes("stats") || 
         query.includes("statistics") || 
         query.includes("info") ||
         query.includes("information"))
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

      const response = await apiClient.getNetworkStats();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || "Failed to fetch network statistics",
        };
      }

      return {
        success: true,
        response: formatNetworkStatsData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
}; 