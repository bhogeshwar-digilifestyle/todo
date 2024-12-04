import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    onToggle(task.id);
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
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
