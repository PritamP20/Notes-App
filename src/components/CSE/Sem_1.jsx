import React from 'react'
import { Link } from 'react-router-dom';


const Sem_1 = () => {
  return (
    <div className="flex relative justify-center pt-12 ">
    <div className="p-12 bg-transparent shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Choose your Cycle</h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">

      <Link to="/Physics"> 
      <button className='pl-0'>
        <div className="bg-[#020617] p-4  rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Physics Cycle</h2>
        </div>
        </button>
        </Link>
        
        <Link to="/Chemistry">
        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Chemistry Cycle</h2>
        </div>
        </button>
        </Link>


      </div>
    </div>
  </div>
  )
}

export default Sem_1
