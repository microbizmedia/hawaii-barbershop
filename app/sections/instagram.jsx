import Image from 'next/image';
const Instagram = () => {
  return (
    <div id="instagram"
      className='relative h-[50vh] md:bg-center flex justify-end items-end'
       >
        <Image src='./instagram-background.jpg' loading="lazy" alt='background image' fill
              className='
              absolute   w-full  h-full object-cover object-[-190px_center] md:object-center
              ' />
      <h2 className="relative z-20  global-container w-full pb-[1.5rem] md:pb-[10vh]">
        <span className="block sm:inline">Jetzt auf </span>{" "}
        <span className="block sm:inline">Instagram</span>
        <span className="block">@entdecken</span>
      </h2>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black" />
    </div>
  );
};

export default Instagram;
