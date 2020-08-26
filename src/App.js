import React, { Component } from "react";
import todosList from "./todos.json";



class App extends Component {
  state = {
    todos: todosList,
    formData: {
      todo1: '',
  }
  };


  test = (e) => {
 e.preventDefault()
    this.setState({
      todos: [...this.state.todos, {
        "userId": 1,
        "id": (this.state.todos.length + 1),
        "title": this.state.formData.todo1,
        "completed": false
    }], formData : {todo1: ""}})

  
  console.table(this.state.todos)
  }

  handleChange = (event) => {
    const formData = {...this.state.formData};
    formData[event.target.name] = event.target.value;

    this.setState({ formData })
}


completeCheck = () => {
  this.setState({
    todos: [...this.state.todos, { "completed": true}]
  })

  console.log('test')
}
  


  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={this.test}>
            <input
                type="text" 
                name="todo1" 
                className="new-todo" 
                placeholder="What needs to be done?"
                value={this.state.formData.todo1} 
                onChange={this.handleChange} 
                
                autoFocus />
          </form>
          
        </header>
        <TodoList todos={this.state.todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed" onClick={this.completeCheck}>Clear completed</button>
        </footer>
      </section>
    )
  }
}

class TodoItem extends Component {



  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.completed} onClick={this.completeCheck}/>
          <label>{this.props.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
          ))}
        </ul>
      </section>
    );
  }
}


export default App;
