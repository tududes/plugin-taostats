"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExaSearchPlugin = void 0;
const utils_1 = require("../../common/utils");
const DEFAULT_CONFIG = {
    maxResults: 5,
    searchType: 'semantic',
};
class ExaSearchPlugin {
    constructor(config) {
        this.name = 'exa-search';
        this.description = 'Search using Exa API for semantic, code, and document search';
        this.rateLimiter = (0, utils_1.createRateLimiter)(60, 60000); // 60 requests per minute
        this.actions = [
            {
                name: 'EXA_SEARCH',
                description: 'Search using Exa API',
                examples: [
                    [
                        {
                            user: 'user',
                            content: { text: 'Find code examples for implementing OAuth' }
                        }
                    ],
                    [
                        {
                            user: 'user',
                            content: { text: 'Search for documentation about GraphQL' }
                        }
                    ]
                ],
                similes: [
                    'like having a code-aware search engine',
                    'like a technical documentation expert',
                    'like a semantic code analyzer',
                ],
                validate: async (runtime, message, state) => {
                    try {
                        (0, utils_1.validateSearchQuery)(message.content);
                        return true;
                    }
                    catch {
                        return false;
                    }
                },
                handler: async (runtime, message, state) => {
                    try {
                        if (!this.rateLimiter.checkLimit()) {
                            return {
                                success: false,
                                response: 'Rate limit exceeded. Please try again later.',
                            };
                        }
                        const query = (0, utils_1.validateSearchQuery)(message.content);
                        const response = await fetch('https://api.exa.ai/search', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${this.config.apiKey}`,
                            },
                            body: JSON.stringify({
                                query,
                                search_type: this.config.searchType,
                                max_results: this.config.maxResults,
                                filters: this.config.filters,
                            }),
                        });
                        if (!response.ok) {
                            throw new Error(`Exa API error: ${response.statusText}`);
                        }
                        const data = await response.json();
                        const results = data.results.map(result => ({
                            title: result.title,
                            url: result.url,
                            snippet: result.snippet,
                            score: result.score,
                            source: 'exa',
                        }));
                        return {
                            success: true,
                            response: (0, utils_1.formatSearchResults)(results),
                        };
                    }
                    catch (error) {
                        return (0, utils_1.handleApiError)(error);
                    }
                },
            },
        ];
        this.config = { ...DEFAULT_CONFIG, ...config };
        (0, utils_1.validateApiKey)(this.config);
    }
}
exports.ExaSearchPlugin = ExaSearchPlugin;
