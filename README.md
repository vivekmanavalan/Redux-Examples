# Multiple Reducers

In this project we have used 2 reducers in the index.js file. 

* In Redux you can have any number of reducers but we need to have a single root reducer for all. 

* We can combine all the reducers by importing the combineReducers from redux.
```
import {createStore, combineReducers} from 'redux';

//combining multiple reducers
const rootreducer = combineReducers({
  ctr: counterreducer,
  res: resultreducer
})
```
