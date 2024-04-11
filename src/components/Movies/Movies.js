import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound';

function Movies(props) {
  return (
    <>
      <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn} onLogoClick={props.onLogoClick}/>
      <main className='movies'>
        <SearchForm isFilterOn={props.isFilterOn} onSearchSubmit={props.onSearchSubmit} isOnlySavedMovies={props.isOnlySavedMovies} isLoading={props.isLoading}/>
       {props.isLoading 
        ? (<Preloader/>)
        : (props.hasMoviesToShow
          ? (<MoviesCardList cardsSet={props.cardsSet} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>) 
          : (props.showNotFoundResult && <NoMoviesFound />)
          )
        }
        {props.children}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;