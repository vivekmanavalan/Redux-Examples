import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './actions';
import {increment, decrement1, storeresult} from './actions';
class Counter extends Component {
    render(){

        return(
            <div>
                <button onClick={this.props.incrementby1}>Increment by 1</button>
                <button onClick={this.props.incrementby10}>Increment by 10</button>
                <button onClick={this.props.decrementby1}>Decrement by 1</button>
                <button onClick={this.props.decrementby10}>Decrement by 10</button>
                <button onClick={() => this.props.storeresult(this.props.counter)}>StoreResults</button>
                <br/><hr/>
                <h4>Result: {this.props.counter}</h4>
                <br/>
                <h3>Stored Results</h3>
                    {this.props.results.map((temp,index) => 
                        <h5 key={index}>{temp}</h5>
                    )}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return{
    counter: state.counter,
    results: state.results
    };
    
}

const mapdispatchtoprops = dispatch => {
    return{
        incrementby1: () => dispatch(increment()),
        incrementby10: () => dispatch( {
            type:actionTypes.INCREMENTBY10,
            value:10
        }),
        decrementby1: () => dispatch(decrement1()),
        decrementby10: () => dispatch( {
            type:actionTypes.DECREMENTBY10,
            value:10
        }),
        storeresult: (counter) => dispatch(storeresult(counter)),
    }
}

export default connect(mapStatetoProps,mapdispatchtoprops)(Counter);