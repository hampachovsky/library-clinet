import { useState } from 'react';

export const useSearch = (books) => {
  const [searchValue, setSearchValue] = useState('');
  const [foundBooks, setFoundBooks] = useState([]);

  const hadleSearch = (e) => {
    const val = e.target.value;
    const newFoundBooks = val
      ? books.filter((b, i) => i <= books.length && b.name.toLowerCase().includes(val.toLowerCase()))
      : [];
    setFoundBooks(newFoundBooks);
    setSearchValue(val);
  };

  return {
    searchValue,
    foundBooks,
    hadleSearch,
  };
};
