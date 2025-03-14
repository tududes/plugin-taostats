declare module '@ai16z/client-direct' {
  export interface DirectClientOptions {
    character?: string;
    characters?: string[];
    plugins?: string[];
    port?: number;
    host?: string;
  }

  export class DirectClient {
    constructor(options?: DirectClientOptions);
    registerAgent(agent: any): void;
    start(port?: number): Promise<void>;
  }
} 