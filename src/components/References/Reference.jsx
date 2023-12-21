import React from 'react';
import { Link } from 'react-router-dom';

const Reference = () => {
  return (
    <div className="flex relative justify-center pt-12 ">
      <div className="p-12 bg-transparent shadow-2xl rounded-lg">
        <h1 className="text-3xl pl-44 font-bold mb-6">Course References</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <Link to="/Reference_sem1"> 
        <button className='pl-0'>
          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 1</h2>
          </div>
          </button>
          </Link>
          
          
          <button>
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 2</h2>
          </div>
          </button>

          <button>
          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 3</h2>
          </div>
          </button>

          <button>
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 4</h2>
          </div>
          </button>

          <button>
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 5</h2>
          </div>
          </button>

          <button>
          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 6</h2>
          </div>
          </button>

          <button>
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 7</h2>
          </div>
          </button>

          <button>
          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Semester 8</h2>
          </div>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Reference;
