const {
  ConfigPlugin,
  withInfoPlist,
  withXcodeProject,
  withDangerousMod,
} = require("@expo/config-plugins");
const {
  mergeContents,
} = require("@expo/config-plugins/build/utils/generateCode");
const fs = require("fs");
const path = require("path");

const withReactNativeMaps = (config, { googleMapsApiKey }) => {
  config = withInfoPlist(config, (config) => {
    config.modResults.NSLocationWhenInUseUsageDescription =
      config.modResults.NSLocationWhenInUseUsageDescription ||
      "This app uses your location to show you on the map";
    return config;
  });

  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        "Podfile"
      );
      const contents = await fs.promises.readFile(podfilePath, "utf8");

      const mapsPodsSection = `
# React Native Maps dependencies
rn_maps_path = '../node_modules/react-native-maps'
pod 'react-native-google-maps', :path => rn_maps_path
`;

      const newContents = mergeContents({
        tag: "react-native-maps-dependencies",
        src: contents,
        newSrc: mapsPodsSection,
        anchor: /use_native_modules!/,
        offset: 0,
        comment: "#",
      }).contents;

      await fs.promises.writeFile(podfilePath, newContents);
      return config;
    },
  ]);

  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const appDelegatePath = path.join(
        config.modRequest.platformProjectRoot,
        config.modRequest.projectName ?? "testing",
        "AppDelegate.mm"
      );
      let contents = await fs.promises.readFile(appDelegatePath, "utf8");

      const importStatement = "#import <GoogleMaps/GoogleMaps.h>";
      if (!contents.includes(importStatement)) {
        contents = `${importStatement}\n${contents}`;
      }

      const apiKeyInit = `[GMSServices provideAPIKey:@"${googleMapsApiKey}"];`;
      const didFinishLaunchingRegex =
        /(?<=didFinishLaunchingWithOptions:[^{]*{)/;
      contents = contents.replace(
        didFinishLaunchingRegex,
        `\n  ${apiKeyInit}\n`
      );

      await fs.promises.writeFile(appDelegatePath, contents);
      return config;
    },
  ]);

  return config;
};

module.exports = withReactNativeMaps;
