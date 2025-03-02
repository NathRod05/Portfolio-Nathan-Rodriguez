import Card from "../card/Card";
import "./project.css";
import data from "../../../data.json";

function Project() {
  return (
    <div className="project-container" id="project">
      <h1>À propos</h1>
      <div className="cards-container">
        {data.website.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default Project;
