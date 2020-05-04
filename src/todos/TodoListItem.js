import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const isCompletedClass = todo.isCompleted ? 'completed-button' : null;

  return (
    <div className='todo-item-container'>
      <h3>{todo.text}</h3>
      <div className='buttons-container'>
        <button
          onClick={() => onCompletedPressed(todo.id)}
          className={isCompletedClass}
        >
          Mark As Completed
        </button>
        <button
          onClick={() => onRemovePressed(todo.id)}
          className='remove-button'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
