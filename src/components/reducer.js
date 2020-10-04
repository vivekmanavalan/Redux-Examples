
const initialState ={
    counter:10
}

//Based on the action received from the dispatch we can swtich to all the types

const reducer = (state=initialState,action) => {

    switch (action.type) {
        case "INCREMENTBYONE":
            return {
                counter: state.counter + 1
            }
        case "INCREMENTBYTEN":
            return {
                counter: state.counter + 10
            }
        case "INCREMENTBYFIFTY":
            return {
                counter: state.counter + 50
            }
        case "DECREMENTBYUSER":
            return {
                counter: state.counter - action.val
            }
    
        default:
            break;
    }
    return state;
}

export default reducer;
