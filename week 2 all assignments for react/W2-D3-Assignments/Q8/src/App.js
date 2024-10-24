import { useState } from 'react';
import './App.css';
import TodoForum from './components/TodoForum';
import TodoList from './components/TodoList';
import { Todocontext } from './Todocontext';

function App() {
  const[todoitem, settodoitem] = useState({
    title: '',
    discription:'',
    iscompleted:false
  })
  const[todoarr, settodoarr] = useState([])
  return(
    <Todocontext.Provider value={{todoarr, settodoarr, todoitem, settodoitem}}>
      <TodoList/>
      <TodoForum/>
    </Todocontext.Provider>
  )
}

export default App;
