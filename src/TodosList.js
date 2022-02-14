function TodoList(props) {
	return (
		<ul>
			{props.todos.map((todo) => (
				<li key={todo.id}>{todo.title}</li>
			))}
		</ul>
	);
}

export default TodoList;
