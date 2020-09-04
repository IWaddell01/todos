import React, { useState } from "react";
import { todosList } from "./todos";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Completed from "./components/completed/completed";
import Active from "./components/active/active";
import { v4 as uuid } from "uuid";
// import { Connect } from "react-redux";

// Followed Kano's Todo Demo videos to convert
// from class to functional with hooks

function App() {
	const [todos, setTodos] = useState(todosList);
	const [inputText, setInputText] = useState("");

	const handleAddToDo = (e) => {
		e.preventDefault();
		const newId = uuid();
		const newTodo = {
			userId: 1,
			id: newId,
			title: inputText,
			completed: false,
		};
		const newTodos = {
			...todos,
		};
		newTodos[newId] = newTodo;
		setTodos(newTodos);
		setInputText("");
	};

	const handleCheck = (id) => {
		const newTodos = {...todos}
		newTodos[id].completed = !newTodos[id].completed
		setTodos(newTodos)
	};

	const handleDelete = (id) => {
		const newTodos = {...todos}
		delete newTodos[id]
		setTodos(newTodos)
	};

	const handleClear = () => {
		const newTodos = {...todos}
		for(const todo in newTodos) {
			if(newTodos[todo].completed) {
				delete newTodos[todo]
			}
		}
		console.log("test")
		setTodos(newTodos)
	};

	return (
		<section className="todoapp">
			<header>
				<h1>todos</h1>
				<form onSubmit={handleAddToDo}>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
						autoFocus
						onChange={(event) => setInputText(event.target.value)}
						value={inputText}
					/>
				</form>
			</header>
			<TodoList 
				todos={Object.values(todos)} 
				handleCheck={handleCheck}
				handleDelete={handleDelete} 
			/>
			<footer className="footer">
				{/* <!-- This should be `0 items left` by default --> */}
				<span className="todo-count">
					<strong>0</strong> item(s) left
				</span>
				<ul className="filters">
					<li>
						<NavLink exact to="/" activeClassName="selected">
							All
						</NavLink>
					</li>
					<li>
						<NavLink to="/active" activeClassName="selected">
							Active
						</NavLink>
					</li>
					<li>
						<NavLink to="/completed" activeClassName="selected">
							Completed
						</NavLink>
					</li>
				</ul>
				<button className="clear-completed" onClick={() => handleClear()}>
					Clear completed
				</button>
			</footer>
		</section>
	);
}

// const mapStateToProps = (state) => ({
// 	todos: state.todos,
// });
// export default connect(mapStateToProps)(App);

export default App;
