import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

const INITIAL_TODOS = [
  { id: 1, todo: 'Learn Javascript', completed: false },
  { id: 2, todo: 'Learn React', completed: false },
  { id: 3, todo: 'Learn Vue', completed: false },
];
function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="todoapp">
      <Header setTodos={setTodos} />
      <List todos={todos} activeFilter={activeFilter} setTodos={setTodos} />
      <Footer
        todos={todos}
        setTodos={setTodos}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </section>
  );
}

export default App;
