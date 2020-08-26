import React, { Component } from "react";

class Completed extends Component {
    render() {
      
    const toDos = this.props.todos.filter(todo => todo.completed)
      return (
        <section className="main">
          <ul className="todo-list">
            {toDos.map((todo) => (
              <li className="completed" key={todo.id} id={todo.id}>
              <div className="view">
                <input 
                  className="toggle" 
                  type="checkbox" 
                  checked={true}
                  onChange={(event) => this.props.handleCheck(todo.id)}/>
                <label>{todo.title}</label>
                <button className="destroy" onClick={(event) => this.props.handleDelete(todo.id)}/>
              </div>
            </li>
            ))}
          </ul>
        </section>
      );
    }
  }

  export default Completed