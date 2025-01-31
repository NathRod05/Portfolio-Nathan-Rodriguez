import "./header.css";
import logo from "../../assets/logo-nathan-rodriguez.png";

function Header() {
  return (
    <header className="header">
      <img className="logo-header" src={logo} alt="logo" />
      <nav className="navigation">
        <a href="">Home</a>
        <a href="">À propos</a>
        <a href="">Compétances</a>
        <a href="">Projets</a>
      </nav>
      <a href="" className="btn-contact">
        Contactez-moi
      </a>
    </header>
  );
}

export default Header;
