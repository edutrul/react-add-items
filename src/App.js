import {useState} from "react";

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const handleCountIncrementByOne = () => setCounter( (prevCount) => prevCount + 1 );
  const handleCountIncrementMinusOne = () => setCounter( (prevCount) => prevCount - 1 );

  return <>
    Counter is: {counter}
    <button onClick={handleCountIncrementByOne}>+1</button>
    <button onClick={handleCountIncrementMinusOne}>-1</button>
  </>
}