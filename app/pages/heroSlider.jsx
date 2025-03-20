"use client"
import { useState } from "react";

const slides = [
  {
    image: "./images/barber-in-elegant-outfit-shaving-man-432KB.jpg",
    message: "Ihr Haar in besten Händen",
  },
  {
    image: "./images/interior-of-a-retro-style-barber.jpg",
    message: "Styling für jeden Anlass",
  },
  {
    image: "./images/photo-of-a-glass-of-whiskey.jpg",
    message: "Ihren Termin noch heute",
  }
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-no-repeat bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black z-0" />
      {/* Left Arrow */}
      <button 
        className="absolute z-10  md:left-5 left-[10px] top-1/2 transform -translate-y-1/2  text-white  py-14 px-6 rounded-full w-16 h-16 text-5xl"
        onClick={prevSlide}
      >
        <span className="absolute w-10 h-[2px] bg-[#91765a]  transform -translate-x-1/2 -translate-y-1/2 -rotate-[55deg] top-[39px] " ></span>
        <span className="absolute w-10 h-[2px] bg-[#91765a]  transform -translate-x-1/2 -translate-y-1/2 rotate-[55deg] bottom-[39px] " ></span>
      </button>

      {/* Right Arrow */}
      <button 
        className="absolute z-10  right-[10px] md:right-5 top-1/2 transform -translate-y-1/2  text-white py-14 px-6 rounded-full text-5xl"
        onClick={nextSlide}
      >
        {/* &#10095; Right Arrow Symbol */}
 
        {/* <span className="absolute w-6 h-6 bg-blue-500 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></span> */}
        <span className="absolute w-10 h-[2px] bg-[#91765a]  transform -translate-x-1/2 -translate-y-1/2 rotate-[55deg] top-[39px] " ></span>
        <span className="absolute w-10 h-[2px] bg-[#91765a]  transform -translate-x-1/2 -translate-y-1/2 -rotate-[55deg] bottom-[39px] " ></span>
      </button>

      {/* Content */}
      <div className="global-container flex justify-center h-screen w-full items-end  pb-[10vh] md:pt-[40vh]">
        <div className="text-white ">
        <div className="relative inset-0 flex justify-center items-center">
        <button className="relative z-0 bg-[#91765a] text-white text-xl py-3 md:px-20 my-4 w-full md:w-auto  hover:bg-[#7a5e47] transition">
            TERMIN BUCHEN
          </button>
          </div>
          <h1 className="relative font-bold pb-3 z-0 leading-[45px]">{slides[currentIndex].message}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
