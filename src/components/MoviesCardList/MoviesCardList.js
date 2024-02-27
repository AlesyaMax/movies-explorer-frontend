import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const currentUser = {id: '123'};
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

  const [cards, setCards] = useState(props.cardsSet.slice(0, initialCardsAmount));
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
    setCards(props.cardsSet.slice(0, initialCardsAmount))
  }, [props.cardsSet])

  return(
    <>
    {props.isOnlySavedMovies 
      ? (<ul className='movies-container'> {props.cardsSet.map((card) => {if (card.owner === currentUser.id) {
        return <MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} isMovieSaved={true}/>}
})}
    </ul>)
    : (<ul className='movies-container'> {cards.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} isMovieSaved={false}/>
    ))} </ul>)
    }
    {moreMovies && <MoreButton onMoreButtonClick={handleMoreButtonClick}/>}
</> )
}

export default MoviesCardList;