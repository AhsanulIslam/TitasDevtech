import React, { useEffect, useState } from 'react';
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
import img1 from '../../assets/img/back.jpg';
import img2 from '../../assets/img/back2.jpg';
import img3 from '../../assets/img/back3.jpg';
import icon1 from '../../assets/img/icon1.png';
import icon from '../../assets/img/icon.png';
import icon4 from '../../assets/img/icon4.png';
import icon5 from '../../assets/img/icon5.png';
import icon7 from '../../assets/img/icon7.png';
import icon2 from '../../assets/img/icon2.png';
import client1 from '../../assets/img/client1.png';
import client2 from '../../assets/img/client2.png';
import client3 from '../../assets/img/client3.png';
import client4 from '../../assets/img/client4.png';
import client5 from '../../assets/img/client5.png';
import client6 from '../../assets/img/client6.png';
import client7 from '../../assets/img/client7.jpg';
import client8 from '../../assets/img/client8.png';
import project1 from '../../assets/img/project1.jpeg';
import project2 from '../../assets/img/project2.jpeg';
import project3 from '../../assets/img/project3.jpeg';
import project4 from '../../assets/img/project4.jpeg';



const clients = [
  { name: 'Acme Laboratories Ltd.', logo: client1 },
  { name: 'AKIJ Group', logo: client2 },
  { name: 'Nasir Group', logo: client3 },
  { name: 'Confidence Infrastructure Limited', logo: client7 },
  { name: 'Rakeen World Class Living', logo: client5 },
  { name: 'EPIK International Inc.', logo: client6 },
  { name: 'Kiam Metal Industries Limited', logo: client4 },
  { name: 'Sterling', logo: client8 },  // Reuse image or import separately
];

const heroImages = [img1, img2, img3];

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

  const shortText = fullText.split(' ').slice(0, 100).join(' ') + '...';

   const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const images = [img1, img2, img3];
    
  return (
            <>
     
       <Header/>
      <main>
        {/*Hero section*/}
                <section className="section1">
          {images.map((img, index) => (
            <div
              key={index}
              className={`bg-slide ${index === currentImage ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          ))}

          <div className="container hero-content">
            <div className="text-center">
              <span className="wel">
                Welcome To Titas<span className="devtech">DevTech</span> Engineering
              </span>
              <h1>Your Trusted Build With Us!!</h1>
              <p className="back">
                We are a team of highly skilled and dedicated professionals, driven by a passion for excellence in the construction and engineering industry.
              </p>
                         <div className="button-group">
                                    <a href="/contact" className="btn btn-primary">Contact Now</a>
                                    <a href="/projects" className="btn btn-secondary">View Projects</a>
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
        <section className="section3 bg-light py-5">
            <div className='container-fluid'>
                <div className='text-center'>
                    <div className='section-header'>
                            <span>Our Services</span>
                       <hr />
                             <h2>We are committed to delivering high-quality, innovative, and sustainable solutions that meet the unique needs of each client.</h2>      
                    </div>
                   <br />
                </div>
                <div className='row'>
                    <div className="col-md-3 col-lg-3 mb-3">
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

                            <div className="col-md-3 col-lg-3 mb-3">
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

                         <div className="col-md-3 col-lg-3 mb-3">
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

                <br/>
                <div className="view-all-btn-container text-center mt-4">
                        <a href="/services" className="btn btn-secondary view-all-btn">
                            View All Services
                        </a>
                </div>
        <br />
    </div>

        </section>

        {/*Why Choose us*/}
        <section className="section4 ">
          <div className='container py-5'>
            <div className='section-header text-center'>
                <span>Why Choose Us!!</span>
                <hr />
                <h2>We are committed to delivering high-quality, innovative, and sustainable solutions that meet the unique needs of each client.</h2>  
                <p>Our focus is not just on completing projects, but on building long-term value through excellence, precision, and forward-thinking approaches. By combining expert craftsmanship with modern technologies and strict safety standards, we ensure every project stands as a benchmark in quality and reliability. Whether it's infrastructure, industrial, or commercial construction, we work with integrity and dedication to turn your vision into reality.</p>
            </div>
                   <br />

                   <div className='row'>
                       
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                        <div className='card-icon'>
                                            <img src={icon1} alt="icon1" />
                                        </div>
                                        <div className='card-title'>
                                            <h4>PROVEN INDUSTRY EXPERIENCE</h4>
                                        </div>
                                        <div className='card-content'>
                                            <p>A solid track record in delivering complex infrastructure and building projects across various sectors.</p>
                                       </div>
                                       
                                </div>
                                
                            </div>

                             <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                        <div className='card-icon'>
                                            <img src={icon} alt="PROFESSIONALISM" />
                                        </div>
                                        <div className='card-title'>
                                            <h4>STRICT -COMPLIANCE & PROFESSIONALISM</h4>
                                        </div>
                                        <div className='card-content'>
                                            <p>We strictly follow national and international standards, ensuring transparency and compliance in every project.</p>
                                       </div>
                                </div>
                            </div>

                             <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                        <div className='card-icon'>
                                            <img src={icon4} alt="icon1" />
                                        </div>
                                        <div className='card-title'>
                                            <h4>TIMELY DELIVERY, EVERY TIME</h4>
                                        </div>
                                        <div className='card-content'>
                                            <p>We prioritize strict timelines, delivering projects as committed without compromising on quality, safety, and client satisfaction.</p>
                                       </div>
                                       
                                </div>
                            </div>

                   </div>
                   <br />
                   <br />
                                   <div className='row'>
                       
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                        <div className='card-icon'>
                                            <img src={icon5} alt="QUALITY " />
                                        </div>
                                        <div className='card-title'>
                                            <h4>QUALITY, SAFETY & RELIABILITY FIRST</h4>
                                        </div>
                                        <div className='card-content'>
                                            <p>Every project is executed under strict quality control and safety protocols, ensuring durable and risk-free outcomes.</p>
                                       </div>
                                </div>
                            </div>

                             <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                        <div className='card-icon'>
                                            <img src={icon7} alt="INNOVATIVE " />
                                        </div>
                                        <div className='card-title'>
                                            <h4>INNOVATIVE & SUSTAINABLE SOLUTIONS</h4>
                                        </div>
                                        <div className='card-content'>
                                            <p>We integrate modern construction techniques and sustainable practices to build future-ready structures.</p>
                                       </div>
                                </div>
                            </div>

                             <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                        <div className='card-icon'>
                                            <img src={icon2} alt="CLIENT" />
                                        </div>
                                        <div className='card-title'>
                                            <h4>CLIENT-FIRST & SOLUTION-DRIVEN APPROACH</h4>
                                        </div>
                                        <div className='card-content'>
                                            <p>Your satisfaction is our priority — from planning to execution, we’re committed to exceeding expectations.</p>
                                       </div> 
                                </div>
                            </div>
                   </div>
                   
          </div>
          
        </section>

      <br />


        {/*Projects */}
        <section className="section5 bg-light">
  <div className='container-fluid py-4'>
    <div className='text-center'>
      <div className='section-header'>
        <span>Our Major Projects</span>
        <hr style={{ borderColor: 'black' }} />
        <h2>Our commitment to timely delivery, innovation, and sustainability drives us to exceed expectations with every build.</h2>
        <br />
      </div>
    </div>

    <div className='row'>

      <div className="col-md-3 col-lg-3">
        <div className="item">
          <div className="service-image">
            <img src={project1} alt="Turkish Embassy" className="w-100" />
          </div>
          <div className="service-body">
            <div className="service-title">
              <h3>Turkish Embassy, Baridhara, Dhaka</h3>
            </div>
            <div className="service-content">
              <p>We successfully completed construction works for the prestigious Turkish Embassy in Baridhara, showcasing international standards and precision engineering.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-lg-3">
        <div className="item">
          <div className="service-image">
            <img src={project2} alt="Bijoy Rakeen City" className="w-100" />
          </div>
          <div className="service-body">
            <div className="service-title">
              <h3>Bijoy Rakeen City, Mirpur, Dhaka</h3>
            </div>
            <div className="service-content">
              <p>One of the largest residential township projects in Dhaka, built with modern design, sustainable materials, and meticulous attention to detail.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-lg-3">
        <div className="item">
          <div className="service-image">
            <img src={project3} alt="Nasir Jute Industries" className="w-100" />
          </div>
          <div className="service-body">
            <div className="service-title">
              <h3>Nasir Jute Industries Ltd.</h3>
            </div>
            <div className="service-content">
              <p>We constructed industrial facilities for Nasir Jute Industries, contributing to Bangladesh's growing industrial sector with durable and efficient infrastructure.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-lg-3">
        <div className="item">
          <div className="service-image">
            <img src={project4} alt="Narayanganj Silo" className="w-100" />
          </div>
          <div className="service-body">
            <div className="service-title">
              <h3>Narayanganj Silo – Road & Drain</h3>
            </div>
            <div className="service-content">
              <p>Completed road and drainage infrastructure for Narayanganj Silo, ensuring sustainable transportation and flood management solutions.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <br />
    <div className="view-all-btn-container text-center mt-4">
      <a href="/projects" className="btn btn-secondary view-all-btn">
        View All Projects
      </a>
    </div>
    <br />
  </div>


{/* // Client */}
</section>
           <section className="section6 py-5">
                <div className="container text-center">
                    <div className="section-header mb-5">
                    <span>Our Key Clients</span>
                   <hr style={{ color: 'white' }} />
                    <h2 className="mb-0">We’re trusted by industry leaders</h2>
                    </div>

                    <div className="row justify-content-center align-items-center">
                    {clients.map((client, index) => (
                        <div key={index} className="col-6 col-md-3 mb-4">
                        <div className="client-logo">
                            <img src={client.logo} alt={client.name} title={client.name} />
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
        </section> 
                    

                

        

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
        

      </main>
      <Footer/>
      
      
      
      </>
      
  );
};

export default Home;