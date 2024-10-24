import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={toggleComplete}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
