import React, { Component } from 'react';
import TodoCard from './TodoCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      listOfTodos: [],
      text: ""
    }
  }
  
  handleClick = () => {
    this.state.isClicked ? 
      this.setState({isClicked: false }) :
      this.setState({isClicked: true })
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.text]})
    this.setState({text: ""})
  }

  deleteItem = (index) => {
    console.log("was clicked")
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
            <input type="text" value={this.state.text} onChange={this.handleChange}>
            </input>
            <button type="submit">Submit Here</button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, index) => {
            return <TodoCard key={index} title={todo} index={index} handleRemoveTodo={index => this.deleteItem(index)}/>
          })}
          </ol>
          <button onClick={this.handleClick}>Click Me</button>
          <p>
            {this.state.isClicked ? "true" : "false"}
          </p>
        </header>
      </div>
    );
  }
}

export default App;