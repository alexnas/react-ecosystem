import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
  background: #eee;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainter = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  // background-color: #22ee22;
  background-color: todo.isCompleted ? #22ee22 : null;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const isCompletedClass = todo.isCompleted ? 'completed-button' : null;

  return (
    <TodoItemContainer>
      <h3>{todo.text}</h3>
      <ButtonsContainter>
        <CompletedButton
          onClick={() => onCompletedPressed(todo.id)}
          className={isCompletedClass}
        >
          Mark As Completed
        </CompletedButton>
        <RemoveButton
          onClick={() => onRemovePressed(todo.id)}
          className='remove-button'
        >
          Remove
        </RemoveButton>
      </ButtonsContainter>
    </TodoItemContainer>
  );
};

export default TodoListItem;
