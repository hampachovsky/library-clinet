import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from 'store/bookSlice';
import { base64RegEx } from 'constants/constant';

export const Edit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const bookState = useSelector((state) => state.books);
  const book = bookState.find((book) => book.id === +bookId);

  const onSubmit = (data) => {
    const book = data;
    book.id = +bookId;
    book.rating = +data.rating;
    book.date = +data.date;
    book.views = 0;
    book.img = data.img;

    navigate('/');
    dispatch(editBook(book));
  };

  return (
    <div>
      <h1 className='text-4xl font-semibold text-blue-500 text-center my-4'>Edit book</h1>
      <div className='bg-white rounded-lg p-4 max-w-md m-auto mt-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-2'>
            <div className='text-xl font-semibold text-gray-500'>Name:</div>
            <FormInput register={register('name', { required: true })} placeholder={book.name} />
            {errors.name && <div className='text-red-500'>This field is required</div>}
          </div>
          <div className='mb-2'>
            <div className='text-xl font-semibold text-gray-500'>Author:</div>
            <FormInput register={register('author', { required: true })} placeholder={book.author} />
            {errors.author && <div className='text-red-500'>This field is required</div>}
          </div>
          <div className='mb-2'>
            <div className='text-xl font-semibold text-gray-500'>Rating:</div>
            <FormInput
              type='number'
              placeholder={book.rating}
              register={register('rating', { required: true, max: 5, min: 0 })}
            />
            {errors.rating?.type === 'required' && <div className='text-red-500'>This field is required</div>}
            {(errors.rating?.type === 'max' || errors.rating?.type === 'min') && (
              <div className='text-red-500'>Enter value between 0 and 5</div>
            )}
          </div>
          <div className='mb-2'>
            <div className='text-xl font-semibold text-gray-500'>Date of Writing:</div>
            <FormInput
              register={register('date', { required: true, min: '0', max: '2022' })}
              placeholder={book.date}
              type='number'
            />
            {errors.date?.type === 'required' && <div className='text-red-500'>This field is required</div>}
            {(errors.date?.type === 'max' || errors.date?.type === 'min') && (
              <div className='text-red-500'>Enter value between 0 and 2022</div>
            )}
          </div>
          <div className='mb-2'>
            <div className='text-xl font-semibold text-gray-500'>Link on Amazon:</div>
            <FormInput placeholder={book.buyLink} register={register('buyLink', { required: true })} />
            {errors.buyLink && <div className='text-red-500'>This field is required</div>}
          </div>
          <div className='mb-2'>
            <div className='text-xl font-semibold text-gray-500'>Link on image:</div>
            <FormInput placeholder={book.img} register={register('img', { pattern: base64RegEx })} />
            {errors.img && <div className='text-red-500'>This field mut be a base64 format.</div>}
          </div>
          <input
            className='mt-2 py-2 text-lg font-medium w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600'
            type='submit'
            value='Edit'
          />
        </form>
      </div>
    </div>
  );
};

const FormInput = (props) => (
  <input
    {...props}
    {...props.register}
    className='py-1 px-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ring-gray-200 ring-1 w-full'
  />
);
