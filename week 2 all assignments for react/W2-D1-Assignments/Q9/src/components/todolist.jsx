import React, { useState } from 'react';
import TodoItem from './todoitem';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding new tasks
  const addTodo = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty tasks
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue(''); // Clear the input field
  };

  // Function to delete a task
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to toggle completion status of a task
  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleComplete={() => toggleComplete(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
