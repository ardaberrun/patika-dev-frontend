import React from 'react';

const filters = ['all', 'active', 'completed'];

function Footer({ todos, setTodos, activeFilter, setActiveFilter }) {
  const handleClear = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => !todo.completed).length}</strong>
        {` items left`}
      </span>

      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? 'selected' : ''}
            >
              {filter[0].toUpperCase() + filter.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {todos.some((todo) => todo.completed) && (
        <button className="clear-completed" onClick={handleClear}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
