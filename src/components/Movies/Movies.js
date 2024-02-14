import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from '../MoreButton/MoreButton';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';


function Movies(props) {
  return (
    <>
      <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn} onLogoClick={props.onLogoClick}/>
      <main className='movies'>
        <SearchForm/>
        <FilterCheckbox checkboxIcon={props.checkboxIcon} onFilterClick={props.onFilterClick}/>
       {props.isLoading 
        ? (<Preloader/>)
        : (props.isMovieFound 
          ? (<MoviesCardList cardsSet={props.cardsSet} isOnlySavedMovies={props.isOnlySavedMovies}/>) 
          : (<NoMoviesFound />)
          )
        }
        {props.children}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;