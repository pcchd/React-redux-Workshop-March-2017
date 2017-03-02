/* global __dirname, module */
/* eslint-disable import/no-require, import/no-commonjs, no-process-env, id-match,
   no-var, object-shorthand, babel/object-shorthand, import/unambiguous, filenames/match-regex */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = {
  context: common.context,
  entry: common.entry,
  module: {
    loaders: [{
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      test: /\.js$/
    },
    {
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader: 'css?minimize&-mergeRules&modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]!resolve-url!sass',
        publicPath: './'
      }),
      test: /\.scss$/
    },
    {
      loaders: [{
        loader: 'file',
        query: {
          digest: 'hex',
          hash: 'sha512',
          name: '[name]-[hash].[ext]'
        }
      },
      {
        loader: 'image-webpack',
        query: {
          optimizationLevel: 7
        }
      }
      ],
      test: /\.(svg|jpe?g|png|gif)$/i
    },
    {
      loader: 'file',
      query: {
        digest: 'hex',
        hash: 'sha512',
        name: '[name]-[hash].[ext]'
      },
      test: /\.woff2?$/
    },
    {
      loaders: ['json'],
      test: /\.json$/
    }]
  },
  output: {
    chunkFilename: '[name].[hash].js',
    filename: '[name].[hash].js',
    path: path.join(__dirname, './dist'),
    publicPath: './static/'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].[hash].css'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        /* eslint-disable-next-line camelcase */
        screw_ie8: true,
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new AssetsPlugin({
      filename: './dist/assets.json',
      fullPath: false
    })
  ],
  resolve: common.resolve,
  resolveLoader: common.resolveLoader
};
