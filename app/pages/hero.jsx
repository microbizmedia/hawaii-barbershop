
const Hero = () => {

    return (
        <div
            id="hero-image"
            className='relative min-h-screen w-full bg-cover bg-no-repeat bg-[center_right_-510px] md:bg-center'
            style={{ backgroundImage: "url('./images/Hero_02.png')" }} >
        
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black" /> */}
            <div className="global-container flex justify-start  h-screen w-full items-end md:items-center pb-[10vh] md:pt-[40vh]">  
                    <h1 className=" font-bold pb-3 ">Ihr Haar in<br />besten Händen</h1>
            </div>
        </div>
    );
};

export default Hero;
