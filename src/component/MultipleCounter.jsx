import React from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";

export default function MultipleCounter() {
    const [size, setSize] = React.useState(0);
    console.log("multiple counter: ", size);
    return (
        <>
            <CounterGroupGenerator setSize={setSize}/>
            <CounterGroup size={size}/>
        </>
    )
}