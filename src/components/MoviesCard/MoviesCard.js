import savedIcon from '../../images/saved.svg';
import removeIcon from '../../images/remove-icon.svg';

function MoviesCard(props) {
  return (
    <figure className='movie'>
      {props.isMovieSaved 
      ? (<button className="movie__button button_saved-movie"><img className="movie__button_icon" alt="сохранено" src={props.isOnlySavedMovies ? removeIcon : savedIcon}/></button>)
      : (<button className='movie__button button_save-movie'>Сохранить</button>)}
      <img className='movie__image' alt={`Обложка фильма ${props.movieData.nameRU}`} src={props.movieData.image}></img>
      <figcaption className='movie__caption movie__name'>{props.movieData.nameRU}</figcaption>
      <figcaption className='movie__caption movie__duration'>{props.movieData.duration}</figcaption>
    </figure>
  )
}

export default MoviesCard;