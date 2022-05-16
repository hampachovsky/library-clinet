import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
