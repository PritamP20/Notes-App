import React from 'react'
import { Link } from 'react-router-dom';
// Based on the role given, do it. Don't change it unless you are not assigned

const Textform1 = () => {
  return (
    <>

<div className=' flex flex-col h-screen pt-52 items-center'>
    {/* <div className='flex pt-40 space-x-5 justify-start h-max'> */}
    {/* <div className='pt-40 space-x-5 justify-start h-max'> */}
    <div className=' '>
    
      <div className=''>
        <div className='flex flex-col  w-full  space-y-5 font-bold font-serif items-center'>
          <h1 className='relative text-7xl font-serif'>Welcome to Notes Ninja</h1>
          <h2 className='relative text-4xl text-center font-serif'> The Collaborative Hub where students and educators seamlessly share </h2>
          <h2 className='relative text-4xl text-center font-serif'>  and refer notes across various schools</h2>
          <div>
          <Link to='/Course'>
            {/* <button class="relative ml-[30%] mt-[3%] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"> */}
            <button  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-3 py-2 text-[20px] transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Course
              </span>
            </button>
          </Link>
          <Link to='/Upload'>
            {/* <button class="relative ml-[30%] mt-[3%] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"> */}
            <button  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-3 py-2 text-[20px] transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Upload
              </span>
            </button>
          </Link>
          </div>
        </div>
          
      </div>
    </div>
    </div>
    
 
    </>
  )
}

export default Textform1

