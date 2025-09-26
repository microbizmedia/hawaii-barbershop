"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <div
            id="about"
            className='relative overflow-hidden global-container m-auto w-full text-black pb-10 md:pb-16 pt-10 lg:pt-36 flex items-center flex-wrap md:flex-nowrap flex-row gap-4 '
        >
            <div className=' flex flex-col justify-center '>
                <h2>HAWAII Barbershop</h2>
                <p className="pt-3 md:pr-4">Bei uns steht die Zufriedenheit unserer Kunden an erser Stele. Wir sind stolz
                    darauf, einen hochwertigen Service anzubieten, der schnell und zuverlässig ist.
                    Unser Team legt großen Wert darauf, dass jedes Detail stimmt, dammit Sie sich Bei
                    uns rundum wohlfühlen können. Wir kümmern uns um Ihre Wünsche und setzen
                    alles daran, Ihre Erwartungen zu übertreffen, Ihre Zeit ist uns genauso wichtig wie
                    Ihre Zufriedenheit, deshalb garantieren wir pünktliche und effiziente
                    Dienstleistungen.<br />
                    Vertrauen Sie uns - wir sind für Sie da, um ihnen den besten Service zu bieten!

                </p>
           
            </div>
            <div className=" flex flex-row gap-6 justify-center m-auto">
                <div className='relative  md:top-[100px]  lg:top-[20px]
             w-full h-auto object-cover  md:w-[160px] md:h-[240px] lg:w-[250px]  lg:h-[340px]'
                    data-aos="fade-up"
                >
                    <Image

                        src='./Segment_01_1.1.jpg'
                        alt="Barber cutting hair"
                        loading='lazy'
                        fill
                    />
                </div>
                <div className='relative top-[0] md:top-[0px] lg:top-[-80px]
             w-full h-auto object-cover md:w-[160px] md:h-[240px] lg:w-[250px]  lg:h-[340px]
               '>
                    <Image
                        data-aos="fade-up"
                          
                        data-aos-delay="200"
                        src='./Segment_01_1.2.jpg'
                        alt="Barber cutting hair"
                        loading='lazy'
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
