import React from 'react'
import { Link } from 'react-router-dom';


// Based on the role given, do it. Don't change it unless you are not assigned

const Textform1 = () => {
  return (
    // <div className='flex h-screen w-full items-center justify-center font-bold bg-white-300'>
    //      <h1>HI this is a  app</h1>
    // </div>
    <>
    <div className='flex space-x-5 justify-between'>
      <div className='w-2/3'>
        <div className='flex flex-col  w-full pl-[17%] pt-[17%] space-y-2 font-bold font-serif'>
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
      <div className='font-bold'>
        Hello this is image
      </div>
    </div>
    

    </>
  )
}

export default Textform1
