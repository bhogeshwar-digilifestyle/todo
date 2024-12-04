import React, { useState } from 'react';
import TaskInput from './components/Taskinput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
