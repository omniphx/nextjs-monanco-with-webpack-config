const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // This is a NextJS v12 workaround: https://github.com/vercel/next.js/issues/34501
    if (config.module.generator?.asset?.filename) {
      if (!config.module.generator['asset/resource']) {
        config.module.generator['asset/resource'] =
          config.module.generator.asset;
      }
      delete config.module.generator.asset;
    }

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    config.module.rules.push({
      test: /\.ttf$/,
      use: ['file-loader'],
    });

    config.plugins.push(new MonacoWebpackPlugin());

    return config;
  },
};
