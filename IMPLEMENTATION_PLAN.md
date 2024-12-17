# Implementation Plan for Eliza Search Plugins

## Minimal Core Components

### 1. Base Types and Interfaces
```typescript
// src/common/types.ts
interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  score?: number;
  source: 'tavily' | 'exa';
  metadata?: Record<string, unknown>;
}

interface SearchOptions {
  maxResults?: number;
  searchType?: string;
  filters?: Record<string, unknown>;
}

interface SearchProvider {
  search(query: string, options?: SearchOptions): Promise<SearchResult[]>;
}
```

### 2. Common Utilities
```typescript
// src/common/utils.ts
- API key validation
- Rate limiting helpers
- Error handling utilities
- Response formatting
```

## Plugin Templates

### 1. Tavily Search Plugin
```typescript
// src/plugins/tavily/index.ts
- API integration with Tavily
- Web search implementation
- News search implementation
- Academic search implementation
```

Configuration:
```typescript
interface TavilyConfig {
  apiKey: string;
  maxResults?: number;
  searchType?: 'search' | 'news' | 'academic';
}
```

### 2. Exa Search Plugin
```typescript
// src/plugins/exa/index.ts
- API integration with Exa
- Semantic search implementation
- Code search implementation
- Document search implementation
```

Configuration:
```typescript
interface ExaConfig {
  apiKey: string;
  maxResults?: number;
  searchType?: 'semantic' | 'code' | 'document';
  filters?: {
    language?: string;
    fileType?: string;
  };
}
```

## Implementation Steps

1. Core Components:
   - Implement base types and interfaces
   - Create utility functions
   - Set up error handling

2. Tavily Plugin:
   - Implement API client
   - Create search actions
   - Add result processing
   - Implement caching (optional)

3. Exa Plugin:
   - Implement API client
   - Create search actions
   - Add specialized search types
   - Implement filtering

4. Testing:
   - Unit tests for core components
   - Integration tests for each plugin
   - Example usage scenarios

## Configuration Management

1. Environment Variables:
```env
TAVILY_API_KEY=your_tavily_key
EXA_API_KEY=your_exa_key
```

2. Plugin Configuration:
```typescript
// Example configuration
const config = {
  tavily: {
    apiKey: process.env.TAVILY_API_KEY,
    maxResults: 10,
    searchType: 'search'
  },
  exa: {
    apiKey: process.env.EXA_API_KEY,
    maxResults: 10,
    searchType: 'semantic'
  }
};
```

## Example Usage

```typescript
// Example agent configuration
const agent = new ElizaAgent({
  plugins: [
    new TavilySearchPlugin(config.tavily),
    new ExaSearchPlugin(config.exa)
  ]
});
```

## Documentation Requirements

1. README.md:
   - Installation instructions
   - Basic usage examples
   - Configuration guide

2. Plugin-specific docs:
   - API reference
   - Configuration options
   - Example queries

3. Contributing guide:
   - Development setup
   - Testing instructions
   - PR guidelines
