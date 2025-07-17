import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

import cover1 from '../../assets/img/back.jpg';
import cover2 from '../../assets/img/back2.jpg';
import cover3 from '../../assets/img/back3.jpg';

import buildingIcon from '../../assets/img/icon.png'; // Example icons
import roadIcon from '../../assets/img/icon1.png';
import powerIcon from '../../assets/img/icon2.png';

const services = [
  {
    title: 'Residential & Commercial Buildings',
    desc: 'Design and construction of modern, energy-efficient buildings.',
    icon: buildingIcon,
  },
  {
    title: 'Roads & Highways',
    desc: 'Planning and execution of durable transportation infrastructure.',
    icon: roadIcon,
  },
  {
    title: 'Power Plants & Hydraulic Structures',
    desc: 'Specialized services in high-capacity energy and water systems.',
    icon: powerIcon,
  },
];

const Services = () => {
  const covers = [cover1, cover2, cover3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % covers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Top Rotating Image Banner */}
        <div className="cover-slider">
          {covers.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`cover-image ${index === current ? 'active' : ''}`}
              alt={`Cover ${index + 1}`}
            />
          ))}
        </div>

        {/* Services List */}
        <section className="services-section">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            {services.map((srv, i) => (
              <div className="service-card" key={i}>
                <img src={srv.icon} alt={srv.title} className="service-icon" />
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;