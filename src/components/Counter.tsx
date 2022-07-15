import { FunctionComponent, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increament = () => {
    setCounter(counter + 1);
  };
  const decreament = () => {
    if (counter === 0) return;
    setCounter((previousCount) => previousCount - 1);
  };

  return (
    <div>
      <h1> {counter} </h1>
      <button onClick={increament}> click me+ </button>
      <button onClick={decreament}> click me- </button>
    </div>
  );
};

export default Counter;
