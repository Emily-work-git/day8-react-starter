import React from "react";

export default function Counter(props) {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
    props.updateSum(+1);
  };
  const decrement = () => {
    setCount(count - 1);
    props.updateSum(-1);
  };
  React.useEffect(() => {
    console.log("sum changed to ", props.sum);
  }, [props.sum]);

  return (
    <div class="counter-wrapper">
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};
