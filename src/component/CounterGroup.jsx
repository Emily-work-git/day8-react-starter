import React from 'react';
import Counter from './Counter';

export default function CounterGroup(props){
    const counterList = Array.from({length: props.size})
        .map((data, index) => (
            <Counter key={index + Math.random()}/>
        ));


    return (
        <>
        {counterList}
        </>
    )

}