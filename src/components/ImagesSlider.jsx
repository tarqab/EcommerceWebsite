import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function ImagesSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${slides[currentIndex].img})`,
    justifyContent: "center",
    alignItems: "center",
  };
  const sliderStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
  };
  console.log("first", currentIndex);
  function nextImage() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  function prevImage() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  return (
    <div style={sliderStyle}>
      <span className="left-arrow" onClick={prevImage}>
        <AiOutlineArrowLeft size="60px" />
      </span>
      <div style={slideStyle}></div>
      <span className="right-arrow" onClick={nextImage}>
        <AiOutlineArrowRight size="60px" />
      </span>
    </div>
  );
}
// if (currentIndex >= 0 && currentIndex <= 1) {
//   setCurrentIndex((count) => count + 1);
//   console.log("second", currentIndex);
// } else setCurrentIndex(0);
