import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
  return (
    <>
    <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn}/>
    <main className='main'>
      <Promo/>
      <AboutProject/>
      <Techs />
      <AboutMe />
    </main>
    <Footer/>
    </>
  );
}

export default Main;