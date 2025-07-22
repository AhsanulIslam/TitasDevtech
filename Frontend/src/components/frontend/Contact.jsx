import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import cover1 from '../../assets/img/about18.jpg';
import cover2 from '../../assets/img/about21.jpg';
import cover3 from '../../assets/img/about13.jpg';

const Contact = () => {
  const covers = [cover1, cover2, cover3];
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % covers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_okl86yp',         // Replace with your EmailJS service ID
      'template_6e4vkfh',        // Replace with your EmailJS template ID
      templateParams,
      'hm6yQ3SW-jo2SvQG8'       // Replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Rotating Image Banner */}
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

        {/* Contact Section */}
        <section className="contact-section py-5 bg-light">
          <div className="container">
            <div className="row">
              {/* Contact Form */}
              <div className="col-md-7 mb-4">
                <h2 className="mb-4 text-primary">Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary px-4">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="col-md-5">
                <h2 className="mb-4 text-primary">Contact Information</h2>
                <p><strong>Address:</strong> Noor Tower, 9A (Lift 8), House: 29/31, Road: 01, Block: D, Sector: 2, Aftabnagar, Dhaka-1212</p>
                <p><strong>Phone:</strong> +880 1234567890</p>
                <p><strong>Email:</strong> titasjvdevtech@gmail.com</p>

                <div className="map-responsive">
                  <iframe
                    src="https://maps.google.com/maps?q=Aftabnagar%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="250"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map"
                  ></iframe>
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

export default Contact;