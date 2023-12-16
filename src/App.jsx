import Navbar from './components/Navbar';
import Example from './components/Navbar';
import Textform1 from './components/Textform1';
import Login from "./components/Login";
import React, {useState} from "react";
// For React Router v6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./components/Course";
import { fromJSON } from "postcss";

// For React Router v5
 //import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Textform1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Course" element={<Course />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
