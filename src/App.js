import {useReducer, useState} from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count +1 }
    case 'decrement':
      return {count: state.count -1 }
    default:
      return;
  }
}

export default function Counter() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleCountIncrementByOne = () => dispatch( {type: 'increment'} );
  const handleCountIncrementMinusOne = () => dispatch( {type: 'decrement'} );

  return <>
    Counter is: {state.count}
    <button onClick={handleCountIncrementByOne}>+1</button>
    <button onClick={handleCountIncrementMinusOne}>-1</button>
  </>
}