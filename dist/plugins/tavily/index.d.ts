import { SearchPlugin, SearchPluginConfig, SearchAction } from '../../common/types';
export interface TavilyPluginConfig extends SearchPluginConfig {
    searchType?: 'search' | 'news' | 'academic';
}
export declare class TavilySearchPlugin implements SearchPlugin {
    name: string;
    description: string;
    config: TavilyPluginConfig;
    private rateLimiter;
    constructor(config: TavilyPluginConfig);
    actions: SearchAction[];
}
