const path = require('path')
var nodeExternals = require('webpack-node-externals')


module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development'
}