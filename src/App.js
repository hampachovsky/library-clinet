import { Layout } from 'components/Layout';
import { Book } from 'pages/Book';
import { Books } from 'pages/Books';
import { Create } from 'pages/Create';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router';

function App(props) {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/:bookId' element={<Book />} />
        <Route path='/books' element={<Books />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </Layout>
  );
}

export default App;
