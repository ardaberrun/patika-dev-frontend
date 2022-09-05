import './style.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectNotesByQuery } from '../../store/selectors/noteSelector';
import { changeEditMode, removeNote } from '../../store/slices/noteSlice';
import { Note } from '../../Note';

function NoteList() {
  const notes = useAppSelector(selectNotesByQuery);
  const dispatch = useAppDispatch();

  const handleEditNote = (note: Note) => {
    dispatch(changeEditMode({ isEditing: true, note }));
  };

  const handleDeleteNote = (noteId: string) => {
    dispatch(removeNote(noteId));
  };

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note"
          style={{ backgroundColor: note.color }}
        >
          <div className={`note-header ${note.title ? '' : 'no-title'}`}>
            {note.title && <h3 className="note-title">{note.title}</h3>}
            <div className="note-actions no-title">
              <button onClick={() => handleEditNote(note)}>Edit</button>
              <button onClick={() => handleDeleteNote(note.id)}>Remove</button>
            </div>
          </div>
          <p className="note-content">{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
