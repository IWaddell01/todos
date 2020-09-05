import { todosList as initialTodos } from "../todos";
import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	CLEAR_COMPLETED_TODOS,
} from "../actions/actions";
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

		case TOGGLE_TODO: {
			const newTodos = { ...state };
			const { id } = action.payload;
			newTodos[id].completed = !newTodos[id].completed;
			return newTodos;
		}

		case DELETE_TODO: {
			const newTodos = { ...state };
			const { id } = action.payload;
			delete newTodos[id];
			return newTodos;
		}

		case CLEAR_COMPLETED_TODOS: {
			const newTodos = { ...state };
			for (const todo in newTodos) {
				if (newTodos[todo].completed) {
					delete newTodos[todo];
				}
			}
			return newTodos;
		}

		default:
			return state;
	}
};
