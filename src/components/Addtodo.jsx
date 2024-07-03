import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"

function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  
    return (
    <form onSubmit={addTodoHandler} className="">
      <input
        type="text"
        className="outline-none p-5 text-xl"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="p-3 bg-black text-white rounded-lg font-semibold">Add Todo</button>
    </form>
  );
}

export default Addtodo;
