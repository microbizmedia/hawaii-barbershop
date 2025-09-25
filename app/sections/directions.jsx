import Link from "next/link";
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
                    <Link
                        href="https://www.google.com/maps/dir/?api=1&origin=current+location&destination=Bahnhofstraße+44,+87435+Kempten+(Allgäu),+Germany"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><button className="btn-primary">DIRECTIONS</button></Link>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d10735.608128899838!2d10.3025457!3d47.7251505!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x479c798218270afb%3A0x79a0c2a7342535c3!2sHawaii%20barbershop%20Reviews!3m2!1d47.718008!2d10.3146568!5e0!3m2!1sen!2sde!4v1737147529099!5m2!1sen!2sde"
                    height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="w-full md:w-[1000px]"></iframe>

            </div>



        </div>
    );
};

export default Directions;
