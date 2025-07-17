import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import PDFViewer from '../Common/PDFViewer'; // Import your PDFViewer component

import projectImg1 from '../../assets/img/projects/CILN/CILN1.jpg';
import projectImg2 from '../../assets/img/projects/CILN/CILN2.jpg';
import projectImg3 from '../../assets/img/projects/CILN/CILN3.jpg';
import projectImg4 from '../../assets/img/projects/CILN/CILN4.jpg';
import projectImg5 from '../../assets/img/projects/CILN/CILN5.jpg';
import projectImg6 from '../../assets/img/projects/CILN/CILN6.jpg';
import projectImg7 from '../../assets/img/projects/CILN/CILN7.jpg';
import projectImg8 from '../../assets/img/projects/ACME/ACME1.jpg';
import projectImg9 from '../../assets/img/projects/ACME/ACME2.jpg';
import projectImg10 from '../../assets/img/projects/ACME/ACME3.jpg';
import projectImg11 from '../../assets/img/projects/ACME/ACME4.jpg';
import projectImg12 from '../../assets/img/projects/ACME/ACME5.jpg';
import projectImg13 from '../../assets/img/projects/ACME/ACME6.jpg';
import projectImg14 from '../../assets/img/projects/CILC/CILC1.jpg';
import projectImg15 from '../../assets/img/projects/CILC/CILC2.jpg';
import projectImg16 from '../../assets/img/projects/CILC/CILC3.jpg';
import projectImg17 from '../../assets/img/projects/CILC/CILC4.jpg';
import projectImg18 from '../../assets/img/projects/CILC/CILC5.jpg';
import projectImg19 from '../../assets/img/projects/CILC/CILC6.jpg';
import projectImg20 from '../../assets/img/projects/CILC/CILC7.jpg';
import projectImg21 from '../../assets/img/projects/akij/akij1.jpg';
import projectImg22 from '../../assets/img/projects/akij/akij2.jpg';
import projectImg23 from '../../assets/img/projects/akij/akij3.jpg';
import projectImg24 from '../../assets/img/projects/akij/akij4.jpg';
import projectImg25 from '../../assets/img/projects/akij/akij5.jpg';
import projectImg26 from '../../assets/img/projects/akij/akij6.jpg';
import projectImg27 from '../../assets/img/projects/NasirM/NasirM1.jpg';
import projectImg28 from '../../assets/img/projects/NasirM/NasirM2.jpg';
import projectImg29 from '../../assets/img/projects/NasirM/NasirM3.jpg';
import projectImg30 from '../../assets/img/projects/NRD/NRD1.jpg';
import projectImg31 from '../../assets/img/projects/NRD/NRD2.jpg';
import projectImg32 from '../../assets/img/projects/NRD/NRD3.jpg';
import NasirT1 from '../../assets/img/projects/NasirT/NasirT1.jpg';
import NasirT2 from '../../assets/img/projects/NasirT/NasirT2.jpg';
import NasirT3 from '../../assets/img/projects/NasirT/NasirT3.jpg';
import NasirT4 from '../../assets/img/projects/NasirT/NasirT4.jpg';
import NasirT5 from '../../assets/img/projects/NasirT/NasirT5.jpg';
import NasirT6 from '../../assets/img/projects/NasirT/NasirT6.jpg';
import NasirT7 from '../../assets/img/projects/NasirT/NasirT7.jpg';
import NasirT8 from '../../assets/img/projects/NasirT/NasirT8.jpg';
import NasirT9 from '../../assets/img/projects/NasirT/NasirT9.jpg';
import NasirT10 from '../../assets/img/projects/NasirT/NasirT10.jpg';
import NFoot1 from '../../assets/img/projects/NFoot/NFoot1.jpg';
import NFoot2 from '../../assets/img/projects/NFoot/NFoot2.jpg';
import NFoot3 from '../../assets/img/projects/NFoot/NFoot3.jpg';
import NFoot4 from '../../assets/img/projects/NFoot/NFoot4.jpg';
import NFoot5 from '../../assets/img/projects/NFoot/NFoot5.jpg';
import NFoot6 from '../../assets/img/projects/NFoot/NFoot7.jpg';
import kiam1 from '../../assets/img/projects/kiam/kiam.jpg';
import sterlink1 from '../../assets/img/projects/sterlink/sterlink1.jpg';
import sterlink2 from '../../assets/img/projects/sterlink/sterlink2.jpg';
import sterlink3 from '../../assets/img/projects/sterlink/sterlink3.jpg';
import sterlink4 from '../../assets/img/projects/sterlink/sterlink4.jpg';
import sterlink5 from '../../assets/img/projects/sterlink/sterlink5.jpg';
import Turkish1 from '../../assets/img/projects/Turkish/Turkish1.jpeg';
import Turkish2 from '../../assets/img/projects/Turkish/Turkish2.jpeg';
import Turkish3 from '../../assets/img/projects/Turkish/Turkish3.jpeg';
import Raken1 from '../../assets/img/projects/rakeen/Raken1.jpeg';
import Raken2 from '../../assets/img/projects/rakeen/Raken2.jpeg';
import Raken3 from '../../assets/img/projects/rakeen/raken3.jpeg';
import Raken4 from '../../assets/img/projects/rakeen/Raken4.jpeg';
import Raken5 from '../../assets/img/projects/rakeen/Raken5.jpeg';
import Raken6 from '../../assets/img/projects/rakeen/Raken6.jpeg';
import NasirJ1 from '../../assets/img/projects/NasirJ/NasirJ1.jpg';
import NasirJ2 from '../../assets/img/projects/NasirJ/NasirJ2.jpg';
import NasirJ3 from '../../assets/img/projects/NasirJ/NasirJ3.jpg';
import NasirJ4 from '../../assets/img/projects/NasirJ/NasirJ4.jpg';
import NasirJ5 from '../../assets/img/projects/NasirJ/NasirJ5.jpg';
import NasirJ6 from '../../assets/img/projects/NasirJ/NasirJ6.jpg';
import NasirJ7 from '../../assets/img/projects/NasirJ/NasirJ7.jpg';
import NasirJ8 from '../../assets/img/projects/NasirJ/NasirJ8.jpg';

const ongoingProjects = [
  {
    title: 'Narayanganj silo – CIL',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg2, projectImg1, projectImg3, projectImg4, projectImg5, projectImg6, projectImg7]
  },
  {
    title: 'ACME API Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg9, projectImg8, projectImg10, projectImg11, projectImg12, projectImg13]
  },
  {
    title: 'Comilla University Project (Male Hall-02)-CIL',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg14, projectImg15, projectImg16, projectImg17, projectImg18, projectImg19, projectImg20]
  },
  {
    title: 'Akij Feed Mill Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg21, projectImg22, projectImg23, projectImg24, projectImg25, projectImg26]
  },
  {
    title: 'NGIL Family Quarter Project',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [projectImg27, projectImg28, projectImg29]
  },
  {
    title: 'NGIL Road & Drain Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [projectImg30, projectImg31, projectImg32]
  },
  {
    title: 'NQGIL Circulating Pump',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [NasirT1, NasirT2, NasirT3, NasirT4, NasirT5, NasirT6, NasirT7, NasirT8, NasirT9, NasirT10]
  },
  {
    title: 'NFIL Production Building Project',
    description: 'Ongoing construction of silo facility ensuring quality storage infrastructure.',
    images: [NFoot1, NFoot2, NFoot3, NFoot4, NFoot5, NFoot6]
  },
  {
    title: 'Kiam Kushtia Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [kiam1]
  },
  {
    title: 'Sterling Project',
    description: 'State-of-the-art pharmaceutical infrastructure under development.',
    images: [sterlink1, sterlink2, sterlink3, sterlink4, sterlink5]
  },
];

const majorProjects = [
  {
    title: 'Turkish Embassy, Baridhara, Dhaka',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [Turkish1, Turkish2, Turkish3]
  },
  {
    title: 'Bijoy Rakeen City, Mirpur, Dhaka',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [Raken1, Raken2, Raken3, Raken4, Raken5, Raken6]
  },
  {
    title: 'Nasir Jute Industries Ltd.',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [NasirJ1, NasirJ2, NasirJ3, NasirJ4, NasirJ5, NasirJ6, NasirJ7, NasirJ8]
  },
  {
    title: 'Narayanganj silo – Road & Drain',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [projectImg2, projectImg1, projectImg3, projectImg4, projectImg5, projectImg6, projectImg7]
  },
  {
    title: 'Comilla University Project (Male Hall-02)',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [projectImg14, projectImg15, projectImg16, projectImg17, projectImg18, projectImg19, projectImg20]
  },
  {
    title: 'Road work for Nasir Quality Glass Ind. Ltd.',
    description: 'Large-scale residential project ensuring modern urban living.',
    images: [projectImg30, projectImg31, projectImg32]
  },
  {
    title: 'FG Warehouse – AKIj Feed Mills ',
    description: 'Prestigious embassy complex construction delivering excellence.',
    images: [projectImg21, projectImg22, projectImg23, projectImg24, projectImg25, projectImg26]
  },
];

const workOrderDocuments = [
  { title: 'Work Order 001', url: '/pdfs/TitasDevTech_Profile.pdf' },
  { title: 'Work Order 002', url: '/pdfs/workorder2.pdf' },
  { title: 'Work Order 003', url: '/pdfs/workorder3.pdf' },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null);

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
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{doc.title}</span>
                  <div>
                    <button 
                      className="btn btn-secondary me-2" 
                      onClick={() => setSelectedPDF(doc.url)}
                    >
                      Preview PDF
                    </button>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Download PDF
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PDF Preview Modal */}
        {selectedPDF && (
          <div
            className="modal show d-block bg-dark bg-opacity-75"
            tabIndex="-1"
            onClick={() => setSelectedPDF(null)}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">PDF Preview</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedPDF(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <PDFViewer fileUrl={selectedPDF} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Images Modal */}
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