import React from 'react'
import { Link } from 'react-router-dom';

// Based on the role given do it. Don't change it unless you are not assigned
const Course = () => {
  return ( 
    <>
    <div  className='relative pt-12'>
      <div className=' pl-16 font-bold font-serif'>
        <h1 className='text-5xl'>Choose Your Course</h1>
    </div>
    </div>
    <div className='flex relative justify-between pl-20 pr-20 pt-16 '>
    <Link to='/CSE'>
        <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-10 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
          <img className="h-20" src="/src/assets/books.png" alt="" />
          <hr />
          <button><strong>CSE</strong></button>
        </button>
      </Link>
    <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
    <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
    
    </div>
    <div className='flex relative justify-between pl-20 pr-20 pt-16 '>
    <Link to='/CSE'>
        <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
          <img className="h-20" src="/src/assets/books.png" alt="" />
          <hr />
          <button><strong>CSE</strong></button>
        </button>
      </Link>
    <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
      <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
    </div>
    <div className='flex relative justify-between pl-20 pr-20 pt-16 '>
    <Link to='/CSE'>
        <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
          <img className="h-20" src="/src/assets/books.png" alt="" />
          <hr />
          <button><strong>CSE</strong></button>
        </button>
      </Link>
    <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
      <button type="button" class="text-gray-900 text-xl bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
    </div>
   
    
    </>
  )
}

export default Course
