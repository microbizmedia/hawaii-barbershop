"use client"
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import BookingFormButton from "../../components/booking-form"
const slides = [
    {
        image: "./barber-in-elegant-outfit-shaving-man-432KB.jpg",
        message: "Ihr Haar in besten Händen",
    }
    ,
    {
        image: "./professional-hairdresser-shaping-thick-beard.jpg",
        message: "Styling für jeden Anlass",
    }
    ,
    {
        image: "./professional-barber-spraying.jpg",
        message: "Ihren Termin noch heute",
    }
];

const Hero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navigation, setNavigation] = useState({});
      const [currentIndex, setCurrentIndex] = useState(0);

    // Set navigation once refs are ready
    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setNavigation({
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            });
        }
    }, []);

    return (
        <div className="relative">
            <Swiper modules={[Navigation]}
                navigation={navigation}
                onBeforeInit={(swiper) => {
                    // Connect refs once they're defined
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex); // updates current index (loop-safe)
                }}
                className="h-auto md:h-full"
                spaceBetween={0} slidesPerView={1} loop={true}
            >
                {slides.map((img, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image
                                src={img.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full object-cover h-screen"
                                priority
                                width={800}
                                height={600}
                            />
                        </SwiperSlide>
                    );
                })}

            </Swiper >
            {/* Left Arrow */}
            <button
                ref={prevRef}
                className=" absolute z-20  md:left-0 left-[-35px] top-1/2 transform -translate-y-1/2 text-white 
                 px-20 w-16 h-16 text-5xl h-[10%] rotate-[180deg]  transition-transform duration-200  active:scale-y-90" >
                <svg width="50" height="50" viewBox="0 0 100 100">
                    <polyline points="10,10 50,50 10,90"
                        stroke="#91765a" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
            </button>
            {/* Right Arrow */}
            <button
                ref={nextRef}
                className=" absolute z-20  md:right-0 right-[-35px] top-1/2 transform -translate-y-1/2 text-white
       px-20 w-16 h-16 text-5xl h-[10%] transition-transform duration-200  active:scale-y-90 " >
                <svg width="50" height="50" viewBox="0 0 100 100">
                    <polyline points="10,10 50,50 10,90"
                        stroke="#91765a" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
            </button>
            {/* Content */}
            <div className="global-container flex justify-center absolute inset-0 items-end  pb-[14vh] md:pt-[40vh] z-20 pointer-events-none">
                <div className="text-white ">
                    <div className="relative inset-0 flex justify-center items-center">

                        <BookingFormButton />

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

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black z-10 pointer-events-none" />
        </div>
    );
};

export default Hero;
