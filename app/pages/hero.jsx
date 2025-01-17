
const Hero = () => {

    return (
        <div
            id="hero-image"
            className='relative min-h-screen w-full bg-cover bg-no-repeat bg-[center_right_-450px] md:bg-center'
            style={{ backgroundImage: "url('./images/Hero_02.png')" }} >
        
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black" /> */}
            <div className="global-container relative top-[60vh] md:top-[50vh] flex justify-start ">
                {/* <div className="flex flex-col "> */}
                    <h1 className=" font-bold pb-3 ">Ihr Haar in<br />besten Händen</h1>
                    {/* <h3>Montag bis Sontag - 9:30 - 18:30 - Keine Terminvereinbarung nötig!</h3> */}
                {/* </div> */}

            </div>


        </div>
    );
};

export default Hero;
