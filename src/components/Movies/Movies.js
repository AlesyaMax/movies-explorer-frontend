import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {cardsSet} from "../../utils/constants";
import MoreButton from '../MoreButton/MoreButton';
import Footer from '../Footer/Footer';


function Movies(props) {
  return (
    <>
      <Header/>
      <main className='movies'>
        <SearchForm/>
        <FilterCheckbox/>
        <MoviesCardList cardsSet={cardsSet}/>
        <MoreButton/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies;