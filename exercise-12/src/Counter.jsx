import { useState } from "react";
const Counter = ()=>{
    const [count, setCount] = useState(0)
    const increament = ()=>{
        setCount(count + 1)
    }
    const decreament = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <div>
            <h2>Count: {count} </h2>
            <button onClick={decreament} disabled={count === 0}>Decreament</button>
            <button onClick={increament}>Increament</button>
        </div>
    )
}
export default Counter