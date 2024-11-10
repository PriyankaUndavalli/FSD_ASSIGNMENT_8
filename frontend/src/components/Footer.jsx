import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-angle-right"></i> Home</a>
          <a href="#services"><i className="fas fa-angle-right"></i> Services</a>
          <a href="#about"><i className="fas fa-angle-right"></i> About</a>
          <a href="#contact"><i className="fas fa-angle-right"></i> Contact</a>
        </div>
        <div className="box">
          <h3>Branches</h3>
          <a href="#"><i className="fas fa-angle-right"></i> Mumbai</a>
          <a href="#services"><i className="fas fa-angle-right"></i> Hyderabad</a>
          <a href="#about"><i className="fas fa-angle-right"></i> Chennai</a>
          <a href="#contact"><i className="fas fa-angle-right"></i> Vijayawada</a>
        </div>
        <div className="box">
          <h3>Contact</h3>
          <a href="#home"><i className="fas fa-angle-right"></i> +91 9856112588</a>
          <a href="#services"><i className="fas fa-angle-right"></i> vivah@gmail.com</a>
          <a href="#about"><i className="fas fa-angle-right"></i> Vijayawada,India</a>
          <a href="#contact"><i className="fas fa-angle-right"></i> kalyanamasthu@gmail.com</a>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-angle-right"></i> Facebook</a>
          <a href="#services"><i className="fas fa-angle-right"></i> Twitter</a>
          <a href="#about"><i className="fas fa-angle-right"></i> Instagram</a>
          <a href="#contact"><i className="fas fa-angle-right"></i> Youtube</a>
        </div>
      </div>
      <div className="credit">
        Created by <span>vivah team</span> | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
