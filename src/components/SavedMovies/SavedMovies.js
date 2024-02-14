import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import {cardsSet} from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';

function SavedMovies(props) {
  return(
    <>
      <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn} onLogoClick={props.onLogoClick}/>
      <SearchForm/>
      <FilterCheckBox checkboxIcon={props.checkboxIcon} onFilterClick={props.onFilterClick}/>
      {props.isLoading 
        ? (<Preloader/>)
        : (props.isMovieFound 
          ? (<MoviesCardList cardsSet={cardsSet} isOnlySavedMovies={true}/>) 
          : (<NoMoviesFound />)
          )
        }
      <div className='section-divider'></div>
      <Footer/>
    </>
  )
}

export default SavedMovies;