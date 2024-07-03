import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique value

// This defines how the store will look initially whether it will be empty or will there be any sort of values
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}


// We are creating slices ---> generally a bigger version of reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     const {id, text} = action.payload;
        //     const todo = state.todos.find((todo) => todo.id === id);
            
        //     if(todo) {
        //         todo.text = text;
        //     }
        // }
    }
})


export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer