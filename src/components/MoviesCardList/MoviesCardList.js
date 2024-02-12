import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return(
    <section className='movies-container'>
      {props.cardsSet.map((card) => (
        <MoviesCard key={card.movieId} movieData={card}/>
      ))}
    </section>
  )
}

export default MoviesCardList;