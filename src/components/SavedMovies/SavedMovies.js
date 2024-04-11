import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return(
    <Movies 
      isMenuOpened={props.isMenuOpened} 
      onMenuClick={props.onMenuClick} 
      isLoggedIn={props.isLoggedIn} 
      onLogoClick={props.onLogoClick}
      isLoading={props.isLoading}
      hasMoviesToShow={props.hasMoviesToShow}
      cardsSet={props.cardsSet}
      isOnlySavedMovies={props.isOnlySavedMovies}
      onMovieStatusClick={props.onMovieStatusClick}
      onSearchSubmit={props.onSearchSubmit}
      showNotFoundResult={props.showNotFoundResult}>
      <div className='section-divider'></div>
      </Movies>
  )
}

export default SavedMovies;