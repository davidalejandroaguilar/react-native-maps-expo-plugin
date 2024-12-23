# react-native-maps-expo-config

Expo Config Plugin for setting up Google Maps in react-native-maps on iOS.

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
