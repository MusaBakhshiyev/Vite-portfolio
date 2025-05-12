import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'


function App() {

  return (
    <div className="container">
      <div className="navbar">
      <NavLink to="/Vite-portfolio">Home</NavLink>
      <NavLink to="/Vite-portfolio/about">About</NavLink>
      <NavLink to="/Vite-portfolio/jobs">Jobs</NavLink>
      <NavLink to="/Vite-portfolio/contact">Contact</NavLink>
      </div>

      <Routes>
        <Route path="/Vite-portfolio" element={<Home />} />
        <Route path="/Vite-portfolio/about" element={<About />} />
        <Route path="/Vite-portfolio/jobs" element={<Jobs />} />
        <Route path="/Vite-portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
