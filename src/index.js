import React from 'react';
import reactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './store/reducer';

const devtoolsString = '__REDUX_DEVTOOLS_EXTENSION__';

const store = createStore(reducer, window[devtoolsString] && window[devtoolsString]());

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
