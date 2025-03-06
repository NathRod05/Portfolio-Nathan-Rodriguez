import profil from "../../assets/nathan-rodriguez.jpg";
import "./about.css";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-me">
        <h1>À propos</h1>
      </div>
      <div className="description-container">
        <p className="description">
          Développeur web avec des compétences en React, Vite, Redux,
          JavaScript, HTML et CSS, je me spécialise dans le développement
          frontend. <br />
          Mon parcours, atypique, m’a permis d'adopter' des perspectives
          uniques, me permettant de développer une approche originale face aux
          problématiques techniques.
          <br /> Je m&apos;efforce d’enrichir constamment mes connaissances et
          de créer des applications efficaces et bien conçues.
        </p>
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
