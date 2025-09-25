import Image from "next/image";
const Reviews = () => {
    return (
        <div
            id="video"
            className=' relative overflow-hidden m-auto w-full '
        >
            <div className=" flex  flex-col-reverse lg:flex-row justify-center lg:gap-14">
                <Image className="  lg:mt-24 w-full md:max-w-[480px] m-auto lg:m-0 px-[1.5rem]"
                    src='./Segment_05.jpg'
                    alt="google-reviews"
                    loading="lazy"
                    height={300}
                    width={450}
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className=' w-full md:max-w-[480px]  object-cover object-center  m-auto lg:m-0'
                >
                    <source src='./Segment_5_1.2.mp4' type="video/mp4">
                    </source>
                    Your browser does not support the video tag.
                </video>
            </div>




        </div>
    );
};

export default Reviews;
