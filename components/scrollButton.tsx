'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const router = useRouter();

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

    // Smooth scroll, then change URL after animation completes
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Calculate percentage for strokeDashoffset (44 - 100)
    const calculatePercentage = () => {
        return 100 + ((scrollPercentage / 100) * (44 - 100));
    };

    return (
        <div className="size-28 fixed bottom-[-10px] right-[-10px]">
            <svg className="size-full -rotate-90 cursor-pointer" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="9" fill="none" className="stroke-current text-[#91765a]" strokeWidth="0.7" strokeDasharray="100" strokeDashoffset={calculatePercentage()} strokeLinecap="round"></circle>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <p onClick={scrollToTop} className="rotate-[-90deg] text-3xl text-[#91765a] p-6 mr-1 cursor-pointer">
                    &#10095;
                </p>
            </div>
        </div>
    );
};

export default ScrollToTop;
