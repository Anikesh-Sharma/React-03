import React from 'react'

const TodoItem = ({todoitem}) => {
  return (
    <div>
        <p>Task title:{todoitem.title}</p>
        <p>Task discription:{todoitem.discription}</p>
        <p>{todoitem.iscompleted ? "Completed" : "In complete"}</p>
    </div>
  )
}

export default TodoItem