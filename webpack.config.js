const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const isProduction = process.argv.indexOf('-p') !== -1

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css'
})

const config = {
  cache: true,
  context: __dirname,
  devServer: {
    historyApiFallback: true
  },
  entry: {
    client: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1
      }
    }),
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.(jpg|jpeg|png|ico)$/,
        use: [{
          loader: 'file-loader?name=img/[name].[ext]'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }]
      }
    ]
  }
}

config.plugins = config.plugins || []
if (isProduction) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }))
} else {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }))
}

module.exports = config
