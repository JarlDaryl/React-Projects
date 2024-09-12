import React from 'react';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';

import { TodosContext } from '../store/todos-context';
import { useContext } from 'react';

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	
	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
