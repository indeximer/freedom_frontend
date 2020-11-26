const { resolve } = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
