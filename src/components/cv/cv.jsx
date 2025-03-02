import "./cv.css";
import imgCv from "../../assets/CV-Portfolio.jpg";
import cvPdf from "../../assets/CV-Portfolio.pdf";

function CV() {
  return (
    <div className="cv-container" id="cv">
      <h1>CV</h1>
      <div className="image-container">
        <img className="image-cv" src={imgCv} alt="CV de Nathan Rodriguez" />
      </div>
      <div>
        <a href={cvPdf} download="Mon_CV.pdf" target="blank">
          <button className="btn-download">Télécharger mon CV</button>
        </a>
      </div>
    </div>
  );
}

export default CV;
