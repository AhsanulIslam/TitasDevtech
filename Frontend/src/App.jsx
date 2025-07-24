import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/CSS/style.scss';
import './assets/CSS/contact.scss';

import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Project from './components/frontend/Project';
import Contact from './components/frontend/Contact';
import Blogs from './components/frontend/Blogs';
import Team from './components/frontend/Team';
import Login from './components/backend/login';
import Dashboard from './components/backend/dashboard';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer position='top-center' />
    </>
  );
}

export default App;