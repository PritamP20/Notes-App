import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


// Based on the role given do it. Don't change it unless you are not assigned

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(email);
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  
  return (
    <div className="flex relative justify-center items-center h-screen ">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md border-r-2000">
      <div className="flex items-center justify-center">
        <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
        </svg>
       <h1 className="text-4xl text-black ml-1 font-bold">Login</h1>
      </div>
        <hr className = "mt-3" />
         <form onSubmit={handleSubmit}>
          <div className = "mt-3">
          <label for="email" className = "block text-base mb-2 text-black">Reva Email Id</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="YourRevaEmailId@reva.edu.in" id="email" className = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600" name="email" />
          </div>
          <div className="mt-3">
          <label for="password" className = "block text-base mb-2 text-black">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***************" id="password" className = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600" name="password" />
          </div>
          <div className="mt-3 flex justify-between items-center text-black">
            <div>
            <input type="checkbox" />
              <label className="ml-2">Remember Me</label>
              </div>
          </div>
          <div>
          <button type="submit" className="border-2 border-white bg-[#1e293b] text-white py-1 mt-7 w-full rounded-md hover:bg-white hover:border-black hover:text-black font-semibold">&nbsp;&nbsp;Log In</button>
          </div>
        </form> 
       </div> 
    </div>
  )
}

export default Login
