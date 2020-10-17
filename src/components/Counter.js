import React,{Component} from 'react';
import {connect} from 'react-redux';
class Counter extends Component {

    state ={
        userSubtract:0
    }

    decrementCounter = (e) => {
        this.setState({
            userSubtract: e.target.value 
        });
    }

    render(){
        return(
            <div>
                    {/* The below counter value will be fetched from the reducer by using the mapstatetoprops method */}
                    <h1>Counter {this.props.ctr}</h1>&nbsp;&nbsp;&nbsp;
                    <ul>
                        Stored Result
                        {this.props.results.map((temp,index) =>
                            <li key={index} onClick={() => this.props.deleteResult(index)}>{temp}</li>
                            )}
                        
                    </ul>
                    <button name="Increment by 1" onClick={this.props.incrementCounterbyOne}>Increment by 1</button>&nbsp;
                    <button name="Increment by 10" onClick={this.props.incrementCounterbyTen}>Increment by 10</button>&nbsp;
                    <button name="Increment by 50" onClick={this.props.incrementCounterbyFifty}>Increment by 50</button>&nbsp;
                    <button name="Store results" onClick={this.props.storeResults}>Store Results</button><br/><br/>
                    Dynamic Subtract:&nbsp;<input type="text" name="subtract" onChange={this.decrementCounter}/>

                    {/* By Using the arrow function below we are calling the onclick method immediately */}
                    <button name="Decrement by user" onClick={() =>this.props.decrementCounterbyUser(this.state.userSubtract)}>Subtract</button>
            </div>
        )
    }

}

//The mapstatetoprops should be written only outside the class. here is where we get the data from the store.
//it's more like subscription

//returns props name and slices of state stored in redux means we can get only what we want from the store 
//and assign it to some props value
//Changes in store  --> component

const mapStatetoProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    };
}

//The below method is equal to the store.dispatch method as it dispatches the action to the reducer.
//dispatch action --> reducer
const mapDispatchtoProps = dispatch => {
    return {
        incrementCounterbyOne: () => dispatch({
            type:'INCREMENTBYONE',
        }),
        incrementCounterbyTen: () => dispatch({
            type:'INCREMENTBYTEN',
        }),
        incrementCounterbyFifty: () => dispatch({
            type:'INCREMENTBYFIFTY',
        }),
        decrementCounterbyUser: (subval) => dispatch({
            type:'DECREMENTBYUSER',
            val:  subval
        }),
        storeResults: () => dispatch({
            type: 'STORE_RESULTS',
        }),
        deleteResult: (index) => dispatch({
            type:'DELETE_RESULTS',
            id: index,
            
        })

    };
}

//connect is a function that returns a function. The returned function takes higher order function as input. 
//so only we don't wrap the counter directly instead we have wrapped mapstatetoprops which takes counter as input.

//We also map the dispatchprops so that the action is sent to reducer from there it can reach store and perform logic
export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);