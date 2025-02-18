import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App
