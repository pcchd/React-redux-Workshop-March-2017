/* global require, __dirname, module */
/* eslint-disable import/no-require, import/no-commonjs, no-process-env, id-match,
   no-var, object-shorthand, babel/object-shorthand, import/unambiguous, filenames/match-regex */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const devServer = {
  colors: true,
  contentBase: path.join(__dirname, '/'),
  historyApiFallback: true,
  hot: true,
  noInfo: false,
  outputPath: path.join(__dirname, '/dist'),
  port: 8000,
  publicPath: '/static/',
  quiet: false
};

module.exports = {
  context: common.context,
  devServer,
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',

      './'
    ]
  },
  module: {
    loaders: [
      {
        include: [path.resolve(__dirname, 'src')],
        loaders: ['react-hot-loader', 'babel-loader'],
        test: /\.js$/
      },
      {
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader'
        ],
        test: /\.scss$/
      },
      {
        loader: 'file-loader',
        query: {
          digest: 'hex',
          hash: 'sha512',
          name: '[name]-[hash].[ext]'
        },
        test: /\.(svg|jpe?g|png|gif|woff2?)$/i
      },
      {
        loader: 'json-loader',
        test: /\.json$/
      }
    ]
  },
  output: common.output,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
      verbose: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: common.resolve,
  resolveLoader: common.resolveLoader
};
