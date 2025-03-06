import profil from "../../assets/nathan-rodriguez.jpg";
import "./about.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className="about-container" id="about">
      <div className="about-me">
        <h1>{t("about")}</h1>
      </div>
      <div className="description-container">
        <p className="description">{t("about-me")}</p>
        <img
          className="profil-picture"
          src={profil}
          alt="Photo de profil de Nathan Rodriguez avec son chien regardant au dessus d'un muret la mer"
        />{" "}
      </div>
    </div>
  );
}

export default About;
