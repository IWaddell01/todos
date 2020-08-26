import React, { Component } from "react";

class Active extends Component {
    render() {
      
        const toDos = this.props.todos.filter(todo => todo.completed !== true)
          return (
            <section className="main">
              <ul className="todo-list">
                {toDos.map((todo) => (
                  <li className={this.props.completed ? "completed" : ""} key={todo.id} id={todo.id}>
                  <div className="view">
                    <input 
                      className="toggle" 
                      type="checkbox" 
                      checked={this.props.completed} 
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

  export default Active