/**
 * @file Shared webpack config values. Not for direct use.
 */

/* global __dirname, module */
/* eslint-disable import/no-require, import/no-commonjs, no-process-env, id-match,
   no-var, object-shorthand, babel/object-shorthand, import/unambiguous, filenames/match-regex */
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: ['./index.js']
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/static/'
  }
};
