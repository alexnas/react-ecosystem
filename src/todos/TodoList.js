import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getTodos,
  getTodosLoading,
  getIncompletedTodos,
  getCompletedTodos,
} from './selectors';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, completeRequest } from './thunks';
import './TodoList.css';

const TodoList = ({
  // todos = [],
  completedTodos,
  incompletedTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.length !== 0 &&
        incompletedTodos.map((todo, index) => (
          <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
            key={index}
            index={index}
          />
        ))}
      <h3>Complete:</h3>
      {completedTodos.length !== 0 &&
        completedTodos.map((todo, index) => (
          <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
            key={index}
            index={index}
          />
        ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  // todos: getTodos(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(completeRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
