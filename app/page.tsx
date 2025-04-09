
import Header from "./outlets/header";
import Outlet from "./outlets/outlet";
import Footer from "./outlets/footer";
import ScrollToTop from "../components/scrollButton";

// import ScrollToTop from "./components/scrollButton";
export default function Home() {
  return (
    <>
    
    <main>
      
      {/*...::: Header Start :::... */}
      <Header />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer/>
      {/*...::: Footer End :::... */}
      <ScrollToTop />
    </main>
    </>
  );
}
