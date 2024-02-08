import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
    <Header/>
    <main className='main'>
      <Promo/>
      <AboutProject/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default Main;