import React from 'react';

export default function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div class="counter-wrapper">
            <button onClick={increment} >+</button>
            <span >{count}</span>
            <button  onClick={decrement}>-</button>
        </div>
    );
}