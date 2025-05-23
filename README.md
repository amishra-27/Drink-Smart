# Drink Smart Monorepo

This is a monorepo for the Drink Smart application, built with pnpm workspaces.

## Project Structure

```
.
├── apps/
│   ├── web/         # Next.js web application
│   └── mobile/      # React Native mobile application
├── packages/
│   ├── ui/          # Shared UI components
│   ├── api-client/  # Shared API client
│   └── config/      # Shared configuration
└── pnpm-workspace.yaml
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [pnpm](https://pnpm.io/) (v7 or later)

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Start web app
pnpm --filter @drink-smart/web dev

# Start mobile app
pnpm --filter @drink-smart/mobile start

# Run storybook for UI components
pnpm --filter @drink-smart/ui storybook
```

## Tech Stack

- **Package Management**: pnpm workspaces
- **Build System**: Turborepo
- **Web**: Next.js, React, TailwindCSS
- **Mobile**: React Native, Expo
- **UI Components**: Storybook
- **Data Fetching**: React Query
- **Language**: TypeScript