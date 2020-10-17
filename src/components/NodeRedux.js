//This file is based on node.js 
//To run this js file navigate to this file path and give command node BasicRedux.js

const redux = require('redux');

//Store declaration
const createStore = redux.createStore;

const initialState ={
    counter: 0
}

//Create Reducer
//As per flow through reducer only values will reach store
//Reducer accepts two inputs current state and action
//Simple formula for reducer is current state + action through reducer  = new state
const rootReducer = (state= initialState, action) => {
    if(action.type==="INC_COUNTER"){

        return {
            ...state,
            counter: state.counter +1
        };
    }

    if(action.type==="ADD_COUNTER"){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// Create Store
//It is the centralised repo for all the state
const store = createStore(rootReducer);

//create Subscription
//This will get called everytime the action is passed to reducer
store.subscribe(()=> {
    console.log("Subscribe method ",store.getState());
})

//Create Dispatcher 
//We need a dispatcher so that the input from the component is transferred to the action
//A dispatcher should have a type with a uppercase value and possibly payload but not necessary
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});







