import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { editModeSelector } from '../../store/selectors/noteSelector';
import { addNote, changeEditMode, updateNote } from '../../store/slices/noteSlice';
import './style.css';

const colors = [
  'rgb(253 224 71)',
  'rgb(134 239 172)',
  'rgb(125 211 252)',
  'rgb(216 180 254)',
  'rgb(249 168 212)',
];

function AddNote() {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
    color: activeColor,
  });
  const editMode = useAppSelector(editModeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editMode.isEditing) {
      setFormValues({
        title: editMode.note?.title || '',
        content: editMode.note!.content,
        color: editMode.note!.color,
      });
      setActiveColor(editMode.note!.color);
    }
  }, [editMode]);
  

  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editMode.isEditing) {
      dispatch(updateNote({ ...formValues, id: editMode.note!.id }));
      dispatch(changeEditMode({ note: null, isEditing: false }));
    } else {
      dispatch(addNote(formValues));
    }

    setFormValues({ title: '', content: '', color: activeColor });
  };

  return (
    <form className="add-note" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        onChange={handleFormChange}
        value={formValues.title}
        placeholder="Note title"
        className="form-header"
      />
      <div className="form-main">
        <textarea
          name="content"
          placeholder="Note content"
          value={formValues.content}
          onChange={handleFormChange}
          required
        />
        <div className="form-footer">
          <div className="colors">
            {colors.map((color) => (
              <button
                value={color}
                key={color}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveColor(e.currentTarget.value);
                  setFormValues({
                    ...formValues,
                    color: e.currentTarget.value,
                  });
                }}
                className={`color ${activeColor === color && 'active'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button type="submit">
            {editMode.isEditing ? 'Edit Note' : 'Add Note'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddNote;
