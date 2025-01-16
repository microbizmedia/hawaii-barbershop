const About = () => {
    return (
        <div
            id="about"
            className='relative global-container m-auto w-full text-black mb-28 mt-44 flex items-center flex-wrap md:flex-nowrap flex-row gap-6 '
        >
            <div className=' flex flex-col justify-center '>
            <h2>HAWAII Barbershop</h2>
            <p className="pt-3 pr-4 font-medium">Bei uns steht die Zufriedenheit unserer Kunden an erser Stele. Wir sind stolz
                darauf, einen hochwertigen Service anzubieten, der schnell und zuverlässig ist.
                Unser Team legt großen Wert darauf, dass jedes Detail stimmt, dammit Sie sich Bei
                uns rundum wohlfühlen können. Wir kümmern uns um Ihre Wünsche und setzen
                alles daran, Ihre Erwartungen zu übertreffen, Ihre Zeit ist uns genauso wichtig wie
                 Ihre Zufriedenheit, deshalb garantieren wir pünktliche und effiziente
                 Dienstleistungen.<br />
                 Vertrauen Sie uns - wir sind für Sie da, um ihnen den besten Service zu bieten!

            </p>
            </div>
            <div className="relative">
            <img className=' relative top-[100px] md:top-[0] w-[250px] h-[340px] md:w-[160px] md:h-[240px] lg:w-[250px]  lg:h-[340px]'
            src='./images/Segment_01_1.1.jpg' 
            alt="Barber cutting hair"
             />
              <img className=' relative md:top-[-100px] w-[250px] h-[340px] lg:w-[250px]  lg:h-[340px] md:w-[160px] md:h-[240px]'
            src='./images/Segment_01_1.2.jpg' 
            alt="Barber cutting hair"       
             />
            </div>
            
        </div>
    );
};

export default About;
