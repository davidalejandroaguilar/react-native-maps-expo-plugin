# react-native-maps-expo-plugin

Expo Config Plugin for setting up Google Maps in react-native-maps on iOS. Created specifically to support Continuous Native Generation (CNG) workflow.

## What is CNG?

Continuous Native Generation (CNG) is a process for building an Expo app where your [native projects](https://docs.expo.dev/workflow/overview#android-and-ios-native-projects) are generated on-demand from your app.json and package.json, similar to how your node_modules are generated from your package.json.

You can add the native project directories (android and ios) to your .gitignore and/or delete the project at any time, then re-generate them from the Expo app config with npx expo prebuild whenever required. You might never even run prebuild on your own development machine if you use a cloud-based development workflow.

Using CNG can make upgrading to new versions of React Native much easier. It can simplify project maintenance and facilitate setting up complex features such as [App Clips](https://github.com/bndkt/react-native-app-clip), [share extensions](https://github.com/timedtext/expo-config-plugin-ios-share-extension), and [push notifications](https://github.com/OneSignal/onesignal-expo-plugin). This is all made possible with [config plugins](https://docs.expo.dev/config-plugins/introduction). Learn more about [CNG](https://docs.expo.dev/workflow/continuous-native-generation).

## Why this plugin exists

The official react-native-maps installation requires manual modifications to native iOS files that get wiped out when using CNG (`npx expo prebuild --clean`). This plugin automatically handles:

- Adding Google Maps pod to Podfile
- Adding location permission to Info.plist
- Initializing Google Maps in AppDelegate

Why this is better than tweaking the generated native files yourself:

Here's Expo documentation on why tweaking the files yourself is not a good idea: [docs.expo.dev/workflow/overview/#what-if-i-want-to-edit-the](https://docs.expo.dev/workflow/overview/#what-if-i-want-to-edit-the).

In other words, it will do the `react-native-maps` installation instructions for you every time, so you can keep enjoying CNG!

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
