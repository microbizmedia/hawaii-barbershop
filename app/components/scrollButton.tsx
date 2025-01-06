'use client';

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Update scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
//   flex items-center justify-center shadow-lg cursor-pointer
// borderImage: `linear-gradient(to right,  #91765a ${scrollPercentage}%, transparent ${scrollPercentage}%) 1`,
  return (
    <div
      onClick={scrollToTop}
      className=" circle fixed bottom-4 right-4 w-24 h-24 rounded-full 
       
      "
   
           style={{
            
                // border:'2px solid #91765a',
               
           }}
    >
      <span className="text-2xl text-gray-700 font-bold"></span>
    </div>
  );
};

export default ScrollToTop;
