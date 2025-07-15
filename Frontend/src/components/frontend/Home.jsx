import React, { useState } from 'react';
import Aboutimg from '../../assets/img/cil2.jpg'; 
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import service1 from '../../assets/img/service1.jpeg';
import service2 from '../../assets/img/service2.jpeg';
import service3 from '../../assets/img/service3.jpeg';
import service4 from '../../assets/img/service4.jpeg';
import service5 from '../../assets/img/service5.jpeg';
import service6 from '../../assets/img/service6.jpeg';   
import service7 from '../../assets/img/service7.jpeg';
import service8 from '../../assets/img/service8.jpeg';

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const fullText = `TitasDevTech Engineering was established in the year 2012 and has since evolved into a leading construction and consultancy company in Bangladesh. 
  From the early stages of conceptualization to detailed planning, design, construction, and engineering, we provide comprehensive services tailored to meet 
  the needs of a diverse range of projects across various industries and sectors.
  
  Over the years, TitasDevTech has proudly built an impressive portfolio of professional achievements, completing a wide variety of construction assignments 
  throughout Bangladesh. Our projects span from government infrastructure developments to private and public sector constructions, showcasing our versatility and 
  dedication to excellence. Whether it is a large-scale industrial facility, a modern commercial building, or a critical public infrastructure project, TitasDevTech 
  consistently delivers reliable solutions that meet and exceed client expectations.

  Our core expertise lies in construction, design, supervision, and project management, where we serve as trusted partners to clients across government, private enterprises,
  and public organizations. By offering a multidisciplinary approach, we ensure every project benefits from integrated solutions that combine efficiency, innovation, and long-term value. 
  Our goal is to be recognized as a reputable and versatile construction and consultancy firm with the capacity to successfully execute projects across multiple sectors of construction and engineering.

  At TitasDevTech Engineering, we believe that our greatest asset is our team. We are fully committed to the continuous professional development of our engineers and technical staff. 
  Understanding the ever-changing nature of technology and modern construction techniques, we encourage our personnel to stay up to date with advancements in their respective fields. 
  This dedication to continuous learning ensures that we consistently apply the latest industry practices and technologies in all our projects.
  With professionalism, integrity, and a focus on client satisfaction, TitasDevTech Engineering continues to build the future of Bangladesh.`;

  const shortText = fullText.split(' ').slice(0, 60).join(' ') + '...';
    
  return (
            <>
     
       <Header/>
      <main>
        {/*Hero section*/}
        <section className="section1">
            <div className="hero d-flex align-items-center">
                <div className='container-fluid'>
                    <div className='text-center'>
                        <span className='wel'>Welcome To Titas<span className='devtech'>DevTech</span> Engineering</span>
                        <h1>Your Trusted Build With Us!!</h1>
                        <p className='back'>We are a team of highly skilled and dedicated professionals, driven by a passion for excellence in the construction and engineering industry. <br/>
                            With a strong foundation of technical expertise and years of industry experience, we specialize in delivering innovative, reliable, and sustainable engineering solutions 
                            tailored to meet the unique needs of each client. <br/>  At Titas Devtech Engineering, our commitment goes beyond completing projects; we focus on building long-term relationships 
                            based on trust, quality, and performance. <br/> From infrastructure development to specialized industrial works, we integrate cutting-edge technologies with industry best practices 
                            to ensure every project meets the highest standards of safety, durability, and efficiency.</p>
                        <div className='mt-4'>
                            <a href='/contact'  className='btn btn-primary' >Contact Now</a>
                            <a href='/projects'  className='btn btn-secondary ms-2'>View Projects</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        {/*About Us */}
        <section className="section2 py-5">
          <div className="container py-5">
            <div className="row align-items-stretch">
              <div className="col-md-6 d-flex">
                <img src={Aboutimg} alt="About" className="w-100" style={{ objectFit: 'cover' }} />
              </div>

              <div className="col-md-6 d-flex flex-column justify-content-center">
                <span>About Us</span>
                <hr />
                <h2>
                  Shaping tomorrow’s infrastructure through advanced engineering, sustainable construction, and a commitment to building lasting, future-ready structures.
                </h2>
                <p style={{ whiteSpace: 'pre-line' }}>
                  {expanded ? fullText : shortText}
                </p>
                <button className="read-toggle-btn"
                            onClick={() => setExpanded(!expanded)}
                            >
                            {expanded ? 'Read Less' : 'Read More'}
                 </button>
              </div>
            </div>
          </div>
        </section>

             {/*Our Services */}
        <section className="section3 bg-light">
            <div className='container-fluid py-4'>
                <div className='text-center'>
                    <div className='section-header'>
                            <span>Our Services</span>
                       <hr />
                             <h2>We are committed to delivering high-quality, innovative, and sustainable solutions that meet the unique needs of each client.</h2>      
                    </div>
                   
                </div>
                <div className='row'>
                    <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service1} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Residential & Commercial Buildings</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                    We specialize in constructing residential and commercial buildings,
                                    ensuring quality, safety, and sustainability in every project.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                    </div>

                            <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service2} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Auditorium & Public Buildings</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                    Our expertise extends to designing and building auditoriums and public buildings that serve as community hubs, combining architectural beauty with practical functionality.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                            </div>

                         <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service4} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Roads & Highways</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                    We undertake the construction of roads and highways, ensuring safe and efficient transportation infrastructure that meets the highest standards of quality and durability.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                        </div>


                         <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service6} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Infrastructure Development</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                   Our infrastructure development projects focus on creating robust systems that support economic growth and improve quality of life through sustainable practices. </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                         </div>

                </div>

                <br />

                <div className='row'>
                    <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service7} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Power Plant</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                    We design and construct power plants and hydraulic structures, contributing to energy sustainability and efficient water management systems.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                    </div>

                            <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service8} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Hydraulic Structure</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                    We design and construct power plants and hydraulic structures, contributing to energy sustainability and efficient water management systems.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                            </div>

                         <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service3} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Industrial Infrastructure</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                         We deliver robust industrial infrastructure solutions tailored for factories, warehouses, and energy facilities, ensuring high durability, safety, and operational efficiency.
                                   </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                        </div>


                         <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={service5} alt="Service Image" className="w-100" />
                                </div>
                                <div className="service-body">
                                <div className="service-title">
                                    <h3>Roadside Footpath & Drain</h3>
                                </div>
                                <div className="service-content">
                                    <p>
                                       We design and construct roadside footpaths and drainage systems that ensure safe pedestrian access and effective stormwater management for urban and rural infrastructure.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                                </div>
                            </div>
                         </div>

                </div>


                
                    

                

        </div>

                    {/* <div className='col-md-4'>


                <div className='row mt-4'>
                    <div className='col-md-4'>
                        <div className='service-box text-center'>
                            <h3>Infrastructure Development</h3>
                            <p>Our infrastructure development projects focus on creating robust systems that support economic growth and improve quality of life through sustainable practices.</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='service-box text-center'>
                            <h3>Power Plant, Hydraulic Structure</h3>
                            <p>We design and construct power plants and hydraulic structures, contributing to energy sustainability and efficient water management systems.</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='service-box text-center'>
                            <h3>Industrial Infrastructure</h3>
                            <p>TitasDevTech Engineering provides comprehensive</p>
                </div>
                 </div>
                  </div> */}
        </section>

      </main>
      <Footer/>
      
      
      
      </>
      
  );
};

export default Home;