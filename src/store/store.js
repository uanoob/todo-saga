import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const devtoolsString = '__REDUX_DEVTOOLS_EXTENSION__';

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window[devtoolsString] && window[devtoolsString](),
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
