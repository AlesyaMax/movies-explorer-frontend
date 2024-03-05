import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const windowSize = window.innerWidth;
  const moviesPath = "/movies";
  const savedMoviesPath = "/saved-movies";
  const currentPath = window.location.pathname;
  // const [device, setDevice] = useState("");
  const [initialAmount, setInitialAmount] = useState("");

  // const initialCardsAmount;
  // const additionalCardsAmount;
  // set of screens: laptop, tablet, mobile;
  
  // function func() {
  //   let initialAmount;
  //   if(window.innerWidth > 1279) {
  //     initialAmount = 12;
  //   } else {
  //     if(window.innerWidth > 767) {
  //       initialAmount = 8;
  //     } else {
  //       initialAmount = 5;
  //     }
  //   }
  //   console.log(window.innerWidth);
  //   console.log(initialAmount);
  // }

  function getInitialCardsAmount() {
    if(window.innerWidth > 1279) {
      return 12
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
  const [cardsAmount, setCardsAmount] = useState(initialCardsAmount);
  const [moreMovies, setMoreMovies] = useState(true);

  function resetCardsAmount() {
    const initialCardsAmount = getInitialCardsAmount();
      setCards(props.cardsSet.slice(0, initialCardsAmount));
      setCardsAmount(initialCardsAmount);
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
  }, [cardsAmount, props.cardsSet])

  useEffect(() => {
    resetCardsAmount()
  }, [props.cardsSet])

  useEffect(() => {
    if(props.cardsSet.length > 0) {
      setCards(props.cardsSet.slice(0, initialCardsAmount));
    };
  }, [])

  useEffect(() => {
    if(currentPath === moviesPath || currentPath === savedMoviesPath) {
      window.addEventListener("resize", resetCardsAmount);
    } else {
      window.removeEventListener("resize");
    }
  }, [currentPath])

  return(
    <>
      <ul className='movies-container'>{cards.map((card) => (<MoviesCard key={card.id} movieData={card} isOnlySavedMovies={props.isOnlySavedMovies} onMovieStatusClick={props.onMovieStatusClick}/>))}
      </ul>)
      {props.isOnlySavedMovies ? "" : (moreMovies && <MoreButton onMoreButtonClick={handleMoreButtonClick}/>)}
    </>
  )
}

export default MoviesCardList;