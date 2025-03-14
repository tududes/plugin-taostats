import {
  Plugin, 
  Action
} from "@ai16z/eliza";
import { TaostatsApiClient } from "../api/client.ts";
import { formatSubnetsList, formatSubnetData } from "../utils/formatting.ts";
import { handleTaostatsApiError, extractQuery, extractSubnetId } from "../utils/errors.ts";
import { SearchAction } from "../../../common/types.ts";

// Utility function to add timeout to API calls
const withTimeout = <T>(promise: Promise<T>, timeoutMs: number = 10000, failureValue: T): Promise<T> => {
  let timeoutId: NodeJS.Timeout;
  
  // Create a promise that resolves with failureValue after timeoutMs
  const timeoutPromise = new Promise<T>((resolve) => {
    timeoutId = setTimeout(() => {
      console.error(`[TAOSTATS] Operation timed out after ${timeoutMs}ms`);
      // Instead of rejecting, resolve with the failure value
      resolve(failureValue);
    }, timeoutMs);
  });
  
  // Create a promise that resolves with the result of the passed promise and clears the timeout
  const wrappedPromise = promise
    .then(result => {
      clearTimeout(timeoutId);
      return result;
    })
    .catch(error => {
      clearTimeout(timeoutId);
      throw error;
    });
  
  // Return a race between the promises
  return Promise.race([wrappedPromise, timeoutPromise]);
};

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
    console.log(`[TAOSTATS] Subnet list handler started`);
    try {
      // @ts-ignore - Service access pattern may vary between Eliza versions
      const apiClient = runtime.services?.taostatsApiClient?.value || runtime.services?.get("taostatsApiClient")?.instance?.();
      if (!apiClient) {
        console.error(`[TAOSTATS] API client not available`);
        return {
          success: false,
          response: "Taostats API client is not available",
        };
      }
      
      console.log(`[TAOSTATS] Calling API to get subnets list`);
      const response = await withTimeout(apiClient.getSubnets(), 10000, { success: false, data: null, error: "Operation timed out" });
      console.log(`[TAOSTATS] API response received for subnets list`);
      
      if (!response.success || !response.data) {
        console.error(`[TAOSTATS] API request failed: ${response.error}`);
        return {
          success: true, // Still return true so the response shows
          response: "I couldn't fetch the list of subnets from the Taostats API. This feature may be temporarily unavailable or require additional permissions. Please try again later or check the Taostats dashboard at https://taostats.io/",
        };
      }

      console.log(`[TAOSTATS] Formatting subnets list`);
      const formattedResponse = formatSubnetsList(response.data);
      console.log(`[TAOSTATS] Subnets list formatted successfully`);
      
      return {
        success: true,
        response: formattedResponse,
      };
    } catch (error: any) {
      console.error(`[TAOSTATS] Error in subnet list handler: ${error.message}`);
      return {
        success: true, // Still return true with a user-friendly message
        response: "I encountered an error while fetching subnets information. The Taostats API may be temporarily unavailable. Please try again later or check directly on https://taostats.io/"
      };
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
    console.log(`[TAOSTATS] Subnet details handler started`);
    try {
      // @ts-ignore - Service access pattern may vary between Eliza versions
      const apiClient = runtime.services?.taostatsApiClient?.value || runtime.services?.get("taostatsApiClient")?.instance?.();
      if (!apiClient) {
        console.error(`[TAOSTATS] API client not available`);
        return {
          success: false,
          response: "Taostats API client is not available",
        };
      }
      
      console.log(`[TAOSTATS] Extracting query from message`);
      const query = extractQuery(message.content);
      console.log(`[TAOSTATS] Query extracted: ${query}`);
      
      console.log(`[TAOSTATS] Extracting subnet ID from query`);
      const subnetId = extractSubnetId(query);
      console.log(`[TAOSTATS] Subnet ID extracted: ${subnetId}`);

      console.log(`[TAOSTATS] Calling API to get subnet details for subnet ${subnetId}`);
      const response = await withTimeout(apiClient.getSubnet(subnetId), 10000, { success: false, data: null, error: "Operation timed out" });
      console.log(`[TAOSTATS] API response received for subnet ${subnetId}`);
      
      if (!response.success || !response.data) {
        console.error(`[TAOSTATS] API request failed: ${response.error}`);
        return {
          success: true, // Still return true so the response shows
          response: `I couldn't fetch details for subnet ${subnetId} from the Taostats API. This feature may be temporarily unavailable or require additional permissions. Please try again later or check the Taostats dashboard at https://taostats.io/subnet/${subnetId}`,
        };
      }

      console.log(`[TAOSTATS] Formatting subnet data for subnet ${subnetId}`);
      const formattedResponse = formatSubnetData(response.data);
      console.log(`[TAOSTATS] Subnet details formatted successfully`);
      
      return {
        success: true,
        response: formattedResponse,
      };
    } catch (error: any) {
      console.error(`[TAOSTATS] Error in subnet details handler: ${error.message}`);
      return {
        success: true, // Still return true with a user-friendly message
        response: "I encountered an error while fetching subnet information. The Taostats API may be temporarily unavailable. Please try again later or check directly on https://taostats.io/"
      };
    }
  },
}; 