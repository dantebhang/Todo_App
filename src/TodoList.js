import React from "react";

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ["Wake up", "Drink water", "walk dogs", "Hit the trails"],
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //event handlers
  handleChange(e){
    this.setState({ value: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault()
    if(e.target.value !== ""){
      let newItem = this.target.value;

      this.setState((prevState) => {
        return {
          todos: prevState.todos.concat(newItem)
        }
      })

      this.value = ""
    }


  }

  render(){
    return (
      <div>
        <h1>ToDos</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="enter task"
            value={this.handleChange}
            />
            <button type="submit">+</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    )
  }
}