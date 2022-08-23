import React, { useMemo } from 'react';

function List({ todos, setTodos, activeFilter }) {
  const handleChangeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markAsAll = () => {
    if (todos.some((todo) => !todo.completed)) {
      setTodos(todos.map((todo) => ({ ...todo, completed: true })));
    } else {
      setTodos(todos.map((todo) => ({ ...todo, completed: false })));
    }
  };

  const renderedTodo = useMemo(() => {
    switch(activeFilter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'all':
      default:
        return todos;
    }
  }, [todos, activeFilter]);

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={markAsAll}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {renderedTodo.map((todo) => (
          <li
            onClick={() => handleChangeTodo(todo.id)}
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                readOnly
                checked={todo.completed}
              />
              <label>{todo.todo}</label>
              <button
                className="destroy"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTodo(todo.id);
                }}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
