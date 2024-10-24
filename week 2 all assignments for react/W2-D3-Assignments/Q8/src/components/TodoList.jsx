import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { Todocontext } from '../Todocontext'

const TodoList = () => {
    const {todoarr} = useContext(Todocontext)
  return (
    <div>
        {
            todoarr.map((todoitem, index) =>{
                return(
                    <>
                        <TodoItem key={index} todoitem={todoitem}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default TodoList