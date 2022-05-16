import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
