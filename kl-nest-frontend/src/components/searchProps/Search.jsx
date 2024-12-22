import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Search = ({placeholders}) => {
  return (
      <div className='flex mb-2 w-[30rem]'>
                <input type="text" placeholder={placeholders} className='placeholder:text-[#667894] text-black outline-none bg-transparent w-full px-3 py-3 border  focus:border-blue-950 transition duration-700 ease-in-out rounded-r-none rounded-l-md' />
                <div className='flex items-center justify-center rounded-r-md rounded-l-none w-[3.5rem] cursor-pointer bg-blue-950 hover:bg-slate-600'>
                  <IoSearch className='text-white text-[1.6rem]' />
                </div>
              </div>
  )
}

export default Search
