function TodoList(props) {
	const handleChange = () => {
		console.log('clicked');
	};
	return (
		<ul>
			{props.todos.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={handleChange}
					/>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
