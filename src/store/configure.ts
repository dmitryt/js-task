import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import { loadState } from '../services/localStorage';
import { createRootReducer } from './index';
import sagas from './sagas';

const configureStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  ];
  const persistedState = loadState() || {};
  const store = createStore(
    createRootReducer(history),
    persistedState,
    compose(...enhancers)
  );
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
