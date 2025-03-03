import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Form from "../components/Modal-form/Form";
import About from "../components/about/About";
import Skill from "../components/skill/Skill";
import Slider from "../components/slider/Slider";
import CV from "../components/cv/cv";
import Project from "../components/project/project";
import "./home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.1"
      );
  };

  return (
    <div id="home">
      <Header onOpen={handleOpenModal} />
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <Form onClose={handleCloseModal} />
          </div>
        </div>
      )}
      <main>
        <Slider />
        <About />
        <Skill />
        <Project />
        <CV />
      </main>
      <Footer onOpen={handleOpenModal} />
    </div>
  );
}

export default Home;
