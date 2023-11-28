import React from 'react'
// Based on the role given do it. Don't change it unless you are not assigned
const Course = () => {
  return (
    <>
    <div  className='pt-12'>
      <div className=' pl-16 font-bold font-serif'>
        <h1 className='text-5xl'>Choose Your Course</h1>
    </div>
    </div>
    <div className='flex justify-between pl-20 pr-20 pt-16 '>
    <button type="button" class="text-gray-900 text-3xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>CSE</strong></button>
      </button>
    <button type="button" class="text-gray-900 text-3xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">MECH</button>
    <button type="button" class="text-gray-900 text-3xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">ELECTRICAL</button>
    </div>
    <div className='flex justify-between pl-48 pr-52 pt-16 '>
    <button type="button" class="text-gray-900 text-3xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">DEGREE</button>
    <button type="button" class="text-gray-900 text-3xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">MBA</button>
</div>
    </>
  )
}

export default Course
