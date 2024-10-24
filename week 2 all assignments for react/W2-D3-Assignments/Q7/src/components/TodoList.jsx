import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoarr}) => {

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