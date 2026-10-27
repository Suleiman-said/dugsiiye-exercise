import { useState } from "react";
const TodoList = ()=>{
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const handleAddTodo = ()=>{
        if(inputValue.trim() !== ""){
              const newTodo = {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false
        }
        setTodos([...todos, newTodo])
        setInputValue(" ")
        }
        console.log(todos)
    }
    
    return (
        <div>
            <h2>To-Do List</h2>
            <input 
            type="text" 
            placeholder="Enter to do"
            onChange={(e)=> setInputValue(e.target.value)}
            value={inputValue}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {
                    todos.map( todo => (
                        <li>{todo.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList;