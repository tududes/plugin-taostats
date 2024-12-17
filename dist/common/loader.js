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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCharacters = loadCharacters;
const eliza_1 = require("@ai16z/eliza");
const fs_1 = __importDefault(require("fs"));
function tryLoadFile(filePath) {
    // Check for --characters flag
    const args = process.argv;
    const charactersFlag = args.find((arg) => arg.startsWith("--characters="));
    const characterPath = charactersFlag?.split("=")[1];
    if (characterPath) {
        filePath = characterPath;
    }
    try {
        return fs_1.default.readFileSync(filePath, "utf8");
    }
    catch (e) {
        return null;
    }
}
function isAllStrings(arr) {
    return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
async function loadCharacters(characterPath) {
    const loadedCharacters = [];
    const content = tryLoadFile(characterPath);
    if (!content) {
        eliza_1.elizaLogger.error(`Error loading character from ${characterPath}: File not found`);
        process.exit(1);
    }
    try {
        const character = JSON.parse(content);
        (0, eliza_1.validateCharacterConfig)(character);
        if (isAllStrings(character.plugins)) {
            eliza_1.elizaLogger.info("Plugins are: ", character.plugins);
            const importedPlugins = await Promise.all(character.plugins.map(async (plugin) => {
                const importedPlugin = await Promise.resolve(`${plugin}`).then(s => __importStar(require(s)));
                return importedPlugin.default;
            }));
            character.plugins = importedPlugins;
        }
        loadedCharacters.push(character);
        eliza_1.elizaLogger.info(`Successfully loaded character from: ${characterPath}`);
    }
    catch (e) {
        eliza_1.elizaLogger.error(`Error parsing character from ${characterPath}: ${e}`);
        process.exit(1);
    }
    if (loadedCharacters.length === 0) {
        eliza_1.elizaLogger.info("No characters found, using default character");
        loadedCharacters.push(eliza_1.defaultCharacter);
    }
    return loadedCharacters;
}
