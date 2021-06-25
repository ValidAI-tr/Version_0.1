import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import store from './store/store.js';

ReactDOM.render(
  <Provider>
  {/* <Provider store={store} > */}
    <App />
  </Provider>,
  document.getElementById('app')
);