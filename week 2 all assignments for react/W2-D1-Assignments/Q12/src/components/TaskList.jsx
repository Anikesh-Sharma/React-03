import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
