import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
    <Header/>
    <main className='main'>
      <Promo/>
      <AboutProject/>
      <Techs />
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default Main;