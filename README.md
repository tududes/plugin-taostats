# Eliza Plugin Starter Template

This repository provides a starter template for creating plugins for the [Eliza](https://github.com/ai16z/eliza) AI agent framework. It includes example implementations for search functionality using Tavily and Exa APIs.

## Prerequisites

- Node.js 23+
- pnpm
- TypeScript knowledge

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/eliza-plugin-starter.git
cd eliza-plugin-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Build the project:
```bash
pnpm build
```

## Project Structure

```
src/
  ├── plugins/
  │   ├── tavily/     # Tavily search plugin implementation
  │   └── exa/        # Exa search plugin implementation
  ├── common/         # Shared utilities and types
  └── index.ts        # Main entry point
```

## Creating a Plugin

See the [Plugin Development Guide](docs/PLUGIN_GUIDE.md) for detailed instructions on creating your own plugin.

## Example Plugins

This template includes two example plugin implementations:

1. Tavily Search Plugin: Demonstrates web search capabilities using the Tavily API
2. Exa Search Plugin: Shows how to integrate with the Exa search API

Check the individual plugin directories for specific documentation and usage instructions.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT
