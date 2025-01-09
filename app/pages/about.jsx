const About = () => {
    return (
        <div
            id="about"
            className='relative max-w-[1200px] m-auto w-full text-black mb-20 mt-44 flex'
        >
            <div className='max-w-[54%] flex flex-col justify-center '>
            <h2>HAWAII Barbershop</h2>
            <p className="pt-6 pr-12">Bei uns steht die Zufriedenheit unserer Kunden an erser Stele. Wir sind stolz
                darauf, einen hochwertigen Service anzubieten, der schnell und zuverlässig ist.
                Unser Team legt großen Wert darauf, dass jedes Detail stimmt, dammit Sie sich Bei
                uns rundum wohlfühlen können. Wir kümmern uns um Ihre Wünsche und setzen
                alles daran, Ihre Erwartungen zu übertreffen, Ihre Zeit ist uns genauso wichtig wie
                 Ihre Zufriedenheit, deshalb garantieren wir pünktliche und effiziente
                 Dienstleistungen,
                 Vertrauen Sie uns - wir sind für Sie da, um ihnen den besten Service zu bieten!

            </p>
            </div>
            <img 
            src='./images/Segment_01_1.1.jpg' 
            alt="Barber cutting hair"
            height={350}
            width={300}
             />
              <img className='absolute top-[-100px] right-[-80px]'
            src='./images/Segment_01_1.2.jpg' 
            alt="Barber cutting hair"
            height={400}
            width={300}
             />
        </div>
    );
};

export default About;
