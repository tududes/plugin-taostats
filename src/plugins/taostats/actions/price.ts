import {
  IAgentRuntime,
  Memory,
  State,
  ActionExample,
} from "@ai16z/eliza";
import { TaostatsApiClient } from "../api/client.ts";
import { formatPriceData, formatPriceHistoryData } from "../utils/formatting.ts";
import { handleTaostatsApiError, extractQuery } from "../utils/errors.ts";
import { SearchAction } from "../../../common/types.ts";

// Get current TAO price action
export const TAOSTATS_PRICE_ACTION: SearchAction = {
  name: "TAOSTATS_PRICE",
  description: "Get the current price of TAO and related market data",
  examples: [
    [
      {
        user: "user",
        content: { text: "What is the current price of TAO?" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "Show me TAO market data" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "What's the current TAO price and market cap?" },
      },
    ],
  ],
  similes: ["taostats price", "tao price", "bittensor price"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("price") &&
        (query.includes("tao") || query.includes("bittensor"))
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

      const response = await apiClient.getPrice();
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || "Failed to fetch TAO price data",
        };
      }

      return {
        success: true,
        response: formatPriceData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
};

// Get TAO price history action
export const TAOSTATS_PRICE_HISTORY_ACTION: SearchAction = {
  name: "TAOSTATS_PRICE_HISTORY",
  description: "Get the historical price data for TAO",
  examples: [
    [
      {
        user: "user",
        content: { text: "Show me TAO price history" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "What was the price of TAO over the last month?" },
      },
    ],
    [
      {
        user: "user",
        content: { text: "TAO price trend for the past week" },
      },
    ],
  ],
  similes: ["taostats price history", "tao price history", "bittensor price trend"],
  validate: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
  ) => {
    try {
      const query = extractQuery(message.content).toLowerCase();
      return (
        query.includes("price") &&
        (query.includes("tao") || query.includes("bittensor")) &&
        (query.includes("history") || 
         query.includes("trend") || 
         query.includes("past") || 
         query.includes("over") ||
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
      // @ts-ignore - Service access pattern may vary between Eliza versions
      const apiClient = runtime.services?.taostatsApiClient?.value || runtime.services?.get("taostatsApiClient")?.instance?.();
      if (!apiClient) {
        return {
          success: false,
          response: "Taostats API client is not available",
        };
      }

      // Determine the interval based on the query
      const query = extractQuery(message.content).toLowerCase();
      let interval = "1d";
      let limit = 30;
      
      if (query.includes("hour") || query.includes("hourly")) {
        interval = "1h";
        limit = 24;
      } else if (query.includes("day") || query.includes("daily")) {
        interval = "1d";
        limit = 30;
      } else if (query.includes("week") || query.includes("weekly")) {
        interval = "1w";
        limit = 12;
      } else if (query.includes("month") || query.includes("monthly")) {
        interval = "1M";
        limit = 12;
      }

      const response = await apiClient.getPriceHistory(interval, limit);
      
      if (!response.success || !response.data) {
        return {
          success: false,
          response: response.error || "Failed to fetch TAO price history data",
        };
      }

      return {
        success: true,
        response: formatPriceHistoryData(response.data),
      };
    } catch (error) {
      return handleTaostatsApiError(error);
    }
  },
}; 