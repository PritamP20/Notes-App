import React from 'react'
import { Link } from 'react-router-dom';

// Based on the role given do it. Don't change it unless you are not assigned
const Course = () => {
  return ( 
    <div className="flex relative justify-center pt-12 ">
    <div className="p-16 bg-transparent shadow-2xl rounded-lg">
      <h1 className="text-5xl font-bold mb-8">Choose your Course </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        
      
      <button>
        <div className="bg-[#020617] p-4 rounded-lg">
          <Link to="/CSE">
          <h2 className="text-xl font-semibold text-white mb-2">CSE</h2>
          </Link>
        </div>
        </button>
        

        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">CSE-IOT</h2>
        </div>
        </button>
        
        <button>
        <div className="bg-[#020617] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">CSE-AIDS</h2>
        </div>
        </button>
        
        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">CSE-AIML</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">ISE</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#020617] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">ECE</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">EEE</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#020617] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">ROBOTICS</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#020617] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">AERONAUTICAL</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">MECHATRONICS</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#020617] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">MECHANICAL</h2>
        </div>
        </button>

        <button>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">CIVIL</h2>
        </div>
        </button>

        


        {/* Add more reference items as needed */}
      </div>
    </div>
  </div>
  )
}

export default Course
