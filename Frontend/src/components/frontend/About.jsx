import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import aboutImg from '../../assets/img/titasdevtech.jpg'; // Replace with your image
import team1 from '../../assets/img/team/mamun.jpg';   // Replace with team photos
import team2 from '../../assets/img/team/iqbal.jpg';
import profile from '../../../public/TitasDevTech_Profile.pdf'; // Replace with your profile PDF

const About = () => {
  return (
    <>
      <Header />
      <main>

<br /><br />
        {/* Company Overview */}
        <section className="about-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={aboutImg}
                  alt="About TitasDevTech"
                  className="img-fluid rounded-4 shadow"
                />
              </div>
              <div className="col-md-6">
                {/* <span className="text-uppercase text-danger fw-bold mb-2 d-block">About Us</span> */}
                <h2 className="mb-4 text-dark" style={{ fontSize: '5rem' }}>
                  Building the Future of Bangladesh with Innovation, Integrity, and Excellence.
                </h2>
                <p className="text-secondary">
                  <strong>TitasDevTech Engineering</strong>,  was established in the year 2012 and has since evolved into a leading construction and consultancy company in Bangladesh. 
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
                          With professionalism, integrity, and a focus on client satisfaction, TitasDevTech Engineering continues to build the future of Bangladesh.
                </p>
                <p className="text-secondary">
                  Our team specializes in infrastructure development, project management, structural design, and turnkey execution of industrial and public projects across the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="mission-section py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-uppercase">Mission, Vision & Values</h2>
              <hr />
            </div>
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <h4 className="text-danger">Our Mission</h4>
                <p>
                 <span style={{ fontSize: '2em' }}>A</span>t TitasDevTech Engineering, our mission is to transform visions into reality by constructing structures that are not only durable but also functional, 
                  sustainable, and visually impressive. We strive to create spaces that serve their purpose while contributing positively to the environment and society.
                  We are committed to upholding the highest standards of innovation, precision, and sustainability in all our projects. 
                  Our team focuses on continuous improvement and adopting 
                  modern technologies to deliver cost-effective, high-quality solutions. We believe in building long-term relationships with our 
                  clients by providing dependable services that 
                  meet their unique needs and exceed their expectations.
                  <br />
                  Our mission is simple: <b>to build today what stands strong tomorrow.</b> 
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h4 className="text-danger">Our Vision</h4>
                <p>
                  <span style={{ fontSize: '2em' }}>O</span>ur vision is to establish TitasDevTech Engineering as the market leader in Bangladesh’s construction industry, 
                  known for our unwavering commitment to quality, ethics, and reliability. We aim to set new benchmarks in construction 
                  excellence by delivering projects that consistently meet international standards and client satisfaction.
We envision a company where professionalism, safety, and environmental responsibility are at the heart of every project. By investing 
in advanced technologies, skilled manpower, and eco-friendly practices, we seek to redefine how construction is done in Bangladesh.
<br />
In the years ahead,<b>we aspire to not only lead the industry but also inspire it—by delivering sustainable, innovative solutions that build stronger communities and a better future.</b> 
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h4 className="text-danger">Our Core Values</h4>
                <ul className="list-unstyled">
                  <li>✔ Integrity</li>
                  <li>✔ Innovation</li>
                  <li>✔ Safety</li>
                  <li>✔ Teamwork</li>
                  <li>✔ Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Intro ------- video */}
        <section className="video-section py-5 bg-dark text-white">
            <div className="container text-center">
              <h2 className="mb-4">Watch Our Company Introduction</h2>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/ohwI3V207Ts  "
                  title="TitasDevTech Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
{/* Download profile */}
            <div className="text-center my-5 profile">

                 <h2 className="mb-4">Download Our Company Profile</h2>
                        <a href={profile} download
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-primary px-4 py-2"
                                  style={{ fontSize: '1.1rem', fontWeight: '500' }}
                                >
                                  📄 Download Company Profile
                        </a>
            </div>

        {/* Timeline of Achievements */}
        <section className="timeline-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-uppercase">Our Journey</h2>
              <p className="text-secondary">Milestones that shaped our path to leadership</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className="timeline">
                  <li>
                    <h5>2012 – Company Founded</h5>
                    <p>Started with a small team focused on industrial project consultancy.</p>
                  </li>
                  <li>
                    <h5>2015 – First Major Government Project</h5>
                    <p>Completed a national road & drainage infrastructure contract successfully.</p>
                  </li>
                  <li>
                    <h5>2018 – Diversified Services</h5>
                    <p>Expanded into full-scale design-build and supervision services.</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="timeline">
                  <li>
                    <h5>2020 – Recognized as Top Regional Contractor</h5>
                    <p>Awarded for delivering consistent quality under tight deadlines.</p>
                  </li>
                  <li>
                    <h5>2023 – Digital Project Management Introduced</h5>
                    <p>Integrated automation and digital tools for transparent execution.</p>
                  </li>
                  <li>
                    <h5>2024 – Nationwide Expansion</h5>
                    <p>Set up regional offices to manage multi-district mega projects.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
      <section className="team-section py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="text-uppercase">Our Managing Partners</h2>
      <p className="text-muted">Meet the visionary leaders driving TitasDevTech forward.</p>
    </div>
    <div className="row justify-content-center">
      {/* Partner 1 */}
      <div className="col-md-5 text-center mb-4">
        <div className="card shadow border-0 p-3">
          <img
            src={team1} // Change to your actual image path
            alt="Md Al Mamun"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4 className="text-danger mb-1">Md Al Mamun</h4>
          <p className="text-muted">Managing Partner</p>
          <p>
            When we founded TitasDevTech, our vision was simple yet ambitious: to
            leverage technology in ways that drive innovation, solve complex problems,
            and create value for our clients and communities. Today, as we reflect on our
            achievements and look forward to the future, it is clear that we are on a path of
            remarkable progress and transformation.
            We celebrate and invest in skills and hold each other as cohesive teams of committed
            people to a higher standard for our actions and results. With such a determined and highly
            motivated team, TitasDevTech always operates to deliver cost effectiveness to ensure
            that we remain the most attractive choice to our business partners and employees.
          </p>
        </div>
      </div>

      {/* Partner 2 */}
      <div className="col-md-5 text-center mb-4">
        <div className="card shadow border-0 p-3">
          <img
            src={team2} // Replace with actual image path
            alt="Second Partner"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4 className="text-danger mb-1">Md Iqbal Hossain</h4>
          <p className="text-muted">Managing Partner</p>
          <p>
            At TitasDevTech, we are driven by a singular vision: to harness the power of
            technology to create solutions that not only meet the needs of today but also
            anticipate the demands of tomorrow. Our journey has been marked by challeng-
            es and triumphs, but through it all, our dedication to pushing the boundaries of
            what is possible has remained unwavering.
            Our discipline, integrity, expertise, and commitment to our works enable us to
            execute at a higher level. Our values and purpose are our deepest motivation that
            drive us to be committed to helping our partners prosper by creating values and
            optimum solutions for them.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </>
  );
};

export default About;