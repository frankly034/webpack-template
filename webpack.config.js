const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx' ),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.jpg', '.svg', '.ico'],
  },
}