import React from 'react'
const Footer = () => {
  return (
    <footer>
    <div className="container text-center py-5">
                <div className='row'>
                    <div className='col-md-3 fs-5'>
                        <h1 className='text-white'>TitasDevTech Engineering</h1>
                        <p className='text-white'>"Building the Future with Excellence"</p>
                    </div>
                    <div className='col-md-3 px-5'>
                        <h3 className=' mb-3 service'>OUR SERVICE</h3>
                        <ul>
                            <li>
                                <a href="#home">Residential & Commercial Buildings</a>
                            </li>
                            <li>
                                <a href="#home">Auditorium & Public Buildings</a>
                            </li>
                            <li>
                                <a href="#home">Roads & Highways</a>
                            </li>
                            <li>
                                <a href="#home">Infrastructure Development</a>
                            </li>
                            <li>
                                <a href="#home">Power Plant, Hydraulic Structure</a>
                            </li>
                            <li>
                                <a href="#home">Industrial Infrastructure</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3 px-5'>
                        <h3 className='mb-3 quick'>QUICK LINK</h3>
                        <ul>
                            {/* <li>
                                <a href="#home">HOME</a>
                            </li> */}
                            <li>
                                <a href="/about">ABOUT US</a>
                            </li>
                            <li>
                                <a href="/services">SERVICES</a>
                            </li>
                            <li>
                                <a href="/projects">PROJECTS</a>
                            </li>
                            <li>
                                <a href="/blogs">BLOGS</a>
                            </li>
                            <li>
                                <a href="/contact">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h3 className='mb-3 contact'>CONTACT US</h3>
                        <ul>
                            <li>
                                Phone: +880 1234567890
                            </li>
                            <li>
                                Email: titasjvdevtech@gmail.com
                            </li>
                            <li>
                                Noor Tower, 9A (Lift 8) House: 29/31, Road: 01, Block: D, Sector: 2, Aftabnagar, Dhaka-1212.
                            </li>
                        </ul>
                    </div>
                </div>
                    <hr />
                <p className="mb-0">© 2023 TitasDevTech Engineering. All rights reserved.</p>
                <p>Follow us on:
                    <a href="#" className="ms-2">Facebook</a>
                    <a href="#" className="ms-2">Twitter</a>
                    <a href="#" className="ms-2">LinkedIn</a>
                </p>
            </div>
            
    </footer>

  )
}



export default Footer