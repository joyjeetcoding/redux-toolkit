// we will be reading the data from the store
import React from 'react'
import { useSelector } from 'react-redux'
import Trash from '../assets/trash.png'
import { useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    
    return (
    <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
                    <li
                    className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                    key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className='text-white bg-white border-0 py-1 px-4 focus:outline-none hover:bg-red-500 rounded text-base'
                        >
                            <img src={Trash} alt="/" className="w-6 h-6" />
                        </button>
                    </li>
            ))}
         </ul>
    </>
  )
}

export default Todos