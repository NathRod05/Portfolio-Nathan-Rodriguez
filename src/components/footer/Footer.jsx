import "./footer.css";

function Footer({ onOpen }) {
  return (
    <footer className="footer">
      <div className="contenaire-left">
        <p className="quote">
          Seule la créativité révèle <br />
          une perfection où l&apos;âme <br />
          trouve sa liberté.
        </p>
      </div>
      <div className="container-centre">
        <div>
          <a
            href="https://www.facebook.com/Natou05/"
            target="blank"
            aria-label="Voir mon profil Facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rodriguez-nathan"
            target="blank"
            aria-label="Voir mon profil Linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/NathRod05"
            target="blank"
            aria-label="Voir mon profil GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p>Designe by Nathan Rodriguez</p>
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
        <a href="#" className="btn-contact-footer" onClick={onOpen}>
          Contactez-moi
        </a>
      </div>
    </footer>
  );
}

export default Footer;
