import "./header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo-nathan-rodriguez.png";

function Header({ onOpen }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openTranslation, setOpenTranslation] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleLanguageMenu = () => {
    setOpenTranslation(!openTranslation);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpenTranslation(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo-icon" src={logo} alt="logo" />
        <div className="logo">
          <h1> {"{<\\>athan.R}..."}</h1>
          <p className="under-logo">Développement Web</p>
        </div>
      </div>
      <nav className={`navigation ${open ? "open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>
          {t("home")}
        </a>
        <a href="#about" onClick={handleLinkClick}>
          {t("about")}
        </a>
        <a href="#skill" onClick={handleLinkClick}>
          {t("skill")}
        </a>
        <a href="#project" onClick={handleLinkClick}>
          {t("project")}
        </a>
        <a href="#cv" onClick={handleLinkClick}>
          CV
        </a>
        <button className="hamburger-translation" onClick={toggleLanguageMenu}>
          <p className="selector">{t("language")}</p>
          {openTranslation && (
            <div>
              <button onClick={() => handleLanguageChange("en")}>
                English
              </button>
              <button onClick={() => handleLanguageChange("fr")}>
                Français
              </button>
            </div>
          )}
        </button>
        <a
          href="#contact"
          className="btn-contact-mobile"
          onClick={() => {
            onOpen();
            handleLinkClick();
          }}
        >
          {t("contact")}
        </a>
      </nav>
      <a href="#contact" className="btn-contact" onClick={onOpen}>
        {t("contact")}
      </a>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;
