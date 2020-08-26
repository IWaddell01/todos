import React, { Component } from "react";
import TodoItem from './../TodoItem/TodoItem';

class TodoList extends Component {

    render() {

    return (
        <section className="main">
        <ul className="todo-list">
            {this.props.todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} handleCheck={this.props.handleCheck} handleDelete={this.props.handleDelete} id={todo.id}/>
            ))}
        </ul>
        </section>
    );
    }
}

  export default TodoList