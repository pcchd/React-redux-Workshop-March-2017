import React from 'react';
import CssModules from 'react-css-modules';
import {
  connect
} from 'react-redux';
import styles from './styles.scss';

const App = () => {
  return (
    <div styleName='container'>
      <h1>
        Hello World!
      </h1>
    </div>
  );
};

const selector = () => {
  return {};
};

export default connect(selector)(CssModules(App, styles));
