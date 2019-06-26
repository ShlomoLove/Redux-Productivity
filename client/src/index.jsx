import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {fetchAllTodos} from './actions/index';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk))



store.dispatch(fetchAllTodos());

console.log (store.getState(), 'store')


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)