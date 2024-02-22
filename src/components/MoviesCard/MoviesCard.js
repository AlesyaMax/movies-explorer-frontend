import savedIcon from '../../images/saved.svg';
import removeIcon from '../../images/remove-icon.svg';

function MoviesCard(props) {
  return (
    <li className='movie__item'>
      <figure className='movie'>
        {props.isMovieSaved 
        ? (<button className="movie__button button_saved-movie" type="button"><img className="movie__button_icon" alt="сохранено" src={props.isOnlySavedMovies ? removeIcon : savedIcon}/></button>)
        : (<button className='movie__button button_save-movie' type="button">Сохранить</button>)}
        <img className='movie__image' alt={`Обложка фильма ${props.movieData.nameRU}`} src={props.movieData.image}></img>
        <figcaption className="movie_caption">
          <p className='movie_caption__name'>{props.movieData.nameRU}</p>
          <p className='movie_caption__duration'>{props.movieData.duration}</p>
        </figcaption>
      </figure>
    </li>
  )
}

export default MoviesCard;