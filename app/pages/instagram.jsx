const Instagram = () => {
  const instagramMessage = `Jetzt auf Instagram entdecken`
  return (
    <div id="instagram"
      className='relative h-[50vh] w-full  bg-cover bg-[center_right_-80px] md:bg-center'
      style={{ 
        // backgroundPosition: " -20px ", // Adjust offset
        backgroundImage: "url('./images/Hero_01.jpg')" 
        }} >



      {/* <h2 className="relative z-20 pt-[20vh] global-container">{instagramMessage}</h2> */}
      <h2 className="relative z-20 pt-[20vh] global-container">
        <span className="block sm:inline">Jetzt auf </span>{" "}
        <span className="block sm:inline">Instagram</span>
        
        <span className="block">entdecken</span>
      </h2>





      <div className="absolute  z-10 inset-0 bg-gradient-radial from-transparent via-black/70 to-black" />

    </div>
  );
};

export default Instagram;
