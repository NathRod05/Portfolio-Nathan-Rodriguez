import logo from "../../assets/logo-nathan-rodriguez.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contenaire left">
        <p className="quote">
          Seule la créativité révèle <br />
          une perfection où l&apos;âme <br />
          trouve sa liberté.
        </p>
      </div>
      {/* <img className="logo-footer" src={logo} alt="logo" /> */}
      <div className="container-centre">
        <div>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/rodriguez-nathan">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/NathRod05">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        s<p>Designe by Nathan Rodriguez</p>
      </div>
      <div className="container-right">
        <p>
          <i className="fa-solid fa-person"></i> Nathan Rodriguez
        </p>
        <p>
          <i className="fa-regular fa-envelope"></i> rodrigue-nathan@outlook.com
        </p>
        <p>
          <i className="fa-solid fa-mobile-screen-button"></i> 06 69 04 97 87
        </p>
        <a href="#" className="btn-contact-footer">
          Contactez-moi
        </a>
      </div>
    </footer>
  );
}

export default Footer;
