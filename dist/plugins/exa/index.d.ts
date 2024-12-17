import { SearchPlugin, SearchPluginConfig, SearchAction } from '../../common/types';
export interface ExaPluginConfig extends SearchPluginConfig {
    searchType?: 'semantic' | 'code' | 'document';
    filters?: {
        language?: string;
        fileType?: string;
    };
}
export declare class ExaSearchPlugin implements SearchPlugin {
    name: string;
    description: string;
    config: ExaPluginConfig;
    private rateLimiter;
    constructor(config: ExaPluginConfig);
    actions: SearchAction[];
}
