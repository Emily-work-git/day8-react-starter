import React from "react";
import Counter from "./Counter";

export default function CounterGroup(props) {
  const [sum, setSum] = React.useState(0);
  const updateSum = (i) => {
    setSum((prevSum) => prevSum + i);
  };

  const createCounterList = (size) => {
    return Array.from({ length: size }).map((_, index) => {
      return <Counter key={index + Math.random()} updateSum={updateSum} />;
    });
  };

  const [counterList, setCounterList] = React.useState(createCounterList(props.size));


  React.useEffect(() => {
    setSum(0);
    setCounterList(createCounterList(props.size))
  }, [props.size]);

  return (
    <>
      <div>
        <span>Sum: {sum}</span>
      </div>
      {counterList}
    </>
  );
}
