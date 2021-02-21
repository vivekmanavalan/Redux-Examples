const initialState = {
    results:[]
}

const resultreducer = (state = initialState,action) => {
    switch(action.type){
    case "StoreResults":
            return {
                ...state,
                results: state.results.concat(action.counter)
            }
        default: break;
    }
    return state;
}

export default resultreducer;