import './App.css';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';

function App() {
  return (
    <div className="container">
      <div className="content">
        <SearchNote />
        <AddNote />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
