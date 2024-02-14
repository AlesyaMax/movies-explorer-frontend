import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import {cardsSet} from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';
import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return(
    <Movies 
      isMenuOpened={props.isMenuOpened} 
      onMenuClick={props.onMenuClick} 
      isLoggedIn={props.isLoggedIn} 
      checkboxIcon={props.checkboxIcon} 
      onFilterClick={props.onFilterClick} 
      onLogoClick={props.onLogoClick}
      isLoading={props.isLoading}
      isMovieFound={props.isMovieFound}
      cardsSet={props.cardsSet}
      isOnlySavedMovies={props.isOnlySavedMovies}>
      <div className='section-divider'></div>
      </Movies>
  )
}

export default SavedMovies;