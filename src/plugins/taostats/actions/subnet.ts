import {
  IAgentRuntime,
  Memory,
  State,
} from "@ai16z/eliza";
import { TaostatsApiClient } from "../api/client.ts";
import { formatSubnetsList, formatSubnetData } from "../utils/formatting.ts";
import { handleTaostatsApiError, extractQuery, extractSubnetId } from "../utils/errors.ts";
import { SearchAction } from "../../../common/types.ts";

// Get subnets list action
export const TAOSTATS_SUBNETS_LIST_ACTION: SearchAction = {
  name: "TAOSTATS_SUBNETS_LIST",
  description: "Get a list of available subnets on the Bittensor network",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me all Bittensor subnets" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "List available subnets" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "What subnets are on Bittensor?" },
      },
    ],
  ],
  similes: ["taostats subnets", "bittensor subnets", "list subnets"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("subnet") &&
        (query.includes("list") || 
         query.includes("all") || 
         query.includes("available") ||
         query.includes("show"))
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

      const response = await apiClient.getSubnets();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || "Failed to fetch subnets list",
        };
      }

      return {
        success: true,
        response: formatSubnetsList(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
};

// Get subnet details action
export const TAOSTATS_SUBNET_DETAILS_ACTION: SearchAction = {
  name: "TAOSTATS_SUBNET_DETAILS",
  description: "Get detailed information about a specific subnet",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me details for subnet 1" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "What is subnet 5?" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Tell me about subnet 11" },
      },
    ],
  ],
  similes: ["taostats subnet", "bittensor subnet", "subnet info"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("subnet") &&
        /\d+/.test(query) &&
        (query.includes("details") || 
         query.includes("info") || 
         query.includes("about") ||
         query.includes("what is"))
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
      const subnetId = extractSubnetId(query);

      const response = await apiClient.getSubnet(subnetId);
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || `Failed to fetch details for subnet ${subnetId}`,
        };
      }

      return {
        success: true,
        response: formatSubnetData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
}; 