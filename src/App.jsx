import { Layout } from 'components/Layout';
import { Book } from 'pages/Book';
import { Books } from 'pages/Books';
import { Create } from 'pages/Create';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router';
import React, { useEffect } from 'react';
import { fetchBooks } from 'store/bookSlice';
import { useDispatch } from 'react-redux';
import { Edit } from 'pages/Edit';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/:bookId' element={<Book />} />
        <Route path='/books' element={<Books />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:bookId' element={<Edit />} />
      </Routes>
    </Layout>
  );
}

export default App;
