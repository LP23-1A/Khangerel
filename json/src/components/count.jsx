import React, { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const incresement = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incresement}>incresement</button>
        </div>
    )
}

export default Count