
const PriceMenu = () => {
   
        const services = [
          { name: "Haarschnitt", price: "€33" },
          { name: "Kinder im Alter von 3 bis 9 Jahren", price: "€14" },
          { name: "Bartschneiden", price: "€13" },
          { name: "Kinder im Alter von 10 bis 13 Jahren", price: "€17" },
          { name: "Haar - und Bartschneiden", price: "€39" },
          { name: "Haarwäsche", price: "€20" },
        ];
    return (
     <div id="price-menu"
     className='global-container relative py-24 w-full text-black  m-auto'>
       <h2 className="text-center pb-10">HAWAII Barbershop Preise</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-lg font-medium py-2 "
          >
            <span className="font-bold">{service.name}</span>
            <span className="flex-grow h-px bg-dotted mx-2"></span>
            <span className="text-[#91765a] font-bold">{service.price}</span>
          </div>
        ))}
      </div>
     </div>
    );
  };
  
  export default PriceMenu;
  