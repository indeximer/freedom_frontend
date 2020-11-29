const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
  entry: resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(woff2?|ttf|otf|eot|png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: content => svgToMiniDataURI(content.toString())
            }
          }
        ]
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
    path: resolve('../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html')
    })
  ]
}
