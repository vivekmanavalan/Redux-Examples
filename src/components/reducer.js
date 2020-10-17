
const initialState ={
    counter:10,
    results:[]
}

//Based on the action received from the dispatch we can swtich to all the types

const reducer = (state=initialState,action) => {

    switch (action.type) {
        case "INCREMENTBYONE":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "INCREMENTBYTEN":
            return {
                ...state,
                counter: state.counter + 10
            }
        case "INCREMENTBYFIFTY":
            return {
                ...state,
                counter: state.counter + 50
            }
        case "DECREMENTBYUSER":
            return {
                ...state,
                counter: state.counter - action.val
            }
        case "STORE_RESULTS":
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        case "DELETE_RESULTS":
            //we need make a copy of the results array since the spread operator would make a shallow copy of the values for more info see notes
            let tempResult = [...state.results]

            return {
                ...state,
                results: tempResult.filter((temp,index) => index!== action.id),
            }

    
        default:
            break;
    }
    return state;
}

export default reducer;
