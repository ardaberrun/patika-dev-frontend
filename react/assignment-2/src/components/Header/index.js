import React, { useState } from 'react';

function Header({ setTodos }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
      setTodos((prevTodos) => [...prevTodos, { id: Date.now(), todo: task, completed: false }]);
      setTask('');
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
          value={task}
        />
      </form>
    </header>
  );
}

export default Header;
