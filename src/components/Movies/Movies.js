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
      <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn} onLogoClick={props.onLogoClick}/>
      <main className='movies'>
        <SearchForm/>
        <FilterCheckbox checkboxIcon={props.checkboxIcon} onFilterClick={props.onFilterClick}/>
        <MoviesCardList cardsSet={cardsSet} isOnlySavedMovies={false}/>
        <MoreButton/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies;