import "./footer.css";
import { useTranslation } from "react-i18next";
import textToHtml from "../../utilities";

function Footer({ onOpen }) {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="container-left">
        <p className="quote">{textToHtml(t("quote"))}</p>
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
        <p>Designed by Nathan Rodriguez</p>
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
          {t("contact")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
