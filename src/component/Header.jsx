import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        SUJEET<span>DANDOTIYA</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar bar1 active" : "bar bar1"}></span>
        <span className={menuOpen ? "bar bar2 active" : "bar bar2"}></span>
        <span className={menuOpen ? "bar bar3 active" : "bar bar3"}></span>
      </div>

      <nav className={menuOpen ? "navbar navbar-active" : "navbar"}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/courses" onClick={closeMenu}>
          Courses
        </Link>
        <Link to="/testimonials" onClick={closeMenu}>
          Testimonials
        </Link>
        <Link to="/contact" className="contact-btn" onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
