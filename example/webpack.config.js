const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: path.resolve(__dirname),

  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      'component': path.resolve(__dirname, 'component')
    },
  },

  resolveLoader: {
    alias: {
      'agora-md2vue-loader': path.resolve(__dirname, '../src/index.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.md$/,
        loader: [
          'vue-loader', 
          'agora-md2vue-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  devServer: {
    port: process.env.PORT || 8082
  }
}