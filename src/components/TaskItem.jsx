import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    onToggle(task.id); // Call the onToggle function passed as a prop
  };

  const handleDelete = () => {
    onDelete(task.id); // Call the onDelete function passed as a prop
  };

  return (
    <li
      style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? 'gray' : 'black',
      }}
    >
      {task}
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
