import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

import projectImg1 from '../../assets/img/projects/sample1.jpg';
import projectImg2 from '../../assets/img/projects/sample2.jpg';
import projectImg3 from '../../assets/img/projects/sample3.jpg';
import projectImg4 from '../../assets/img/projects/sample4.jpg';
import projectImg5 from '../../assets/img/projects/sample5.jpg';



const ongoingProjects = [
  {
    title: 'Narayanganj silo – CIL',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg1, projectImg2, projectImg3]
  },
  {
    title: 'ACME API Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg2, projectImg3, projectImg4]
  },
    {
    title: 'Comilla University Project (Male Hall-02)-CIL',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg1, projectImg2, projectImg3]
  },
  {
    title: 'Akij Feed Mill Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg2, projectImg3, projectImg4]
  },
    {
    title: 'NGIL Family Quarter Project',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg1, projectImg2, projectImg3]
  },
  {
    title: 'NGIL Road & Drain Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg2, projectImg3, projectImg4]
  },
    {
    title: 'NQGIL Circulating Pump',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg2, projectImg3, projectImg4]
  },
    {
    title: 'NFIL Production Building Project',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg1, projectImg2, projectImg3]
  },
  {
    title: 'Kiam Kushtia Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg2, projectImg3, projectImg4]
  },
    {
    title: 'Sterling Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg2, projectImg3, projectImg4]
  },
  // Add other ongoing projects similarly
];

const majorProjects = [
  {
    title: 'Turkish Embassy, Baridhara, Dhaka',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [projectImg1, projectImg4, projectImg3]
  },
  {
    title: 'Bijoy Rakeen City, Mirpur, Dhaka',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [projectImg2, projectImg3, projectImg1]
  },
    {
    title: 'Nasir Jute Industries Ltd.',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [projectImg1, projectImg4, projectImg3]
  },
  {
    title: 'Narayanganj silo – Road & Drain',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [projectImg2, projectImg3, projectImg1]
  },
    {
    title: 'SRP BComilla University Project (Male Hall-02)',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [projectImg1, projectImg4, projectImg3]
  },
  {
    title: 'Road work for Nasir Quality Glass Ind. Ltd.',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [projectImg2, projectImg3, projectImg1]
  },
    {
    title: 'FG Warehouse – AKIj Feed Mills ',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [projectImg1, projectImg4, projectImg3]
  },
  {
    title: 'Office Building including Underground Watertank – AKIJ Essestials Ltd.',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [projectImg2, projectImg3, projectImg1]
  },
  // Add other major projects similarly
];

const workOrderDocuments = [
  { title: 'Work Order 001', url: '/pdfs/workorder1.pdf' },
  { title: 'Work Order 002', url: '/pdfs/workorder2.pdf' },
  { title: 'Work Order 003', url: '/pdfs/workorder3.pdf' },
];


const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Add animation classes on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.project-card');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const renderProjectSection = (title, projects) => (
    
    <section className="project-section bm-5">
      <br />
      <br />
      <div className="container">
        <h2>{title}</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 project-card mb-4">
              <div
                className="card h-100"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>{project.title}</h5>
                  <p>{project.description.substring(0, 100)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Header />
      <main>
        {renderProjectSection('Ongoing Projects', ongoingProjects)}
        {renderProjectSection('Major Projects', majorProjects)}

        <section className="workorder-section">
          <div className="container">
            <h2>Work Order Documentation</h2>
            <ul className="list-group">
              {workOrderDocuments.map((doc, index) => (
                <li key={index} className="list-group-item">
                  {doc.title}
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Download PDF
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {selectedProject && (
          <div
            className="modal show d-block bg-dark bg-opacity-75 project-modal"
            tabIndex="-1"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedProject(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{selectedProject.description}</p>
                  <div className="row">
                    {selectedProject.images.map((img, idx) => (
                      <div key={idx} className="col-md-4 mb-3">
                        <img
                          src={img}
                          alt={`Project ${idx}`}
                          className="w-100 rounded shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Project;







