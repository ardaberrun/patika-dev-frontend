import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../../Note';

export type AppState = {
  notes: Note[];
  query: string;
  editMode: {
    note: Note | null;
    isEditing: boolean;
  };
};

const initialState: AppState = {
  notes: [],
  query: '',
  editMode: {
    isEditing: false,
    note: null
  }
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Omit<Note, 'id'>>) => {
      const newNote = {
        ...action.payload,
        id: Math.random().toString(),
      }
      state.notes.push(newNote);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(note => note.id === action.payload.id);
      state.notes[index] = action.payload;
    },

    queryBySearch: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    changeEditMode: (state, action: PayloadAction<{ isEditing: boolean, note: Note | null}>) => {
      state.editMode = action.payload;
    }
  },

});

export const { addNote, updateNote, removeNote, queryBySearch, changeEditMode } = noteSlice.actions;

export default noteSlice.reducer;
