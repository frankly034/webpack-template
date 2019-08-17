const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js' ),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html')
    })
  ]
}