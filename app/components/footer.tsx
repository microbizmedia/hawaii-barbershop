
const Footer = () => {
  const services = [
    { name: "Montag", price: "10:00 - 17:00" },
    { name: "Dienstag", price: "9:00 - 18:30" },
    { name: "Mittwoch", price: "9:00 - 18:30" },
    { name: "Donnerstag", price: "9:00 - 18:30" },
    { name: "Freitag", price: "9:00 - 19:00" },
    { name: "Samstag", price: "9:00 - 19:00" },
    { name: "Sonntag", price: "Ruhetag" },
  ];

  return (
    <footer className="relative  m-auto w-full bg-[#000] overflow-hidden"
    id="footer">
      <div className="global-container flex lg:justify-between flex-wrap gap-8 py-10 lg:py-20">
        <div >
          <h3 className="text-2xl  pb-2">Hawaii Barbershop</h3>
          <h3 className="text-2xl  pb-2">Kempten</h3>
          <h3 className="text-2xl  pb-3">Contact</h3>
          <p className=" text-[#91765a]">Bahnhofstraße 44,<br />87435 Kempten (Allgäu)</p>

          <div className="py-4"><a className="text-bold text-xl text-[#91765a]" href="tel:0831 200 684 96">0831 200 684 96</a></div>
          <a className=" text-[#91765a]" href="mailto:info@hawaiibarber.com">info@hawaiibarber.com</a>
        </div>
        <div className="w-[250px]">
          <h3 className="text-2xl pb-2">Öffenungszeiten</h3>
          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between  font-medium py-1 "
              >
                <span className="text-[#91765a]">{service.name}</span>
                <span className="flex-grow h-px bg-dotted-footer mx-2 bg-"></span>
                <span className="text-[#91765a] ">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl pb-2">Soziale Medien</h3>
          <p className=" text-[#91765a]">Wir würden uns freuen, dich auf Instagram zu sehen!</p>
          <button className="bg-[#91765a] text-xl py-3 md:px-20 mt-4 w-full md:w-auto">INSTAGRAM</button>

        </div>
      </div>
      <div className='h-[1px] w-full bg-[#91765a] opacity-25' />
      {/* Footer Bottom */}

      <p className='global-container py-6 text-[#91765a] text-sm'>
        © {new Date().getFullYear()} All Rights Reserved. Designed and Developed by MicroBiz Media.
      </p>

      {/* Footer Bottom */}

    </footer >

  );
};

export default Footer;
