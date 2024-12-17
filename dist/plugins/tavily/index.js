"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TavilySearchPlugin = void 0;
const utils_1 = require("../../common/utils");
const DEFAULT_CONFIG = {
    maxResults: 5,
    searchType: 'search',
};
class TavilySearchPlugin {
    constructor(config) {
        this.name = 'tavily-search';
        this.description = 'Search the web using Tavily API';
        this.rateLimiter = (0, utils_1.createRateLimiter)(60, 60000); // 60 requests per minute
        this.actions = [
            {
                name: 'TAVILY_SEARCH',
                description: 'Search the web using Tavily API',
                examples: [
                    [
                        {
                            user: 'user',
                            content: { text: 'Search for recent AI developments' }
                        }
                    ],
                    [
                        {
                            user: 'user',
                            content: { text: 'Find news about climate change' }
                        }
                    ]
                ],
                similes: [
                    'like a knowledgeable research assistant',
                    'like a comprehensive web search engine',
                    'like having a librarian at your fingertips',
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
                        const response = await fetch('https://api.tavily.com/search', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${this.config.apiKey}`,
                            },
                            body: JSON.stringify({
                                query,
                                search_type: this.config.searchType,
                                max_results: this.config.maxResults,
                            }),
                        });
                        if (!response.ok) {
                            throw new Error(`Tavily API error: ${response.statusText}`);
                        }
                        const data = await response.json();
                        const results = data.results.map(result => ({
                            title: result.title,
                            url: result.url,
                            snippet: result.content,
                            source: 'tavily',
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
exports.TavilySearchPlugin = TavilySearchPlugin;
