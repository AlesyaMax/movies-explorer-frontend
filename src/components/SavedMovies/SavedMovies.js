import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return(
    <Movies 
      isMenuOpened={props.isMenuOpened} 
      onMenuClick={props.onMenuClick} 
      isLoggedIn={props.isLoggedIn} 
      onLogoClick={props.onLogoClick}
      isLoading={props.isLoading}
      isMovieFound={props.isMovieFound}
      cardsSet={props.cardsSet}
      isOnlySavedMovies={false}
      onSearchSubmit={props.onSearchSubmit}>
      <div className='section-divider'></div>
      </Movies>
  )
}

export default SavedMovies;