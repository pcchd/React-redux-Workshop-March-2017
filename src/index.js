import ReactDOM from 'react-dom';
import React from 'react';
import {
  Provider
} from 'react-redux';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import 'babel-polyfill';
import store from './store';
import App from './views/App';

if (!window.fetch) {
  require.ensure(['whatwg-fetch'], (require) => {
    // eslint-disable-next-line import/no-unassigned-import, import/max-dependencies
    require('whatwg-fetch');
  }, 'fetch');
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
