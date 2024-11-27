import React from "react";

export default function CounterGroupGenerator(props) {
  const [counterSize, setCounterSize] = React.useState(0);
  const minSize = 0;
  const maxSize = 20;
  const handleInputChange = (event) => {
    if (event.target.value < minSize) {
      setCounterSize(0);
    } else if (event.target.value > maxSize) {
      setCounterSize(20);
    } else {
      setCounterSize(parseInt(event.target.value));
    }
  };

  const handleReset = () => {
    props.setSize(counterSize);
  };

  return (
    <div>
      <span>Size:</span>
      <input
        min={0}
        max={20}
        type="number"
        value={counterSize}
        onInput={handleInputChange}
      ></input>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
