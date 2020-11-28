const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  stats: 'errors-only',
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: resolve(__dirname, '../.env.production')
    })
  ],
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: true })],
    splitChunks: {
      chunks: 'initial'
    }
  }
})
