import { todosList as initialTodos } from "../todos";
import { ADD_TODO } from "./../actions/todosActions";
import { v4 as uuid } from "uuid";

export const todos = (state = initialTodos, action) => {
	switch (action.type) {
		case ADD_TODO: {
			const newId = uuid();
			const newTodo = {
				userId: 1,
				id: newId,
				title: action.payload.inputText,
				completed: false,
			};
			return {
				...state,
				[newId]: newTodo,
			};
		}
		default:
			return state;
	}
};
