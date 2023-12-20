import React from 'react'
import { Link } from 'react-router-dom';

// Do not change the navbar.

const Navbar = () => {
  return (

 
<nav class="relative rounded-lg shadow-lg bg-transparent border-gray-200 dark:bg-transparent sm:mx-52 ">
  <div class="w-f flex flex-wrap items-center justify-between p-4">
  <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/src/assets/logo.png" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Note Ninja!</span>
  </Link>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <Link to="/Login">
      <button type="button" class="block text-2xl py-2 px-3 text-Black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">
        LOGIN
      </button>
  </Link>

      {/* <!-- Dropdown menu --> */}
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
        <Link to="/" href="#" class="block text-2xl py-2 px-3 text-black bg-white-400 rounded md:bg-transparent md:text-black-400 md:p-0 md:dark:text-black-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/Course" href="#" class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Course</Link>
      </li>
      <li>
        <Link to = "/Reference" class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Reference</Link>
      </li>
      <li>
        <Link to='/Contact'><a href="#" class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">FeedBack</a></Link>
      </li>
    </ul>
  </div>
  </div>
</nav>




  
  )
}

export default Navbar
