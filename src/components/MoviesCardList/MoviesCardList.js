import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const currentUser = {id: '123'}; // контекст и добавление/удаление фильма будут добавлены в следующем этапе

  return(
    <>
    {props.isOnlySavedMovies 
      ? (<ul className='movies-container'> {props.cardsSet.map((card) => {if (card.owner === currentUser.id) {
        return <MoviesCard key={card.movieId} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} isMovieSaved={true}/>}
})}
    </ul>)
    : (<ul className='movies-container'> {props.cardsSet.map((card) => (<MoviesCard key={card.movieId} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} isMovieSaved={false}/>
    ))} </ul>)
    }
    <MoreButton/>
</> )
}

export default MoviesCardList;