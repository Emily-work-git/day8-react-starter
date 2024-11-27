import React from 'react';

export default function CounterGroupGenerator(props){
    const [counterSize, setCounterSize] = React.useState(props.size);

    const handleInputChange = (event) => {
        if (event.target.value < 0) {
            setCounterSize(0);
        }
        else if (event.target.value > 20) {
            setCounterSize(20);
        }
        else {
            setCounterSize(parseInt(event.target.value));
        }
    }

    const handleReset = () => {
        props.setSize(counterSize);
    }

    return (
        <div>
            <span>Size:</span>
            <input min={0} max={20} type='number' value={counterSize} onInput={handleInputChange}></input>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}