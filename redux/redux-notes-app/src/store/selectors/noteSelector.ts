import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

const selectSelf = (state: RootState) => state.notes;
const selectNotesSelf = (state: RootState) => state.notes.notes;
const selectQuerySelf = (state: RootState) => state.notes.query;
export const selectNotesByQuery = createDraftSafeSelector(
  selectNotesSelf,
  selectQuerySelf,
  (notes, query) =>
    notes.filter(
      (note) =>
        note.title?.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    )
);

export const editModeSelector = createDraftSafeSelector(selectSelf, (state) => state.editMode);