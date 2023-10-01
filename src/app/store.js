import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"


export const store = configureStore({
    reducer: todoReducer,
})

// Steps:-

/* 
    1. Introduce a Store and introduce reducers
    2. go to the index.js and wrap the App in Provider stating that everything should be aware of the store
    3. State the functionalities of your project. Here, it is addition and removal of the items ---> "here, "todoSlices.js"
    4. after creating create the use cases like  ---> addTodo.js
    5. useDispatch() hook passes the datas we want to pass and it gets passed on teh other components


*/