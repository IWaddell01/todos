export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

export const addTodo = (inputText) => ({
	type: ADD_TODO,
	payload: { inputText },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: { id },
});

export const clearCompletedTodos = () => ({
	type: CLEAR_COMPLETED_TODOS,
});
