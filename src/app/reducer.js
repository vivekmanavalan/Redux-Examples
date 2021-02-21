const initialState = {

    counter:0,
    results:[]
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case "Incrementby1":
            return {
                ...state,
                counter:state.counter+1
            }
        case "Incrementby10":
            return {
                ...state,
                counter:state.counter+action.value
            }
        case "Decrementby1":
            return {
                ...state,
                counter:state.counter-1
            }
        case "Decrementby10":
            return {
                ...state,
                counter:state.counter-action.value
            }
        case "StoreResults":
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        default: break;
    }
    return state;
}

export default reducer;