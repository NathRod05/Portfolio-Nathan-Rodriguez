import { useState, useEffect } from "react";
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.png";
import slider5 from "../../assets/slider-5.jpg";
import "./slider.css";

function Slider() {
  const slider = [slider1, slider2, slider3, slider4, slider5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nextCard = () => {
      setIndex((prevIndex) =>
        prevIndex < slider.length - 1 ? prevIndex + 1 : 0
      );
    };
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, [slider.length]);
  return (
    <div className="slider-container">
      <div className="slider">
        <img className="img" src={slider[index]} alt="#" />
      </div>
      <div className="dots">
        {slider.map((_, radioIdx) => (
          <input
            key={radioIdx}
            type="radio"
            name="radio-button"
            checked={index === radioIdx}
            readOnly
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
