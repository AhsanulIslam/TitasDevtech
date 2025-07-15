import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.png';
const Header = () => {
  return (
    <header>
          <div >
              <Navbar expand="lg"className="container">
                  <Navbar.Brand href="/">
                      <img
                          src={logo}
                          alt="TitasDevTech Logo"
                          width="180"
                          height="50" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                          <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                          <Nav.Link href="/about" className='nav-link'>About Us</Nav.Link>
                          <Nav.Link href="/services" className='nav-link'>Services</Nav.Link>
                          <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                          <Nav.Link href="/blogs" className='nav-link'>Blogs</Nav.Link>
                          <Nav.Link href="/contact" className='nav-link'>Contact Us</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
      </header>
  )
}

export default Header