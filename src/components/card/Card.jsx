import "./card.css";
import { useTranslation } from "react-i18next";

function Card({ data, icons }) {
  return (
    <div className="card" id={data.id}>
      <a href={data.link} target="_blank">
        <img className="image-card" src={data.image} alt={data.attribut} />
        <div className="text">
          <h2>{data.titre}</h2>
          <p>{data.description}</p>
          <div className="skill-card">
            {data.html && <p>{data.html}</p>}
            {data.css && <p>{data.css}</p>}
            {data.sass && <p>{data.sass}</p>}
            {data.react && <p>{data.react}</p>}
            {data.javascript && <p>{data.javascript}</p>}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
