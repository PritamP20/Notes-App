import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Reference_sem1 = () => {
  const navigate=useNavigate()
  return (
    <div className="flex relative justify-center pt-12 ">
      <div className="p-8 bg-transparent shadow-2xl rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Course References</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reference Item 1 */}
          
          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Multivariable Calculus and Linear Algebra</h2>
            <p className="text-white">References: <a  className="underline text-white">Link</a></p>
          </div>
          

          {/* Reference Item 2 */}
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Physics for Computer Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          {/* Reference Item 3 */}
          <button onClick={()=>{
                navigate("/Preview2",{state : "https://firebasestorage.googleapis.com/v0/b/fir-app-5920f.appspot.com/o/files%2FOperating%20System%20Concepts%207th%20ed%20-%20Silberschatz%20Galvin.pdf?alt=media&token=6a3b7cbe-d44e-4082-9a0a-44dccbd39140"})
            }} type='button'>
          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>
          </button>

          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Civil</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">EME</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">CAED</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-[#020617] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          


          {/* Add more reference items as needed */}
        </div>
      </div>
    </div>
  )
}

export default Reference_sem1;
