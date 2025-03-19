"use client"
import { useState } from "react";

const slides = [
  {
    image: "./images/barber-in-elegant-outfit-shaving-man.jpg",
    message: "Ihr Haar in besten Händen",
  },
  {
    image: "./images/interior-of-a-retro-style-barber.jpg",
    message: "Styling für jeden Anlass",
  },
  {
    image: "./images/photo-of-a-glass-of-whiskey.jpg",
    message: "Buchen Sie Ihren Termin noch heute",
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
        className="absolute z-10  left-5 top-1/2 transform -translate-y-1/2  text-white p-8 rounded-full w-16 h-16"
        onClick={prevSlide}
      >
        &#10094; {/* Left Arrow Symbol */}
      </button>

      {/* Right Arrow */}
      <button 
        className="absolute z-10  right-5 top-1/2 transform -translate-y-1/2  text-white p-8 rounded-full text-4xl"
        onClick={nextSlide}
      >
        &#10095; {/* Right Arrow Symbol */}
      </button>

      {/* Content */}
      <div className="global-container flex justify-start h-screen w-full items-end md:items-center pb-[10vh] md:pt-[40vh]">
        <div className="text-white">
          <h1 className="relative font-bold pb-3 z-0">{slides[currentIndex].message}</h1>
          <button className="relative z-0 mt-4 bg-[#91765a] text-white px-6 py-3 rounded-md hover:bg-[#7a5e47] transition">
            Termin Buchen
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
