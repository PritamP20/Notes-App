import React from 'react'
import { Link } from 'react-router-dom';


// Based on the role given, do it. Don't change it unless you are not assigned

const Textform1 = () => {
  return (
    <>
    {/* <div className='flex pt-40 space-x-5 justify-start h-max '>
      <div className='w-2/3'>
        <div className='flex flex-col  w-full pl-[17%] pt-[0%] space-y-2 font-bold font-serif'>
          <h3 className='text-lg'>Hi There,</h3>
          <h1 className='text-6xl'>Hello guys how r u ?</h1>
          <h2 className='text-2xl '>  Hope everything is goood😁</h2>
        </div>
          <Link to='/Course'>
            <button class="relative ml-[21%] mt-[3%] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-4 text-[20px] transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                COURSES
              </span>
            </button>
          </Link>
      </div>
      <div className=' flex items-center pt-16'>
        <img className="h-64" src="/src/assets/books.png" alt="" />
      </div>
    </div> */}

<div className=' flex flex-col h-screen pt-52 items-center'>
    {/* <div className='flex pt-40 space-x-5 justify-start h-max'> */}
    {/* <div className='pt-40 space-x-5 justify-start h-max'> */}
    <div className=' '>
    
      <div className=''>
        <div className='flex flex-col  w-full  space-y-2 font-bold font-serif items-center'>
          <h3 className='text-xl'>Hi There,</h3>
          <h1 className='text-7xl'>Hello guys how r u ?</h1>
          <h2 className='text-4xl '>  Hope everything is goood😁</h2>
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
    
 
    </>
  )
}

export default Textform1

