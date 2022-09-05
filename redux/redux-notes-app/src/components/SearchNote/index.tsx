import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { queryBySearch } from '../../store/slices/noteSlice';
import './style.css';

function SearchNote() {
  const [searchNote, setSearchNote] = useState('');
  const dispatch = useAppDispatch();

  const handleSearchNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNote(e.target.value);
    dispatch(queryBySearch(e.target.value));
  };

  return (
    <input
      value={searchNote}
      type="text"
      className="search-input"
      placeholder="Search notes..."
      onChange={handleSearchNote}
    />
  );
}

export default SearchNote;
