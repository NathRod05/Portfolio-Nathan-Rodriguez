import "./header.css";
import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo-nathan-rodriguez.png";

function Header({ onOpen }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <header className="header">
      <img className="logo-header" src={logo} alt="logo" />
      <nav className={`navigation ${open ? "open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" onClick={handleLinkClick}>
          À propos
        </a>
        <a href="#skill" onClick={handleLinkClick}>
          Compétances
        </a>
        <a href="#project" onClick={handleLinkClick}>
          Projets
        </a>
        <a href="#cv" onClick={handleLinkClick}>
          CV
        </a>
        <a
          href="#contact"
          className="btn-contact-mobile"
          onClick={() => {
            onOpen();
            handleLinkClick();
          }}
        >
          Contactez-moi
        </a>
      </nav>
      <a href="#contact" className="btn-contact" onClick={onOpen}>
        Contactez-moi
      </a>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;
