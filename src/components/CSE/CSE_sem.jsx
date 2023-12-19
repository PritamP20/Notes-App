import React from 'react'
import { Link } from 'react-router-dom';


const CSE = () => {
  return (
    <>
      <div  className='pt-12 flex flex-col'>
          <div className=' pl-16 font-bold font-serif'>
            <h1 className='text-5xl'>Select Your Semister</h1>
          </div>
        </div>
 
        <div className='space-y-20 pt-32 pr-20 pl-20'>
        <div className=''>
        <div className=''>
          <div className='flex justify-between'>
            <Link to='/Sem_1'><button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-1</button></Link>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-2</button>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-3</button>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-4</button>
        </div>
        </div>

        <div>
          <div className='flex justify-between'>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-5</button>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-6</button>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-7</button>
            <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-8</button>
          </div>
        </div>
        </div>

      </div>

    </>
  )
}

export default CSE

{/* <div className='flex justify-center'>
    <div className='flex flex-col pr-80'>
    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-1</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-3</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-5</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-7</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-</button>

    </div>
    <div className='flex flex-col'>
    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-2</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-4</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-6</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-8</button>

    <button type="button" className="text-xl text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Semister-</button>

    </div>
    </div> */}
