const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = merge(commonConfig, {
  mode: 'production',
  stats: 'errors-only',
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new CleanWebpackPlugin()
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
