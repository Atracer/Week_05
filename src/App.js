import React, { Component } from "react";
class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ]
  };
handleChange = event => {
  this.setState({newTodo: event.target.value});
};
handleReplace = event => {
  this.setState({
    todos: [...this.state.todos]
  })
}
handleSubmit = event => {
  event.preventDefault();
};
  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}
            <button value = {todo} onClick = {this.handleChange}> X </button>
          </li>
        ))}
        <form onSumbit = {this.handleSubmit}>
          <input
          type = "text"
          value = {this.state.value}
          onChange = {this.handleChange}
          />
        <button onClick = {this.handleReplace}> + </button>
        <input type="submit" value="Send Request"/>
        </form>
      </div>
    );
  }
}

export default App;
