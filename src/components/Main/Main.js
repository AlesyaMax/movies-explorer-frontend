import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
    <Header/>
    <main className='main'>
      <Promo/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default Main;