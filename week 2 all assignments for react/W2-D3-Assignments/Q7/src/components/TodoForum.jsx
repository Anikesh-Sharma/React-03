const TodoForm = ({ todoarr, settodoitem, todoitem, settodoarr }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (todoitem.title === '' || todoitem.discription === '') {
        alert('Please fill all details');
        return;
      }
      settodoarr([...todoarr, todoitem]);
      settodoitem({
        title: '',
        discription: '',
        iscompleted: false,
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Task Title</label>
        <input
          id="title"
          type="text"
          placeholder="Task title"
          onChange={(e) => settodoitem({ ...todoitem, title: e.target.value })}
          value={todoitem.title}
        />
        <label htmlFor="description">Task Description</label>
        <input
          id="description"
          type="text"
          placeholder="Task description"
          onChange={(e) => settodoitem({ ...todoitem, discription: e.target.value })}
          value={todoitem.discription}
        />
        <label htmlFor="completed">Task Status</label>
        <input
          id="completed"
          type="checkbox"
          checked={todoitem.iscompleted}
          onChange={() => settodoitem({ ...todoitem, iscompleted: !todoitem.iscompleted })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default TodoForm;
  