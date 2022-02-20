import React from "react";

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todoInput: "" };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = (event) => {
		this.setState({ todoInput: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTodo(this.state.todoInput);
	};

	render() {
		return (
			<form onSubmit={(event) => this.handleSubmit(event)}>
				<input
					type="text"
					placeholder="Add todo"
					value={this.state.todoInput}
					onChange={(event) => this.handleChange(event)}
				/>
				<button type="submit">+</button>
			</form>
		);
	}
}
