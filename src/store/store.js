import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

// load store from local storage

// import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistedStore = loadState();

const middlewares = [
  thunk,
  // , logger
];
// const middlewares = [thunk];
const store = createStore(
  rootReducer,
  //   persistedStore,
  composeEnhancers(applyMiddleware(...middlewares))
);
// store.subscribe(() => {
//   saveState(store.getState());
// });
export default store;
