function TodoList(props) {
	return (
		<ul>
			{props.todos.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => console.log('clicked')}
					/>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
