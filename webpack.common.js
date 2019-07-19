const path = require('path');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;

if (!process.env.EXTENSION_ID) {
  throw ReferenceError('EXTENSION_ID environment variable is missing, please export it before running npm scripts!');
}
if (!process.env.REATTEMPT_TIMEOUT) {
  throw ReferenceError('REATTEMPT_TIMEOUT environment variable is missing, please export it before running npm scripts!');
}

module.exports = Object.freeze({
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'lmem',
    libraryTarget: 'window',
  },
  plugins: [
    new EnvironmentPlugin({
      EXTENSION_ID: undefined,
      REATTEMPT_TIMEOUT: undefined,
      DEBUG: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
            presets: [
              ['@babel/preset-env']
            ],
          },
        },
      },
    ],
  },
});