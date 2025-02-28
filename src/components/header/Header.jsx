import "./header.css";
import PropTypes from "prop-types";
import logo from "../../assets/logo-nathan-rodriguez.png";

function Header({ onOpen }) {
  return (
    <header className="header">
      <img className="logo-header" src={logo} alt="logo" />
      <nav className="navigation">
        <a href="">Home</a>
        <a href="">À propos</a>
        <a href="">Compétances</a>
        <a href="">Projets</a>
      </nav>
      <a href="#contact" className="btn-contact" onClick={onOpen}>
        Contactez-moi
      </a>
    </header>
  );
}

Header.propTypes = {
  onOpen: PropTypes.func,
};

export default Header;
