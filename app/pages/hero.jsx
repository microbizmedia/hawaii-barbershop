"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const slides = [
  {
    image: "./assets/images/barber-in-elegant-outfit-shaving-man-432KB.jpg",
    message: "Ihr Haar in besten Händen",
  }
  ,
  {
    image: "./assets/images/photo-of-professional-hairdresser-433KB.jpg",
    message: "Styling für jeden Anlass",
  }
  ,
  {
    image: "./assets/images/barber-using-hairdryer-with-brush-434KB.jpg",
    message: "Ihren Termin noch heute",
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showPrevImage = () => {
    setCurrentIndex(index => {
      if (index === 0) return slides.length - 1
      return index - 1
    })
  }
  const showNextImage = () => {
    setCurrentIndex(index => {
      if (index === slides.length - 1) return 0
      return index + 1
    })
  }
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full flex overflow-hidden  ">
        {slides.map(img => {
          return (
            <img
              className="w-full h-full object-cover block flex-shrink-0 flex-grow-0"
              key={img.image}
              src={img.image}
              style={{ translate: `${-100 * currentIndex}%`, transition: "translate 300ms ease-in-out" }}
            />
          )
        })}
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black z-0" />
      {/* Left Arrow */}
      <button
        className=" absolute z-10  md:left-0 left-[-35px] top-1/2 transform -translate-y-1/2 text-white 
       px-20 w-16 h-16 text-5xl h-[10%] rotate-[180deg] 
         transition-transform duration-200  active:scale-y-90"
        onClick={showPrevImage}
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <polyline points="10,10 50,50 10,90"
            stroke="#91765a" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        className=" absolute z-10  md:right-0 right-[-35px] top-1/2 transform -translate-y-1/2 text-white
       px-20 w-16 h-16 text-5xl h-[10%] 
         transition-transform duration-200  active:scale-y-90 "
        onClick={showNextImage}
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <polyline points="10,10 50,50 10,90"
            stroke="#91765a" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {/* Content */}
      <div className="global-container flex justify-center absolute inset-0 items-end  pb-[14vh] md:pt-[40vh]">
        <div className="text-white ">
          <div className="relative inset-0 flex justify-center items-center">
            <button className="relative z-0 bg-[#91765a] text-white text-xl py-3 md:px-20 mb-4 md:mb-10 w-full md:w-auto  hover:bg-[#7a5e47] transition">
              TERMIN BUCHEN
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex} // Ensures animation runs when text changes
              initial={{ opacity: 0, y: 20 }} // Start slightly lower and transparent
              animate={{ opacity: 1, y: 0 }} // Fade in and move up
              exit={{ opacity: 0, y: -20 }} // Move up and fade out
              transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
              className="relative font-bold pb-3 z-0 leading-[45px]"
            >
              {slides[currentIndex].message}
            </motion.h1>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Hero;
