# Middleware and Thunk

In this project we have middlewares and redux thunk.

Middleware:

* we can know what the action is dispatching and be able to see the values using the middleware.

* Redux middleware function provides a medium to interact with dispatched action before they reach the reducer

* Using the middleware you can access current state and return a function.

Thunk:

* redux thunk is mainly used to do async operations and API calls in redux 

* since reducers are pure functions and API calls are not allowed in the reducers.

* Redux thunk middleware allows us to write action creators that return a function instead of action.

* Thunk delay dispatch of an action, dispatch only if certain condition is met or do API calls.


export const saveresult =(res) => {
    return {
        type: STORERESULT,
        results: res,
    }
}

//Advantage of installing redux thunk is we are now able to do async operations and can also do API calls
//Below we tried to sleep 2000 and then store the result by calling the saveresult method
export const storeresult = (res) => {
    return dispatch => { 
        setTimeout(() => {
            dispatch(saveresult(res));
        }, 2000);
    }
}