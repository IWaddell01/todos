import React from 'react';
import TodoItem from "../TodoItem/TodoItem";


export default function TodoList(props) {
	return (
		<section className="main">
			<ul className="todo-list">
				{props.todos.map((todo) => (
					<TodoItem
						key={todo.id}
						title={todo.title}
						completed={todo.completed}
						handleCheck={props.handleCheck}
						handleDelete={props.handleDelete}
						id={todo.id}
					/>
				))}
			</ul>
		</section>
	);
}
