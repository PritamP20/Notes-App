import React from 'react';

const Reference = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Course References</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reference Item 1 */}
          <div className="bg-blue-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Multivariable Calculus and Linear Algebra</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          {/* Reference Item 2 */}
          <div className="bg-green-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Physics for Computer Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          {/* Reference Item 3 */}
          <div className="bg-yellow-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-blue-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Civil</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-green-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">EME</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-yellow-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">CAED</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-blue-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-green-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          <div className="bg-yellow-500 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Introduction to Data Science</h2>
            <p className="text-white">References: <a href="/" className="underline text-white">Link</a></p>
          </div>

          


          {/* Add more reference items as needed */}
        </div>
      </div>
    </div>
  )
}

export default Reference;