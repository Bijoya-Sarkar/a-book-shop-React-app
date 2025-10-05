import React from 'react';
import bookimage from '../../Assets/books.jpg';

const Banner = () => {
  return (
    <div className='flex justify-around items-center p-20 w-full' >
      <div>
        <h1 className='text-6xl pr-4 pb-15 '>Books to freshen up your bookshelf</h1>
        <button className='btn btn-primary bg-green-700 p-6 '>View The List</button>
      </div>
      <div>
        <img className='w-12/12 ' src={bookimage} alt="Books" />
      </div>
    </div>
  );
};

export default Banner;
