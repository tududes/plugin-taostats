import { Content } from "@ai16z/eliza";
import { SearchPluginConfig, SearchResult } from "./types";
export declare class ApiError extends Error {
    statusCode?: number | undefined;
    constructor(message: string, statusCode?: number | undefined);
}
export declare const validateApiKey: (config: SearchPluginConfig) => void;
export declare const validateSearchQuery: (content: Content) => string;
export declare const handleApiError: (error: unknown) => {
    success: false;
    response: string;
};
export declare const formatSearchResults: (results: SearchResult[]) => string;
export declare const createRateLimiter: (maxRequests: number, timeWindow: number) => {
    checkLimit: () => boolean;
};
