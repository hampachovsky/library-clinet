import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiURL } from 'api/config';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async function () {
  const response = await axios.get(`${apiURL}/books`);
  return response;
});

export const addNewBook = createAsyncThunk('book/addNewBook', async function (data, { rejectWithValue, dispatch }) {
  await axios.post(`${apiURL}/books`, data);
  dispatch(fetchBooks());
});

export const deleteBook = createAsyncThunk('book/deleteBook', async function (id, { rejectWithValue, dispatch }) {
  await axios.delete(`${apiURL}/books/${id}`);
  dispatch(fetchBooks());
});
export const editBook = createAsyncThunk('book/editBook', async function (data, { rejectWithValue, dispatch }) {
  await axios.put(`${apiURL}/books/${data.id}`, data);
  dispatch(fetchBooks());
});

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    status: null,
    error: null,
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBookActionAction(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = 'LOADING';
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'RESOLVED';
      state.error = null;
      state.books = action.payload.data;
    },
    [addNewBook.fulfilled]: (state, action) => {
      state.status = 'RESOLVED';
      state.error = null;
    },
    [fetchBooks.rejected]: (state, action) => {},
  },
});

export const { addBook, deleteBookAction } = bookSlice.actions;

export default bookSlice.reducer;
