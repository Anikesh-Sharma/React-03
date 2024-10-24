import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CalendarView from './components/CalendarView';
import { TaskProvider } from './context/TaskContext';
import { PreferencesProvider } from './context/PreferencesContext';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <PreferencesProvider>
      <TaskProvider>
        <div className="app">
          <h1>Task Manager</h1>
          <TaskForm
            onSave={(task) => {
              setEditingTask(null);
            }}
            task={editingTask}
          />
          <TaskList />
          <CalendarView />
        </div>
      </TaskProvider>
    </PreferencesProvider>
  );
}

export default App;
