import React from "react";
import "./App.css";
import TodoList from "./TodoList.js";
import TodoForm from "./TodoForm";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
		};
	}

	addTodo = (todo) => {
		this.setState((prevState) => ({
			todos: [...prevState.todos, todo],
		}));
	};

	deleteTodo = (value) => {
		this.setState((prevState) => ({
			todos: prevState.todos.filter((todo) => todo !== value),
		}));
	};

	render() {
		return (
			<div className="App">
				<h1>Todos</h1>
				<TodoList todos={this.state.todos} />
				<TodoForm addTodo={this.addTodo} deleteTodo={this.deleteTodo}/>
			</div>
		);
	}
}

export default App;
