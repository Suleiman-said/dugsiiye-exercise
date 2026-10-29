import React, {useState, useEffect} from "react";
const Greeting = ()=>{
    const [greeting, setGreeting] = useState('hello')
    const [name, setName] = useState('')

    useEffect(()=>{
        if(!name){
            document.title = "Welcome!";
        }else{
            document.title = `${greeting}, ${name}`
        }
    },[name,greeting])
    
    return(
        <div>
            <h2>Enter Your Name:</h2>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <h2>Choose a Greeting:</h2>
            <input 
                 type="text"
                 value={greeting}
                 onChange={(e)=> setGreeting(e.target.value) }
             />
        </div>
    )
}

export default Greeting;