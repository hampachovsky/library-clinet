import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'store/bookSlice';
import coverIcon from 'assets/cover.png';

export const BookCard = ({ id, name, author, img }) => {
  const dispatch = useDispatch();
  return (
    <div className='bg-white rounded-lg p-4 flex flex-col justify-between'>
      <div>
        <img width={250} src={img || coverIcon} alt='' />
        <div className='text-center'>
          <h3 className='text-2xl text-blue-500 font-semibold max-w-s'>{name}</h3>
          <h4 className='text-lg text-gray-500 font-medium'>{author}</h4>
        </div>
      </div>
      <Link to={`/books/${id}`}>
        <button className='mt-2 py-2 text-lg font-medium w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          Explore More
        </button>
      </Link>
      <Link to={`/edit/${id}`}>
        <button className='mt-2 py-2 text-lg font-medium w-full bg-yellow-500 text-white rounded-lg hover:bg-yellow-600'>
          Edit
        </button>
      </Link>
      <button
        onClick={() => dispatch(deleteBook(id))}
        className='mt-2 py-2 text-lg font-medium w-full bg-red-500 text-white rounded-lg hover:bg-red-600'
      >
        Delete
      </button>
    </div>
  );
};
