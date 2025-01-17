
const Reviews = () => {

    return (
        <div
            id="video"
            className=' relative overflow-hidden m-auto w-full '
        >
            <div className=" flex  flex-col-reverse lg:flex-row justify-center lg:gap-14">
            <img className="  lg:mt-24 w-full md:max-w-[480px] m-auto lg:m-0"
                src='./images/Segment_05.png'
                alt="google-reviews"

                width={450}
            />
            <video  autoPlay muted loop playsInline
                className=' w-full md:max-w-[480px]  object-cover object-center  m-auto lg:m-0'
            >
                <source src='./images/Segment_5_1.2.mp4' type="video/mp4">
                </source>
                Your browser does not support the video tag.
            </video>
            </div>
            



        </div>
    );
};

export default Reviews;
