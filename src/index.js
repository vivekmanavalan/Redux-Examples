import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './app/reducer';
import thunk from 'redux-thunk';

const logger = store => {
  return next => {
    return action => {
      console.log("dispatching action ",action);
      const result = next(action);
      console.log("Results of next state  ",store.getState());
      return result;
    }
  }
}

//using the applymiddleware option we can monitor the value sent to reducer
//since we are using async functions we need to use thunk and add it in the middleware option
const store = createStore(reducer, applyMiddleware(logger,thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
