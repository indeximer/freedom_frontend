const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, '../src/index.js'),
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, '../src'),
      'react-hook-form': resolve(
        __dirname,
        '../node_modules/react-hook-form/dist/react-hook-form.ie11.js'
      )
    }
  },
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html')
    })
  ]
}
