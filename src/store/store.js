import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

const store = createStore(rootReducer, applyMiddleware(thunk));
// // const store = createStore(() => [], {}, applyMiddleware());
// const store = {getState: 'Ha bitch'};

export default store;

// [x] TODO:  Create your redux store, apply thunk as a middleware, and export it!