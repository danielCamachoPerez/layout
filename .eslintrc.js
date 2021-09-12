module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          components: './src/components',
          styles: './src/styles',
          scenes: './src/scenes',
          assets: './src/assets',
          utils: './src/utils',
        },
      },
    },
  },
};
