import React from 'react';
import { TodoList } from './TodoList.js';

export class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <div>
          <h3 align="center">TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="todo">
              ¿Qué necesitas recordar?
            </label>
            <input
                type="text"
                id="txt"
                onChange={this.handleChange}
                value={this.state.text}
            />
            <label htmlFor="priority">
              Prioridad
            </label>
            <input
                type="number"
                id="n"
                onChange={this.handleChange}
                value={this.state.priority}
            />
            <label htmlFor="date">
              ¿Cuándo lo harás?
            </label>
            <input
                type="date"
                id="d"
                onChange={this.handleChange}
                value={this.state.dueDate}
            />
            <button>
              Agregar tarea #{this.state.items.length + 1}
            </button>
          </form>
        </div>
    );
  }

  handleChange(e) {
    this.setState({ text: document.getElementById('txt').value })
    this.setState({ priority: document.getElementById('n').value });;
    this.setState({ dueDate: document.getElementById('d').value });;
  }

  handleSubmit(e) {

    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

}