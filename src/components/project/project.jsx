import Card from "../card/Card";
import "./project.css";
import data from "../../../data.json";
import { useTranslation } from "react-i18next";

function Project() {
  const { t, i18n } = useTranslation();
  return (
    <div className="project-container" id="project">
      <h1>{t("project")}</h1>
      <div className="cards-container">
        {data.website.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default Project;
