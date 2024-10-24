import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import { TaskContext } from '../context/TaskContext';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const { tasks } = useContext(TaskContext);

  const renderTasks = ({ date }) => {
    const tasksForDay = tasks.filter(
      (task) => new Date(task.dueDate).toDateString() === date.toDateString()
    );
    return tasksForDay.map((task) => <div key={task.id}>{task.title}</div>);
  };

  return <Calendar tileContent={renderTasks} />;
};

export default CalendarView;
