import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [
  thunk
];

const enhancers = [
  applyMiddleware(...middlewares)
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle, no-process-env, lines-around-comment */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers)
);

store.asyncReducers = {};

// Make reducers hot reloadable, see http://mxs.is/googmo
if (module.hot) {
  module.hot.accept('./reducers', () => {
    import ('./reducers')
    .then((reducerModule) => {
      const nextReducer = reducerModule.default;

      store.replaceReducer(nextReducer);
    });
  });
}

export default store;
