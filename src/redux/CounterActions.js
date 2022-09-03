import React from 'react'

function CounterActions({ setCount, count }) {
    return (
        <div>
            <button onClick={() => setCount(count - 1)}> Azalt (-)</button>
            <button onClick={() => setCount(count + 1)}> Arttır (+)</button>
        </div>
    )
}

export default CounterActions;