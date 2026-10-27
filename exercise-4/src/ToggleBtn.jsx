import { useState } from "react";

const ToggleBtn = () =>{
    const [isOn,setItsOn] = useState(false)
    const toggle = () => setItsOn(!isOn)
    return(
        <div>
            <p>The button is {isOn ? 'ON' : "OFF"}</p>
            <button onClick={toggle}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
        </div>
    )
}
export default ToggleBtn;