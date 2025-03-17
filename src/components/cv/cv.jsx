import "./cv.css";
import imgCv from "../../assets/cv-portfolio-1.jpg";
import cvPdf from "../../assets/cv-portfolio-1.pdf";
import { useTranslation } from "react-i18next";

function CV() {
  const { t, i18n } = useTranslation();

  return (
    <div className="cv-container" id="cv">
      <h1>CV</h1>
      <div className="image-container">
        <img className="image-cv" src={imgCv} alt="CV de Nathan Rodriguez" />
      </div>
      <div>
        <a href={cvPdf} download="Mon_CV.pdf" target="blank">
          <button className="btn-download">{t("cv-pdf")}</button>
        </a>
      </div>
    </div>
  );
}

export default CV;
