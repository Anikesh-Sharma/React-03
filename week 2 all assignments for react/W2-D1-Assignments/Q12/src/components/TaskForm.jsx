import React, { useState } from 'react';

const TaskForm = ({ onSave, task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [reminderTime, setReminderTime] = useState(task?.reminderTime || 5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate, reminderTime });
    setTitle('');
    setDescription('');
    setDueDate('');
    setReminderTime(5);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        placeholder="Reminder Time (in minutes)"
        required
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
