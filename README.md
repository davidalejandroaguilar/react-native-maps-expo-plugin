# react-native-maps-expo-plugin

Expo Config Plugin for setting up Google Maps in react-native-maps on iOS. Created specifically to support Continuous Native Generation (CNG) workflow.

## Why this plugin exists

The official react-native-maps installation requires manual modifications to native iOS files that get wiped out when using CNG (`npx expo prebuild --clean`). This plugin automatically handles:

- Adding Google Maps pod to Podfile
- Adding location permission to Info.plist
- Initializing Google Maps in AppDelegate

## Installation

```bash
npm install react-native-maps react-native-maps-expo-plugin
```

## Usage

1. Add plugin to your app.json/app.config.js:

```json
{
  "plugins": [
    [
      "react-native-maps-expo-plugin",
      {
        "googleMapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY"
      }
    ]
  ]
}
```

2. Generate native code and build:

```bash
# Generate native code
npx expo prebuild

# Build and run on iOS
npx expo run:ios

# Or if using CNG workflow, use --clean to safely regenerate native files
npx expo prebuild --clean
npx expo run:ios
```

## Requirements

- Expo SDK 50 or newer
- react-native-maps installed in your project

## Getting your Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project
3. Enable Maps SDK for iOS
4. Create credentials (API key)
5. Add restrictions to the API key (recommended)

## License

MIT
