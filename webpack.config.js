const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      // Compile next-gen javascript syntax and JSX
      test: /\.js$/,
      include: [path.resolve(__dirname, "src")],
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false
    })
  ]
}
