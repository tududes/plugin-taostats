"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const eliza_1 = require("@ai16z/eliza");
const loader_ts_1 = require("./src/common/loader.ts");
const client_direct_1 = require("@ai16z/client-direct");
const characterFilePath = path_1.default.resolve(process.cwd(), "characterfile.json");
if (!fs_1.default.existsSync(characterFilePath)) {
    console.error("Error: characterfile.json not found. Please create it in the root.");
    process.exit(1);
}
async function main() {
    try {
        eliza_1.elizaLogger.info("Starting Eliza Agent with Custom Plugin...");
        // Pass single file path as a string
        const characters = await (0, loader_ts_1.loadCharacters)(characterFilePath);
        if (characters.length === 0) {
            console.error("No valid characters loaded.");
            process.exit(1);
        }
        const directClient = new client_direct_1.DirectClient();
        // Use directClient.startAgent instead of startAgent directly
        for (const character of characters) {
            eliza_1.elizaLogger.info(`Starting agent: ${character.name}`);
            await directClient.startAgent(character);
        }
        // Start the direct client server
        directClient.start(3000);
        eliza_1.elizaLogger.success("Agent(s) started successfully!");
    }
    catch (error) {
        console.error("Error initializing agent:", error);
        process.exit(1);
    }
}
main();
