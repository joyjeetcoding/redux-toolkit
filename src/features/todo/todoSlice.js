// this helps you to create a big object which we export as well and it is responsible tracking inital state of the store all of the reducers

import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: 1, text:"Hello"}],      //fetching, update, deleting
}


export const todoSlice = createSlice({
    name: 'todo',       //very imp for devTools
    initialState,
    reducers: { // addTodo takes the state and mentioned it on "action" that what do we need to do
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)  //we are simply pushing it to the todos array
        },      // action is something through which we can send some data(payload) to do something     and     state is important because we should know the way what is the initial value in store and we need to update it 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)  // filter out on each element and create a new array (don't include the id)
        }

    },
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer