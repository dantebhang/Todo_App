import React from "react";

const TodoList = (props) => (
	<ul>
		{props.todos.map((todo, index) => 
			<li key={index}>{todo}</li>
		)}
	</ul>
);

export default TodoList;
