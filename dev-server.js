const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const webpackConfig = require('./webpack.config.development');

const bundler = webpack(webpackConfig);

app.use(webpackDevMiddleware(bundler, webpackConfig.devServer));
app.use(webpackHotMiddleware(bundler));

const staticAssetDirectory = path.resolve(__dirname, 'dist');

app.use('/static', express.static(staticAssetDirectory));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(3000, (err) => {
  if (err) {
    console.log('Error occurred while starting dev server');
    return;
  }

  console.log('Server started on port', 3000);
});
