import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import {cardsSet} from '../../utils/constants';

function SavedMovies(props) {
  return(
    <>
      <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn}/>
      <SearchForm/>
      <MoviesCardList cardsSet={cardsSet} isOnlySavedMovies={true}/>
      <div className='section-divider'></div>
      <Footer/>
    </>
  )
}

export default SavedMovies;