import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Chemistry = () => {
  return (
    <>
    <div className='relative flex pt-10 space-x-4'> 
        <div className='w-1/5 flex-col border border-black rounded-xl'>
          <h1 className='flex p-2 justify-center text-3xl text font-semibold'>P&S</h1>
          <hr className='border-black' />
          {/* <Link to="/Preview" url="https://firebasestorage.googleapis.com/v0/b/fir-app-5920f.appspot.com/o/files%2FUnit%203_Mechanics.pdf?alt=media&token=5059f8b1-3f06-402d-8e2e-85dd4b345d51"> */}
          <div className='flex justify-center pt-8'>
            <button onClick={()=>{
                navigate("/Preview",{state : "https://firebasestorage.googleapis.com/v0/b/fir-app-5920f.appspot.com/o/files%2FUnit%203_Mechanics.pdf?alt=media&token=5059f8b1-3f06-402d-8e2e-85dd4b345d51"})
            }}  type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 1</h1>
              <p>Curve Fitting and Statistical Methods</p>
            </button>
          </div>
          {/* </Link> */}
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 2</h1>
              <p>Probability Distributions</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 3</h1>
              <p>Joint Probability Distribution</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 4</h1>
              <p>Sampling Theory</p>
            </button>
          </div>  
        </div>

        <div className='w-1/5 flex-col border border-black rounded-xl'>
          <h1 className='flex p-2 justify-center text-3xl text font-semibold'>Chemistry</h1>
          <hr className='border-black' />
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 1</h1>
              <p>Light and Matter Interaction</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 2</h1>
              <p>Clean Energy Storage and Conversion Devices</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 3</h1>
              <p>Concepts of Corrosion</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 4</h1>
              <p>Chemistry of Engineering Materials</p>
            </button>
          </div>  
        </div>

        <div className='w-1/5 flex-col border border-black rounded-xl'>
          <h1 className='flex p-2 justify-center text-3xl text font-semibold'>PWC</h1>
          <hr className='border-black' />
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 1</h1>
              <p>Algorithms,Flowchart and Introduction to C</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 2</h1>
              <p>Operators and Expressions,Conditional Statements and Iterative Statements</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 3</h1>
              <p>Arrays,Functions and Strings</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 4</h1>
              <p>Structures & Unions and File Operations</p>
            </button>
          </div>  
        </div>

        <div className='w-1/5 flex-col border border-black rounded-xl'>
          <h1 className='flex p-2 justify-center text-3xl text font-semibold'>EME</h1>
          <hr className='border-black' />
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 1</h1>
              <p>Introduction to Energy Systems</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 2</h1>
              <p>Prime Movers,Refrigeration and Air Conditioning</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 3</h1>
              <p>Materials and Manufacturing Processes</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 4</h1>
              <p>Machine Elements,Mechatronics and Robotics</p>
            </button>
          </div>  
        </div>
        
        <div className='w-1/5 flex-col border border-black rounded-xl'>
          <h1 className='flex p-2 justify-center text-3xl text font-semibold'>Communication Skills</h1>
          <hr className='border-black' />
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 1</h1>
              <p>Functional English</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 2</h1>
              <p>Interpersonal Skills</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 3</h1>
              <p>Multitasking Skills</p>
            </button>
          </div>
          <div className='flex justify-center pt-8'>
            <button type="button" className="shadow-xl flex-col justify-center items-end text-gray-900 bg-transparent border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700">
              <h1 className='text-xl'>Unit 4</h1>
              <p>Persuasive Skills</p>
            </button>
          </div>  
        </div>


      </div>
    </>
  )
}

export default Chemistry
