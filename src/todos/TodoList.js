import React from 'react';
import { connect } from 'react-redux';

import { removeTodo, toggleCompleteTodo } from './actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, isCompletedPressed }) => {
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.length !== 0 &&
        todos.map((todo, index) => (
          <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            isCompletedPressed={isCompletedPressed}
            key={index}
            index={index}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  isCompletedPressed: (text) => dispatch(toggleCompleteTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
