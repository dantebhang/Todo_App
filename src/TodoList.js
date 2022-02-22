import React from "react";

//mini component that is not in a separate file 
const Todo = (props) => (
	<li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);

const TodoList = (props) => {
	return (
		<ul>
			{props.todos.map((todo) => (
				<Todo todo={todo} key={todo} deleteTodo={props.deleteTodo} />
			))}
		</ul>
	);
};

export default TodoList;
