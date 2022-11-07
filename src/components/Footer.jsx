import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer" id="about">
      <div className="social">
        <FaFacebook  size="40px" color="blue" className="icon" />
        <FaInstagram size="40px" color="orange" className="icon" />
        <FaTwitter size="40px" color="#3d85c6" className="icon" />
        <FaPinterest size="40px"  color="red" className="icon" />
      </div>
      <div className="social-container">
        <div>
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div>
          <h3>Legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div>
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
