/* This config file is only for use by Webpack CLI commands
 * which can be found in package.json in scripts. For
 * webpack-dev-middleware, use webpack.dev.config.js
 *
 * Note: that prod and dev mode are set in those scripts.
 */

const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require("path")

module.exports = (env, argv) => {
  const MODE = (argv) ? argv.mode : 'production'

  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    mode: MODE,
    target: 'web',
    // Webpack 4 does not have a CSS minifier, although
    // Webpack 5 will likely come with one
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          // Loads the javacript into html template provided.
          // Entry point is set below in HtmlWebPackPlugin in Plugins 
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          // Loads images into CSS and Javascript files
          test: /\.jpg$/,
          use: [{loader: "url-loader"}]
        },
        {
          // Loads CSS into a file when you import it via Javascript
          // Rules are set in MiniCssExtractPlugin
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/html/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }
}

// Webpack 4 basic tutorial:
// https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_production_and_development_mode

// Development mode is optimized for build speed and does nothing more than providing an un-minified bundle.
// Production mode enables all sorts of optimizations like minification, scope hoisting, tree-shaking and more.