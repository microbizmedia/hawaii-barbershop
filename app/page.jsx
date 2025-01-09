import Header from "./components/header";
import Outlet from "./components/outlet";
import Footer from "./components/footer";
// import ScrollToTop from "./components/scrollButton";
export default function Home() {
  return (
    <div className="">
      
      {/*...::: Header Start :::... */}
      <Header />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer/>
      {/*...::: Footer End :::... */}
      {/* <ScrollToTop /> */}
    </div>
  );
}
