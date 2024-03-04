import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const windowSize = window.innerWidth;
  
  function getInitialCardsAmount() {
    if(windowSize > 1279) {
      return 12
    } else {
      if(windowSize > 767) {
        return 8;
      } else {
        return 5;
      }
    }
  }

  const initialCardsAmount = getInitialCardsAmount();

  const [cards, setCards] = useState(props.cardsSet);
  const [cardsAmount, setCardsAmount] = useState(initialCardsAmount);
  const [moreMovies, setMoreMovies] = useState(true);

  const handleMoreButtonClick = () => {
    if(windowSize > 1279) {
      setCardsAmount(cardsAmount+12)
      setCards(props.cardsSet.slice(0, cardsAmount))
    } else {
      if(windowSize > 767) {
        setCardsAmount(cardsAmount+8)
        setCards(props.cardsSet.slice(0, cardsAmount))
        console.log(moreMovies)
      } else {
        setCardsAmount(cardsAmount+2)
        setCards(props.cardsSet.slice(0, cardsAmount))
      }
    }
  }

  useEffect(() => {
    if(cardsAmount < props.cardsSet.length) {
      setMoreMovies(true)
    } else {
      setMoreMovies(false);
    }
  }, [cardsAmount, props.cardsSet])

  useEffect(() => {
    setCards(props.cardsSet.slice(0, cardsAmount))
  }, [props.cardsSet])

  useEffect(() => {
    if(props.cardsSet.length > 0) {
      setCards(props.cardsSet.slice(0, initialCardsAmount));
    };
  }, [])

  return(
    <>
      <ul className='movies-container'>{cards.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>))}
      </ul>)
      {moreMovies && <MoreButton onMoreButtonClick={handleMoreButtonClick}/>}
    </>
  )
}

export default MoviesCardList;