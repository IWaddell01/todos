import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleTodo, deleteTodo} from '../../actions/actions'

export default function TodoItem(props) {
	const dispatch = useDispatch()
	return (
		<li className={props.completed ? "completed" : ""}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={props.completed}
					onChange={() => dispatch(toggleTodo(props.id))}
				/>
				<label>{props.title}</label>
				<button
					className="destroy"
					onClick={() => dispatch(deleteTodo(props.id))}
				/>
			</div>
		</li>
	);
}
