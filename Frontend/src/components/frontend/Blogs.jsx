import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import cover1 from '../../assets/img/about20.jpg';
import cover2 from '../../assets/img/about7.jpg';
import cover3 from '../../assets/img/about10.jpg';

const Blogs = () => {
   const covers = [cover1, cover2, cover3];
      const [current, setCurrent] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent(prev => (prev + 1) % covers.length);
        }, 3000);
  
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




      </main>
      <Footer/>
    </>
  )
}

export default Blogs