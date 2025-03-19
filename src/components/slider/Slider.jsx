import { useState, useEffect } from "react";
import sliderData from "../../../data.json";
import "./slider.css";

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nextCard = () => {
      setIndex((prevIndex) =>
        prevIndex < sliderData.slider.length - 1 ? prevIndex + 1 : 0
      );
    };
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider-container">
      <div className="slider">
        <img
          className="img"
          src={sliderData.slider[index].image}
          alt={`Slide ${index + 1}`}
        />
      </div>
      <div className="dots">
        {sliderData.slider.map((_, radioIdx) => (
          <input
            key={radioIdx}
            type="radio"
            name="radio-button"
            checked={index === radioIdx}
            readOnly
            aria-label={`Slide ${radioIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
