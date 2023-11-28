import React from 'react'
import { Link } from 'react-router-dom';


const Sem_1 = () => {
  return (
    <div>
      <div  className='pt-12 flex flex-col'>
          <div className=' pl-16 font-bold font-serif'>
            <h1 className='text-5xl'>Select Your Cycle</h1>
          </div>
        </div>
      <div className='pt-24'>
        <Link to="/Physics"><button type="button" className="ml-28 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Physics-Cycle</button></Link>
        <button type="button" className="ml-44 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">Chemistry-Cyle</button>
      </div>
    </div>
  )
}

export default Sem_1
