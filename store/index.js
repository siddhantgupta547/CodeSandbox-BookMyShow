import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../src/reducers/';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
}
