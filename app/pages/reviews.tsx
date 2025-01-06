
const Reviews = () => {

    return (
        <div
            id="video"
            className='global-container relative  m-auto w-full '
        >
            <div className="flex justify-between">
            <img className="mt-24"
                src='/images/Segment_05.png'
                alt="google-reviews"

                width={450}
            />
            <video width='480'  autoPlay muted loop playsInline
                className='   object-cover object-center   '
            >
                <source src='/images/Segment_5_1.2.mp4' type="video/mp4">
                </source>
                Your browser does not support the video tag.
            </video>
            </div>
            



        </div>
    );
};

export default Reviews;
