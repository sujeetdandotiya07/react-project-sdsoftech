import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2 className="footer-logo">
            SUJEET<span>DNDOTIYA</span>
          </h2>
          <p>
            Learn Skills. Build Projects. Get Job Ready. We help students
            develop industry-ready technical skills through practical learning.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Our Courses</h3>
          <ul>
            <li>
              <Link to="/courses">MERN Stack</Link>
            </li>
            <li>
              <Link to="/courses">Python</Link>
            </li>
            <li>
              <Link to="/courses">Data Analytics</Link>
            </li>
            <li>
              <Link to="/courses">Web Design</Link>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Gwalior, Madhya Pradesh</p>
          <p>Email: info@sdsoftech.com</p>
          <p>Website: www.sdsoftech.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 sdsoftech. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
