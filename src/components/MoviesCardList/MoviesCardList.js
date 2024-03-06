import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";
import {windowWidth, numberOfCards, additionalCards} from '../../utils/constants';

function MoviesCardList(props) {
  function getInitialCardsAmount() {
    if(window.innerWidth > windowWidth.laptop) {
      return numberOfCards.laptop;
    } else {
      if(window.innerWidth > windowWidth.tablet) {
        return numberOfCards.tablet;
      } else {
        return numberOfCards.mobile;
      }
    }
  }

  const [cards, setCards] = useState(props.cardsSet);
  const [cardsAmount, setCardsAmount] = useState(getInitialCardsAmount());
  const [moreMovies, setMoreMovies] = useState(true);

  function resetCardsAmount() {
    const newCardsAmount = getInitialCardsAmount();
    setCardsAmount(newCardsAmount);
  }

  const handleMoreButtonClick = () => {
    if(window.innerWidth > windowWidth.laptop) {
      setCardsAmount(cardsAmount+additionalCards.laptop)
      setCards(props.cardsSet.slice(0, cardsAmount))
    } else {
      setCardsAmount(cardsAmount+additionalCards.tablet)
      setCards(props.cardsSet.slice(0, cardsAmount))
    }
  }

  useEffect(() => {
    if(cardsAmount < props.cardsSet.length) {
      setMoreMovies(true);
    } else {
      setMoreMovies(false);
    }
    setCards(props.cardsSet.slice(0, cardsAmount));
  }, [cardsAmount, props.cardsSet])

  useEffect(() => {
    setCards(props.cardsSet.slice(0, getInitialCardsAmount())); 
  }, [props.cardsSet])

  useEffect(() => {
    if(props.cardsSet.length > 0) {
      setCards(props.cardsSet.slice(0, getInitialCardsAmount()));
    };
  }, [window.location.pathname])

  useEffect(() => {
    window.addEventListener("resize", resetCardsAmount);
    return () =>  
    window.removeEventListener("resize", resetCardsAmount);
  }, [])

  return(
    <>
      {props.isOnlySavedMovies 
        ? (<ul className='movies-container'>{props.cardsSet.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>))}
        </ul>)
        : (<ul className='movies-container'>{cards.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>))}
        </ul>)
      }
      {props.isOnlySavedMovies ? "" : (moreMovies && <MoreButton onMoreButtonClick={handleMoreButtonClick}/>)}
    </>
  )
}

export default MoviesCardList;