import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, isCompletedPressed }) => {
  const isCompletedClass = todo.isCompleted ? 'completed-button' : null;
  console.log('isCompletedClass', todo.isCompleted);

  return (
    <div className='todo-item-container'>
      <h3>{todo.text}</h3>
      <div className='buttons-container'>
        <button
          onClick={() => isCompletedPressed(todo.text)}
          className={isCompletedClass}
        >
          Mark As Completed
        </button>
        <button
          onClick={() => onRemovePressed(todo.text)}
          className='remove-button'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
