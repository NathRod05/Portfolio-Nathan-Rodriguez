import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Form from "../components/Modal-form/form";
import "./home.css";
import About from "../components/about/About";
import Skill from "../components/skill/Skill";
import Slider from "../components/slider/Slider";
import CV from "../components/cv/cv";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <Slider />
      <About />
      <Skill />
      <CV />
      <Footer onOpen={handleOpenModal} />
    </div>
  );
}

export default Home;
