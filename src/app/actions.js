export const INCREMENT1 = 'Incrementby1'
export const DECREMENT1 = 'Decrementby1'
export const INCREMENTBY10 = 'Incrementby10'
export const DECREMENTBY10 = 'Decrementby10'
export const STORERESULT = 'StoreResults'


export const increment = () => {
    return {
        type: INCREMENT1
    }
}

export const increment10 = () => {
    return {
        type: INCREMENTBY10
    }
}

export const decrement1 = () => {
    return {
        type: DECREMENT1
    }
}

export const decrement10 = () => {
    return {
        type: DECREMENTBY10
    }
}

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