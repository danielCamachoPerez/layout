module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module-resolver", {
      "alias": {
        components: "./src/components",
        src: "./src",
        styles: './src/styles',
        scenes: './src/scenes',
        assets: './src/assets',
        utils: './src/utils',
      }
    }]
  ]
};
