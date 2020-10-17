import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore}from 'redux';
import reducer from './components/reducer';
import * as serviceWorker from './serviceWorker';

//Creating the store by importing createStore and import reducer class
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* The below provider tag is used from react-redux it is used to inject store in our app by wrapping against app component */}
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
