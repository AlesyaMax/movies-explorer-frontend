import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const moviesPath = "/movies";
  const savedMoviesPath = "/saved-movies";

  function getInitialCardsAmount() {
    if(window.innerWidth > 1279) {
      return 12;
    } else {
      if(window.innerWidth > 767) {
        return 8;
      } else {
        return 5;
      }
    }
  }

  const initialCardsAmount = getInitialCardsAmount();

  const [cards, setCards] = useState(props.cardsSet);
  const [cardsAmount, setCardsAmount] = useState(getInitialCardsAmount());
  const [moreMovies, setMoreMovies] = useState(true);

  function resetCardsAmount() {
    const newCardsAmount = getInitialCardsAmount();
    setCardsAmount(newCardsAmount);
  }

  const handleMoreButtonClick = () => {
    if(window.innerWidth > 1279) {
      setCardsAmount(cardsAmount+12)
      setCards(props.cardsSet.slice(0, cardsAmount))
    } else {
      if(window.innerWidth > 767) {
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
      setMoreMovies(true);
    } else {
      setMoreMovies(false);
    }
    setCards(props.cardsSet.slice(0, cardsAmount));
  }, [cardsAmount, props.cardsSet])

  useEffect(() => {
    setCards(props.cardsSet.slice(0, cardsAmount)); 
  }, [props.cardsSet])


  useEffect(() => {
    if(window.location.pathname === moviesPath || window.location.pathname === savedMoviesPath) {
      window.addEventListener("resize", resetCardsAmount);
    } else {
      window.removeEventListener("resize");
    };
    if(props.cardsSet.length > 0) {
      setCards(props.cardsSet.slice(0, getInitialCardsAmount()));
    };
  }, [window.location.pathname])

  useEffect(() => {
    console.log("hi")
  }, [])

  return(
    <>
      {props.isOnlySavedMovies 
        ? (<ul className='movies-container'>{props.cardsSet.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>))}
        </ul>)
        : (<ul className='movies-container'>{cards.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>))}
        </ul>)
      }
      {props.isOnlySavedMovies ? "" : (<MoreButton/>)}
      {/* {props.isOnlySavedMovies ? "" : (moreMovies && <MoreButton onMoreButtonClick={handleMoreButtonClick}/>)} */}
    </>
  )
}

export default MoviesCardList;