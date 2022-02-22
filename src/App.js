import React from "react";
import "./App.css";
import TodoList from "./TodoList.js";
import TodoForm from "./TodoForm";

class App extends React.Component {
	//always use constructor when declaring state
	constructor(props) {
		super(props);

		this.state = {
			todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
		};
	}

	//remember formatting of functions
	addTodo = (todo) => {
		//always call setState to change state 
		this.setState((prevState) => ({
			//create copy to not mutate state directly
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
				<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<TodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
