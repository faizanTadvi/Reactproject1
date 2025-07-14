import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './test.jsx'
import Navbar from './navbar.jsx'
import Names from './names.jsx'
import Button from './button.jsx'
import Signup from './signup.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";import Login from './login.jsx'

function App() {

  return (
    <>
    <h1>hello world</h1>
    
     
     <Routes>
      <Route path="/login" element ={<Login/>} />
      <Route path="/signup" element={<Signup />} />
     </Routes>
    </>
  )
}

export default App;