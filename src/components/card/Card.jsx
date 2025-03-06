import "./card.css";

function Card({ data }) {
  return (
    <div className="card" id={data.id}>
      <a href={data.link} target="_blank">
        <img className="image-card" src={data.image} alt={data.attribut} />
        <div className="text">
          <h2>{data.titre}</h2>
          <p>{data.description}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
