import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';  
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Project from './components/frontend/Project';
import Contact from './components/frontend/Contact';
import Blogs from './components/frontend/Blogs';
import Team from './components/frontend/Team';
import './assets/CSS/style.scss';
import './assets/CSS/contact.scss';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/services' element={<Services/>} />
                  <Route path='/projects' element={<Project/>} />
                  <Route path='/contact' element={<Contact/>} />
                  <Route path='/blogs' element={<Blogs/>} />
                  <Route path='/team' element={<Team/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
