import React,{Component} from 'react';
import {connect} from 'react-redux'

class Counteraction extends Component {
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
    counter: state.ctr.counter,
    results: state.res.results
    };
    
}

const mapdispatchtoprops = dispatch => {
    return{
        incrementby1: () => dispatch( {
            type:'Incrementby1',
        }),
        incrementby10: () => dispatch( {
            type:'Incrementby10',
            value:10
        }),
        decrementby1: () => dispatch( {
            type:'Decrementby1',
        }),
        decrementby10: () => dispatch( {
            type:'Decrementby10',
            value:10
        }),
        storeresult: (counter) => dispatch( {
            type:'StoreResults',
            counter: counter
            
        }),
    }
}

export default connect(mapStatetoProps,mapdispatchtoprops)(Counteraction);