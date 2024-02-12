function MoviesCard(props) {
  return (
    <figure className='movie'>
      <button className='movie__button button_save-movie button_visible'>Сохранить</button>
      <button className='movie__button button_remove-movie'></button>
      <img className='movie__image' alt="обложка фильма" src={props.movieData.image}></img>
      <figcaption className='movie__caption movie__name'>{props.movieData.nameRU}</figcaption>
      <figcaption className='movie__caption movie__duration'>{props.movieData.duration}</figcaption>
    </figure>
  )
}

export default MoviesCard;