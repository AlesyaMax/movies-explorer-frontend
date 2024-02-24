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