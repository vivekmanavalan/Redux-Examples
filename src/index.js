import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
//import reducer from './app/reducer';

import counterreducer from './app/counterreducer';
import resultreducer from './app/resultreducer';

//Creating a store
//const store = createStore(reducer);

//combining multiple reducers
const rootreducer = combineReducers({
  ctr: counterreducer,
  res: resultreducer
})
const store = createStore(rootreducer);
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
