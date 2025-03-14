declare module '@ai16z/eliza' {
  export interface ElizaActionContext {
    message: any;
    getService?: (name: string) => any;
    services?: Record<string, any>;
  }

  export interface ElizaActionResponse {
    success: boolean;
    message?: string;
    data?: any;
  }
} 