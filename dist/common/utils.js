"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimiter = exports.formatSearchResults = exports.handleApiError = exports.validateSearchQuery = exports.validateApiKey = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = "ApiError";
    }
}
exports.ApiError = ApiError;
const validateApiKey = (config) => {
    if (!config.apiKey) {
        throw new ApiError("API key is required");
    }
};
exports.validateApiKey = validateApiKey;
const validateSearchQuery = (content) => {
    const query = typeof content === "string" ? content : content.text;
    if (!query?.trim()) {
        throw new ApiError("Search query is required");
    }
    return query.trim();
};
exports.validateSearchQuery = validateSearchQuery;
const handleApiError = (error) => {
    if (error instanceof ApiError) {
        return {
            success: false,
            response: `API Error: ${error.message}`,
        };
    }
    return {
        success: false,
        response: "An unexpected error occurred",
    };
};
exports.handleApiError = handleApiError;
const formatSearchResults = (results) => {
    return results
        .map((result, index) => {
        return `${index + 1}. ${result.title}\n   ${result.url}\n   ${result.snippet}\n`;
    })
        .join("\n");
};
exports.formatSearchResults = formatSearchResults;
const createRateLimiter = (maxRequests, timeWindow) => {
    const requests = [];
    return {
        checkLimit: () => {
            const now = Date.now();
            const windowStart = now - timeWindow;
            // Remove old requests
            while (requests.length > 0 && requests[0] < windowStart) {
                requests.shift();
            }
            // Check if we're at the limit
            if (requests.length >= maxRequests) {
                return false;
            }
            // Add new request
            requests.push(now);
            return true;
        },
    };
};
exports.createRateLimiter = createRateLimiter;
