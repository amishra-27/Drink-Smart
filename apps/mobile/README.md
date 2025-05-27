# DrinkSmart Mobile App

This is the mobile application for DrinkSmart, built with React Native, Expo, and NativeWind.

## Features

- React Native with Expo
- TypeScript for type safety
- NativeWind (TailwindCSS for React Native)
- React Navigation for routing
- React Query for data fetching
- Expo Notifications for reminders
- Dark mode support
- Web support via React Native Web

## Getting Started

### Prerequisites

- Node.js
- pnpm
- Expo CLI (optional)

### Installation

From the root of the monorepo:

```bash
pnpm install
```

### Running the app

```bash
# Start the development server
pnpm --filter @drink-smart/mobile start

# Run on iOS
pnpm --filter @drink-smart/mobile ios

# Run on Android
pnpm --filter @drink-smart/mobile android

# Run on Web
pnpm --filter @drink-smart/mobile web
```

## Project Structure

```
mobile/
├── assets/           # Images, fonts, and other static assets
├── src/
│   ├── components/   # Reusable components
│   ├── context/      # React context providers
│   ├── navigation/   # Navigation configuration
│   ├── screens/      # Screen components
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── App.tsx           # Main app component
├── app.json          # Expo configuration
└── babel.config.js   # Babel configuration
``` 