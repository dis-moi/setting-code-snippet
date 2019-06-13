const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = Object.freeze({
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'setupLmemExtention',
    libraryTarget: 'window',
  },
  plugins: [
    new MinifyPlugin(),
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
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  },
});