import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const currentUser = {id: '123'}; // контекст будет добавлен в следующем этапе

  return(
    <>
    {props.isOnlySavedMovies 
      ? (<section className='movies-container'> {props.cardsSet.map((card) => {if (card.owner === currentUser.id) {
        return <MoviesCard key={card.movieId} movieData={card}/>}
})}
    </section>)
    : (<section className='movies-container'> {props.cardsSet.map((card) => (<MoviesCard key={card.movieId} movieData={card}/>
    ))} </section>)
    }
    {/* <MoreButton/> */}
</> )
}

export default MoviesCardList;