const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './example/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'simple-create-context': path.resolve(__dirname, 'index.ts'),
    }
  },
  mode: 'development',
  devServer: {
    contentBase: './',
    port: 8888,
    watchOptions: {
      poll: 1000
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [{
      test: /tsx?$/,
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
        }
      }]
    }]
  }
};