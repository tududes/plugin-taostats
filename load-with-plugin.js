"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const eliza_1 = require("@ai16z/eliza");
const loader_ts_1 = require("./src/common/loader.ts");
const client_direct_1 = require("@ai16z/client-direct");
// Minimal DatabaseAdapter Mock
const minimalDatabaseAdapter = {
    db: null,
    init: async () => { },
    close: async () => { },
    getAccountById: async () => null,
    createAccount: async () => true,
    getMemories: async () => [],
    getMemoryById: async () => null,
    getMemoriesByRoomIds: async () => [],
    getCachedEmbeddings: async () => [],
    searchMemories: async () => [],
    searchMemoriesByEmbedding: async () => [],
    createMemory: async () => { },
    removeMemory: async () => { },
    removeAllMemories: async () => { },
    countMemories: async () => 0,
    log: async () => { },
    getActorDetails: async () => [],
    updateGoalStatus: async () => { },
    getGoals: async () => [],
    updateGoal: async () => { },
    createGoal: async () => { },
    removeGoal: async () => { },
    removeAllGoals: async () => { },
    getRoom: async () => (0, eliza_1.stringToUuid)("mock-room-id"),
    createRoom: async () => (0, eliza_1.stringToUuid)("mock-room-id"),
    removeRoom: async () => { },
    getRoomsForParticipant: async () => [],
    getRoomsForParticipants: async () => [],
    addParticipant: async () => true,
    removeParticipant: async () => true,
    getParticipantsForAccount: async () => [],
    getParticipantsForRoom: async () => [],
    getParticipantUserState: async () => "FOLLOWED",
    setParticipantUserState: async () => { },
};
// Cache Adapter Implementation
class CompatibleCacheAdapter {
    constructor() {
        this.data = new Map();
    }
    async get(key) {
        const value = this.data.get(key);
        return (value ? JSON.parse(value) : undefined);
    }
    async set(key, value) {
        this.data.set(key, JSON.stringify(value));
    }
    async delete(key) {
        this.data.delete(key);
    }
}
// Function to resolve plugins from their string names
async function resolvePlugins(pluginNames) {
    return await Promise.all(pluginNames.map(async (pluginName) => {
        try {
            const resolvedPath = require.resolve(pluginName, {
                paths: [process.cwd()],
            });
            const importedPlugin = await Promise.resolve(`${resolvedPath}`).then(s => __importStar(require(s)));
            eliza_1.elizaLogger.info(`Loaded plugin: ${pluginName}`);
            return importedPlugin.default || importedPlugin;
        }
        catch (error) {
            eliza_1.elizaLogger.error(`Failed to load plugin: ${pluginName}`, error);
            throw error;
        }
    }));
}
async function main() {
    eliza_1.elizaLogger.info("Starting Eliza Agent...");
    const characters = await (0, loader_ts_1.loadCharacters)("characters.json");
    for (const character of characters) {
        // Keep character.plugins untouched and separate resolved plugins
        const pluginNames = character.plugins; // Original string array
        const resolvedPlugins = await resolvePlugins(pluginNames); // Resolve to Plugin[]
        const runtime = new eliza_1.AgentRuntime({
            character,
            token: "dummy-token",
            agentId: (0, eliza_1.stringToUuid)(character.name),
            modelProvider: character.modelProvider || "openai",
            plugins: resolvedPlugins, // Pass Plugin[] to runtime
            databaseAdapter: minimalDatabaseAdapter,
            cacheManager: new CompatibleCacheAdapter(),
            logging: true,
        });
        const directClient = new client_direct_1.DirectClient();
        directClient.registerAgent(runtime);
        directClient.start(3000);
    }
    eliza_1.elizaLogger.success("Eliza agents started successfully!");
}
main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});
