import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import {cardsSet} from '../../utils/constants';

function SavedMovies(props) {
  return(
    <>
      <Header/>
      <SearchForm/>
      <MoviesCardList cardsSet={cardsSet}/>
      <div className='section-divider'></div>
      <Footer/>
    </>
  )
}

export default SavedMovies;