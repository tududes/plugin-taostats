import path from "path";
import fs from "fs";
import {
  AgentRuntime,
  elizaLogger,
  type Character,
  validateCharacterConfig,
  stringToUuid,
  type IDatabaseAdapter,
} from "@ai16z/eliza";

import { loadCharacters } from "./src/common/loader.ts";
import { DirectClient } from "@ai16z/client-direct";

interface Plugin {
  name: string;
  description: string;
  actions?: any[];
  providers?: any[];
  evaluators?: any[];
  services?: any[];
  clients?: any[];
}

// Minimal DatabaseAdapter Mock
const minimalDatabaseAdapter: IDatabaseAdapter = {
  db: null,
  init: async () => {},
  close: async () => {},
  getAccountById: async () => null,
  createAccount: async () => true,
  getMemories: async () => [],
  getMemoryById: async () => null,
  getMemoriesByRoomIds: async () => [],
  getCachedEmbeddings: async () => [],
  searchMemories: async () => [],
  searchMemoriesByEmbedding: async () => [],
  createMemory: async () => {},
  removeMemory: async () => {},
  removeAllMemories: async () => {},
  countMemories: async () => 0,
  log: async () => {},
  getActorDetails: async () => [],
  updateGoalStatus: async () => {},
  getGoals: async () => [],
  updateGoal: async () => {},
  createGoal: async () => {},
  removeGoal: async () => {},
  removeAllGoals: async () => {},

  getRoom: async () =>
    stringToUuid(
      "mock-room-id",
    ) as `${string}-${string}-${string}-${string}-${string}`,
  createRoom: async () =>
    stringToUuid(
      "mock-room-id",
    ) as `${string}-${string}-${string}-${string}-${string}`,
  removeRoom: async () => {},
  getRoomsForParticipant: async () => [],
  getRoomsForParticipants: async () => [],
  addParticipant: async () => true,
  removeParticipant: async () => true,
  getParticipantsForAccount: async () => [],
  getParticipantsForRoom: async () => [],
  getParticipantUserState: async () => "FOLLOWED",
  setParticipantUserState: async () => {},
  createRelationship: async () => true,
  getRelationship: async () => null,
  getRelationships: async () => [],
};

// Cache Adapter Implementation
class CompatibleCacheAdapter {
  private data = new Map<string, string>();

  async get<T = unknown>(key: string): Promise<T | undefined> {
    const value = this.data.get(key);
    return (value ? JSON.parse(value) : undefined) as T;
  }
  async set<T>(key: string, value: T): Promise<void> {
    this.data.set(key, JSON.stringify(value));
  }
  async delete(key: string): Promise<void> {
    this.data.delete(key);
  }
}

// Function to resolve plugins from their string names
async function resolvePlugins(pluginNames: string[]): Promise<Plugin[]> {
  return await Promise.all(
    pluginNames.map(async (pluginName) => {
      try {
        const resolvedPath = require.resolve(pluginName, {
          paths: [process.cwd()],
        });
        const importedPlugin = await import(resolvedPath);
        elizaLogger.info(`Loaded plugin: ${pluginName}`);
        return (importedPlugin.default as Plugin) || (importedPlugin as Plugin);
      } catch (error) {
        elizaLogger.error(`Failed to load plugin: ${pluginName}`, error);
        throw error;
      }
    }),
  );
}

// Type Guard to check if plugins are strings
function isStringArray(plugins: unknown): plugins is string[] {
  return Array.isArray(plugins) && plugins.every((p) => typeof p === "string");
}

async function main() {
  elizaLogger.info("Starting Eliza Agent...");

  const characters: Character[] = await loadCharacters("characters.json");

  for (const character of characters) {
    // Safely resolve plugins if they are strings
    let resolvedPlugins: Plugin[] = [];

    if (isStringArray(character.plugins)) {
      resolvedPlugins = await resolvePlugins(character.plugins);
    } else if (Array.isArray(character.plugins)) {
      // Assume they are already Plugin objects
      resolvedPlugins = character.plugins as Plugin[];
    }

    elizaLogger.info(
      `Character "${character.name}" loaded with ${resolvedPlugins.length} plugins.`,
    );

    // Here you can pass `resolvedPlugins` into the AgentRuntime
    const runtime = new AgentRuntime({
      character,
      plugins: resolvedPlugins,
      token: "dummy-token",
      agentId: stringToUuid(
        character.name,
      ) as `${string}-${string}-${string}-${string}-${string}`,
      modelProvider: character.modelProvider,
      databaseAdapter: minimalDatabaseAdapter,
      cacheManager: new Map() as any, // Replace with real cacheManager if needed
      logging: true,
    });

    elizaLogger.success(`Agent "${character.name}" initialized successfully!`);

    const directClient = new DirectClient();
    directClient.registerAgent(runtime);
    directClient.start(3000);
  }

  elizaLogger.success("Eliza agents started successfully!");
}
main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
