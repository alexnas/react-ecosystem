export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const toggleCompleteTodo = (text) => ({
  type: TOGGLE_COMPLETE_TODO,
  payload: { text },
});
