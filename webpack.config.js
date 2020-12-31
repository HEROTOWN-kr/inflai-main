const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist-main';

module.exports = {
  // entry: ['babel-polyfill', './src/client/index.js'],
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(css|s[ac]ss)$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3004,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    })
  ]
};
