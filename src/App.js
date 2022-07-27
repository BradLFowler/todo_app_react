import React, { Component } from 'react';
import TodoCard from './TodoCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listOfTodos: [],
      text: "Add or Edit or Set Status",
      todoStatus: ["red", "yellow", "green"]
    }
  }
  

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.text]})
    this.setState({text: "Add or Edit or Set Status"})
  }

  handleEdit = (index) => {
    let todosCopy = [...this.state.listOfTodos]
    todosCopy[index] = this.state.text
    this.setState({listOfTodos: [...todosCopy]})
    this.setState({text: "Add or Edit or Set Status"})
  }

  handleStatus = (index) => {
    if(this.state.text = this.state.todoStatus[0]) {
      [index].className = {color: this.state.todoStatus[0]}
    }
    this.setState({text: "Add or Edit or Set Status"})
  }

  deleteItem = (index) => {
    let todosCopy = [...this.state.listOfTodos]
    todosCopy.splice(index, 1)
    this.setState({listOfTodos: [...todosCopy]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <button type="submit">Submit Here</button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, index) => {
            return <TodoCard key={index} title={todo} index={index} handleStatus={(e) => this.handleStatus(index)} 
            handleEdit={() => this.handleEdit(index)} handleRemoveTodo={index => this.deleteItem(index)}/>
          })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;