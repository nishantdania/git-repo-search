import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { default as thunk } from 'redux-thunk';
import gitSearch from './reducers';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(
    gitSearch,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
