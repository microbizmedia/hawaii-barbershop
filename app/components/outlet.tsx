// import Hero from "../pages/hero";
import HeroSlider from "../pages/heroSlider"
import About from "../pages/about";
import Instagram from "../pages/instagram";
import PriceMenu from "../pages/priceMenu";
import Directions from "../pages/directions";
import Reviews from "../pages/reviews";
const Outlet = () => {
 
  return (
    <>
        {/* <Hero /> */}
        <HeroSlider />
        <About />
        <Instagram />
        <PriceMenu />
        <Directions />
        <Reviews />
    </>
  );
};

export default Outlet;
