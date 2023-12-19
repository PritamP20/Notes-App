import Navbar from './components/Navbar';
import Example from './components/Navbar'
import Textform1 from './components/Textform1'
import Login from './components/Login'
import React, {useState} from 'react'
// For React Router v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Course from './components/Course';
import CSE from './components/CSE/CSE_sem';
import Sem_1 from './components/CSE/Sem_1';
import Physics from './components/CSE/Physics';
import Contact from './components/Contact';
import Upload from './components/Upload';
import Chemistry from './components/CSE/Chemistry';
import Preview from './components/CSE/Preview';
import Reference from './components/References/Reference';
//import Reference_sem1 from './components/References/Reference_sem1';

// import MyCustomButton from './components/MyCustomButton';



// For React Router v5
 //import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
      <div className='bg-[#fef9c3] h-screen ab mt-0'>
        {/* <img src="/src/assets/BEEE_thumbnail.png" alt="" /> */}
        <img className="absolute" src="/src/assets/bg-1.jpeg" alt="" />
        <Navbar></Navbar>
        <Routes> 
          <Route path="/" element={<Textform1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/CSE" element={<CSE />} />
          <Route path="/Sem_1" element={<Sem_1 />} />
          <Route path="/Physics" element={<Physics />} />
          <Route path="/Reference" element={<Reference />} />
          {/* <Route path="/Reference_sem1" element={<Reference_sem1 />} /> */}
          {/* <Route path="/Mybutton" element={<MyCustomButton />} /> */}
          {/* <Route path="/upload" element={UploadButton} /> */}
          <Route path="/Chemistry" element={<Chemistry />} />
          <Route path="/Preview" element={<Preview/>} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Contact" element={<Contact />} />
          
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
