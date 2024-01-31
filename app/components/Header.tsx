import React from 'react';

function Header() {
  return (
    <div className='mx-10 my-5 px-5 bg-slate-800 rounded-2xl'>
      <div className=' justify-center items-center flex'>
        <a href="/" className="text-primary mt-10 p-4 text-white text-center text-3xl ">
          Xprovement
        </a>
      </div>
      <div className='flex-row flex justify-between px-4'>
        <div className="flex items-center py-6">
          <a href="/Home" className="font-bold text-sm text-gray-400">Home</a>
        </div>
        <div className="flex items-center py-6">
          <a href="/Learning" className="font-bold text-sm text-gray-400">Learning</a>
        </div>
        <div className="flex items-center py-6">
          <a href="/Shop" className="font-bold text-sm text-gray-400">Shop</a>
        </div>
        <div className="flex items-center py-6">
          <a href="/Product" className="font-bold text-sm text-gray-400">Products</a>
        </div>
        <div className="flex items-center py-6">
          <a href="/NewsLetter" className="font-bold text-sm text-gray-400">NewsLetter</a>
        </div>
        <div className="flex items-center py-6">
          <a href="/Contact" className="font-bold text-sm text-gray-400">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
