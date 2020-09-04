import React, { Component } from "react";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Completed from "./components/completed/completed";
import Active from "./components/active/active";
import { v4 as uuid } from "uuid";

class App extends Component {
	state = {
		todos: todosList,
		formData: {
			todo1: "",
		},
	};

	handleAddToDo = (e) => {
		e.preventDefault();
		const newId = uuid();
		this.setState({
			todos: [
				...this.state.todos,
				{
					userId: 1,
					id: newId,
					title: this.state.formData.todo1,
					completed: false,
				},
			],
			formData: { todo1: "" },
		});
	};

	handleChange = (event) => {
		const formData = { ...this.state.formData };
		formData[event.target.name] = event.target.value;

		this.setState({ formData });
	};

	handleCheck = (TodoId) => {
		const check = this.state.todos.map((item) => {
			if (item.id === TodoId) {
				return { ...item, completed: !item.completed };
			}
			return { ...item };
		});

		this.setState({ todos: check });
	};

	handleDelete = (TodoId) => {
		const newTodos = this.state.todos.filter((todo) => todo.id !== TodoId);
		this.setState({ todos: newTodos });
	};

	handleClear = (TodoId) => {
		const deleteCompleted = this.state.todos.filter(
			(todo) => todo.completed !== true
		);

		this.setState({ todos: deleteCompleted });
	};

	render() {
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<form onSubmit={this.handleAddToDo}>
						<input
							type="text"
							name="todo1"
							className="new-todo"
							placeholder="What needs to be done?"
							value={this.state.formData.todo1}
							onChange={this.handleChange}
							autoFocus
						/>
					</form>
				</header>
				<Route
					exact
					path="/"
					render={(props) => (
						<TodoList
							{...props}
							todos={this.state.todos}
							handleCheck={this.handleCheck}
							handleDelete={this.handleDelete}
							handleClear={this.handleClear}
						/>
					)}
				/>
				<Route
					path="/completed"
					render={(props) => (
						<Completed
							{...props}
							todos={this.state.todos}
							handleCheck={this.handleCheck}
							handleDelete={this.handleDelete}
							handleClear={this.handleClear}
						/>
					)}
				/>
				<Route
					path="/active"
					render={(props) => (
						<Active
							{...props}
							todos={this.state.todos}
							handleCheck={this.handleCheck}
							handleDelete={this.handleDelete}
							handleClear={this.handleClear}
						/>
					)}
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
					<button className="clear-completed" onClick={this.handleClear}>
						Clear completed
					</button>
				</footer>
			</section>
		);
	}
}

export default App;
