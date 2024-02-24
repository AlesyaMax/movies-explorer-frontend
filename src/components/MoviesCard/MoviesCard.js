import savedIcon from '../../images/saved.svg';
import removeIcon from '../../images/remove-icon.svg';

function MoviesCard(props) {
  return (
    <li className='movie'>
      <figure className='movie__card'>
        {props.isMovieSaved 
        ? (<button className="movie__button movie__button_saved-movie" type="button"><img className="movie__button-icon" alt="сохранено" src={props.isOnlySavedMovies ? removeIcon : savedIcon}/></button>)
        : (<button className='movie__button movie__button_save-movie' type="button">Сохранить</button>)}
        <img className='movie__image' alt={`Обложка фильма ${props.movieData.nameRU}`} src={props.movieData.image}></img>
        <figcaption className="movie__caption">
          <p className='movie__name'>{props.movieData.nameRU}</p>
          <p className='movie__duration'>{props.movieData.duration}</p>
        </figcaption>
      </figure>
    </li>
  )
}

export default MoviesCard;