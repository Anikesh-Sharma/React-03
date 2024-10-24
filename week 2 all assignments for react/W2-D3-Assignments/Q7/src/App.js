import { useState } from 'react';
import './App.css';
import TodoForum from './components/TodoForum';
import TodoList from './components/TodoList';

function App() {
  const[todoitem, settodoitem] = useState({
    title: '',
    discription:'',
    iscompleted:false
  })
  console.log(todoitem);
  const[todoarr, settodoarr] = useState([])
  return(
    <>
      <TodoList todoarr={todoarr}/>
      <TodoForum todoarr={todoarr} settodoarr={settodoarr} settodoitem={settodoitem} todoitem={todoitem}/>
    </>
  )
}

export default App;
