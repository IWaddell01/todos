import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import { connect } from "react-redux";
import { addTodo, clearCompletedTodos } from "./actions/actions";

// Followed Kano's Todo Demo videos to convert
// from class to functional with hooks

function App(props) {
	const [inputText, setInputText] = useState("");

	const handleAddToDo = (e) => {
		e.preventDefault();
		props.addTodo(inputText);
		setInputText("");
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
			<Switch>
				<Route exact path="/">
					<TodoList todos={Object.values(props.todos)} />
				</Route>

				<Route exact path="/completed">
					<TodoList
						todos={Object.values(props.todos).filter((todo) => todo.completed)}
					/>
				</Route>

				<Route exact path="/active">
					<TodoList
						todos={Object.values(props.todos).filter((todo) => !todo.completed)}
					/>
				</Route>
			</Switch>
			<footer className="footer">
				{/* <!-- This should be `0 items left` by default --> */}
				<span className="todo-count">
					<strong>
						{Object.values(props.todos).filter((todo) => !todo.completed).length}
					</strong>{" "}
					item(s) left
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
				<button className="clear-completed" onClick={() => props.clear_Completed_Todos()}>
					Clear completed
				</button>
			</footer>
		</section>
	);
}

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (inputText) => dispatch(addTodo(inputText)),
	clear_Completed_Todos: () => dispatch(clearCompletedTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
