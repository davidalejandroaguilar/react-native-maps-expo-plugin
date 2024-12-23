# react-native-maps-expo-config

Expo Config Plugin for setting up Google Maps in react-native-maps on iOS. Created specifically to support Continuous Native Generation (CNG) workflow.

## Why this plugin exists

The official react-native-maps installation requires manual modifications to native iOS files:

- Adding Google Maps pod to Podfile
- Adding location permission to Info.plist
- Initializing Google Maps in AppDelegate

These manual changes get wiped out when using CNG (`npx expo prebuild --clean`). This plugin automatically handles these native modifications through Expo's config plugin system, making it compatible with CNG workflow.

## Installation

```bash
npm install react-native-maps-expo-config
```

## Usage

1. Add plugin to your app.json/app.config.js:

```json
{
  "plugins": [
    [
      "react-native-maps-expo-config",
      {
        "googleMapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY"
      }
    ]
  ]
}
```

2. Rebuild your app:

```bash
npx expo prebuild
```

## What this plugin does

- Adds required location permission to Info.plist
- Configures Google Maps pod in Podfile
- Initializes Google Maps in AppDelegate with your API key

All of these changes are handled through the config plugin system, making them compatible with CNG workflow.

## Requirements

- Expo SDK 48 or newer
- react-native-maps installed in your project

## Getting your Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project
3. Enable Maps SDK for iOS
4. Create credentials (API key)
5. Add restrictions to the API key (recommended)

## License

MIT
