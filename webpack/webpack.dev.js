const { resolve } = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: resolve(__dirname, '../.env.development')
    })
  ]
})
