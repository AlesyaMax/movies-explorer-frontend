function MoviesCard(props) {
  return (
    <figure className='movie'>
      {props.isMovieSaved 
      ? (<button className='movie__button button_remove-movie'></button>)
      : (<button className='movie__button button_save-movie'>Сохранить</button>)}
      
      <img className='movie__image' alt="обложка фильма" src={props.movieData.image}></img>
      <figcaption className='movie__caption movie__name'>{props.movieData.nameRU}</figcaption>
      <figcaption className='movie__caption movie__duration'>{props.movieData.duration}</figcaption>
    </figure>
  )
}

export default MoviesCard;