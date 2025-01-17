
const Directions = () => {

    return (
        <div
            id="directions"
            className='relative  m-auto w-full bg-[#000] overflow-hidden'
        >
            <div className="global-container m-auto flex flex-col sm:flex-row  items-center gap-3 py-8 md:py-20">
                <div className="w-full">
                    <p>Keine Tramine notwendig!</p>
                    <h2>Oder Komm vorbei!</h2>
                    <p className="text-2xl pt-4 pb-2">Hawaii Barbershop</p>
                    <p className="text-xl text-white/60">Bahnhofstraße 44,<br />87435 Kempten (Allgäu)</p>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&origin=current+location&destination=Bahnhofstraße+44,+87435+Kempten+(Allgäu),+Germany"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><button className="bg-[#91765a] text-xl py-3 lg:px-20 mt-8 w-full md:w-auto">DIRECTIONS</button></a>
                </div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d10736.463639773521!2d10.302635146607829!3d47.72099942283489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d47.7253848!2d10.3143174!4m5!1s0x479c798218270afb%3A0x79a0c2a7342535c3!2sHawaii%20barbershop!3m2!1d47.718008!2d10.3146568!5e0!3m2!1sen!2sde!4v1735793485944!5m2!1sen!2sde"
               height="350"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                 className="w-full md:w-[1000px]"
                 ></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d10735.608128899838!2d10.3025457!3d47.7251505!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x479c798218270afb%3A0x79a0c2a7342535c3!2sHawaii%20barbershop%20Reviews!3m2!1d47.718008!2d10.3146568!5e0!3m2!1sen!2sde!4v1737147529099!5m2!1sen!2sde"
                    height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="w-full md:w-[1000px]"></iframe>

            </div>



        </div>
    );
};

export default Directions;
