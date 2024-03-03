import savedIcon from '../../images/saved.svg';
import removeIcon from '../../images/remove-icon.svg';
import { useContext} from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function MoviesCard(props) {

  const calculateDuration = (mins) => {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м'; 
  }

  const currentUser = useContext(CurrentUserContext);
  const isMovieSaved = props.movieData.owner === currentUser._id;

  function handleButtonClick() {
    delete props.movieData.owner;
    props.onMovieStatusClick(props.movieData, isMovieSaved);
  };

  return (
    <li className='movie'>
      <figure className='movie__card'>
        {isMovieSaved 
        ? (<button className="movie__button movie__button_saved-movie" type="button"><img className="movie__button-icon" alt="сохранено" src={props.isOnlySavedMovies ? removeIcon : savedIcon} onClick={handleButtonClick}/></button>)
        : (<button className='movie__button movie__button_save-movie' type="button" onClick={handleButtonClick}>Сохранить</button>)}
        <img className='movie__image' alt={`Обложка фильма ${props.movieData.nameRU}`} src={props.movieData.image}></img>
        <figcaption className="movie__caption">
          <p className='movie__name'>{props.movieData.nameRU}</p>
          <p className='movie__duration'>{calculateDuration(props.movieData.duration)}</p>
        </figcaption>
      </figure>
    </li>
  )
}

export default MoviesCard;