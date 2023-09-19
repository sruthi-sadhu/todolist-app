import React from "react";
import { useSelector, connect } from "react-redux";
import {increment} from './actions/counterActions';

function Counter(props) {
    //const {incrementCounter} = props;
    const counter = useSelector(state=> {
        console.log("enter");
        return state.counter;
      });

    function handleIncrement() {
        props.incrementCounter(2);
    }

    return (<>
    <p>Counter :{counter}</p>
    <button onClick = {handleIncrement}> Increment Counter</button>
    </>);
}

const mapStateToProps = (state)=>{
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (payload)=> dispatch(increment(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);