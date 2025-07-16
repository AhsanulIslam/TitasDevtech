import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import aboutImg from '../../assets/img/cil2.jpg'; // Replace with your image
import team1 from '../../assets/img/service1.jpeg';   // Replace with team photos
import team2 from '../../assets/img/service2.jpeg';
import team3 from '../../assets/img/service3.jpeg';
import profile from '../../../public/TitasDevTech_Profile.pdf'

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
                <span className="text-uppercase text-danger fw-bold mb-2 d-block">About Us</span>
                <h2 className="mb-4 text-dark">
                  Building the Future of Bangladesh with Innovation, Integrity, and Excellence
                </h2>
                <p className="text-secondary">
                  <strong>TitasDevTech Engineering</strong>, established in 2012, is a leading construction and consultancy company in Bangladesh.
                  From concept to completion, we deliver high-impact engineering solutions for public and private sectors.
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
                  To provide innovative, sustainable, and reliable engineering and construction solutions that contribute to the nation’s growth.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h4 className="text-danger">Our Vision</h4>
                <p>
                  To be recognized as Bangladesh’s most trusted and dynamic infrastructure partner committed to excellence and client satisfaction.
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
          <div className="text-center my-5">
                    <a
                      href={profile}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
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
            src="/team/md-al-mamun.jpg" // Change to your actual image path
            alt="Md Al Mamun"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4 className="text-danger mb-1">Md Al Mamun</h4>
          <p className="text-muted">Managing Partner</p>
          <p>
            An experienced civil engineer and project manager, Md Al Mamun leads with a strong focus on quality, execution, and innovation across all projects.
          </p>
        </div>
      </div>

      {/* Partner 2 */}
      <div className="col-md-5 text-center mb-4">
        <div className="card shadow border-0 p-3">
          <img
            src="/team/partner-2.jpg" // Replace with actual image path
            alt="Second Partner"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h4 className="text-danger mb-1">Md Iqbal Hossain</h4>
          <p className="text-muted">Managing Partner</p>
          <p>
            [Short bio about leadership, specialization, or strategic vision. Keep it 2-3 lines for clarity and balance.]
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