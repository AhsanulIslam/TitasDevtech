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
            <h3 className='mb-3 service'>OUR SERVICE</h3>
            <ul>
              <li><a href="#home">Residential & Commercial Buildings</a></li>
              <li><a href="#home">Auditorium & Public Buildings</a></li>
              <li><a href="#home">Roads & Highways</a></li>
              <li><a href="#home">Infrastructure Development</a></li>
              <li><a href="#home">Power Plant, Hydraulic Structure</a></li>
              <li><a href="#home">Industrial Infrastructure</a></li>
            </ul>
          </div>

          <div className='col-md-3 px-5'>
            <h3 className='mb-3 quick'>QUICK LINK</h3>
            <ul>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/services">SERVICES</a></li>
              <li><a href="/projects">PROJECTS</a></li>
              <li><a href="/team">TEAM</a></li>
              <li><a href="/blogs">BLOGS</a></li>
              <li><a href="/contact">CONTACT US</a></li>
            </ul>
          </div>

          <div className='col-md-3'>
            <div className='row'>
              <div className='col-12 mb-3'>
                <h3 className='mb-3 contact'>CONTACT US</h3>
                <ul>
                  <li>Phone: +880 1234567890</li>
                  <li>Email: titasjvdevtech@gmail.com</li>
                  <li>Noor Tower, 9A (Lift 8) House: 29/31, Road: 01, Block: D, Sector: 2, Aftabnagar, Dhaka-1212.</li>
                </ul>
              </div>

              <div className='col-12'>
                {/* Embedded Google Map */}
                <div className="map-container" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <iframe
                    title="TitasDevTech Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7395800730115!2d90.42887031538574!3d23.79331269250601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78e9fa89b69%3A0x2044f9e6b41c30a6!2sAftabnagar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700202046024!5m2!1sen!2sbd"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ color: 'white' }} />
        <p className="mb-0" style={{ color: 'white' }}>© 2023 TitasDevTech Engineering. All rights reserved.</p>
        <p style={{ color: 'white' }}>
          Follow us on:
          <a href="#" className="ms-2">Facebook</a>
          <a href="#" className="ms-2">Twitter</a>
          <a href="#" className="ms-2">LinkedIn</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;