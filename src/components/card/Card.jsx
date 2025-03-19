import "./card.css";
import { useTranslation } from "react-i18next";

function Card({ data, icons }) {
  return (
    <div className="card" id={data.id}>
      <a href={data.link} target="_blank">
        <img className="image-card" src={data.image} alt={data.alt} />
        <div className="text">
          <h2>{data.titre}</h2>
          <p>{data.description}</p>
          <div className="skill-card">
            {data.skills &&
              data.skills.map((skillObj, index) => (
                <p key={index}>{skillObj.skill}</p>
              ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
