const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist-webpack'),
    filename: 'index.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
            }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};