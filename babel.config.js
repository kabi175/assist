module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            pages: './src/pages',
            theme: './src/theme',
            utils: './src/utils',
            slices: './src/slices',
            hooks: './src/hooks',
            service: './src/service',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
