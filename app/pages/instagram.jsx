
const Instagram = () => {
 
  return (
   <div id="instagram"
   className='relative min-h-[60vh] w-full bg-[url("./images/Segment_02.jpg")] bg-cover bg-center'>
     <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black" />
     <div className="relative min-h-[60vh] flex flex-col justify-center items-center">
     <img className=""
            src='./images/Favicon_01.svg' 
            alt="Instagram icon"
            height={170}
            width={170}
             />
             <h2>Jetzt auf Instagram entdecken</h2>
             </div>
             
   </div>
  );
};

export default Instagram;
