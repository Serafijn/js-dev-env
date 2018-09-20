import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader'},
      {test: /\.css$/, use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader']}
    ]
  }
}
