import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from "../MoviesCard/MoviesCard";
import {WINDOW_WIDTH, NUMBER_OF_CARDS, ADDITIONAL_CARDS} from '../../utils/constants';

function MoviesCardList(props) {

  const initialDevice = () => {
    if(window.innerWidth > WINDOW_WIDTH.LAPTOP) {
      return 'laptop';
    } else {
      if(window.innerWidth > WINDOW_WIDTH.TABLET) {
        return 'tablet';
      } else {
        return 'mobile';
      }
    }
  }

  const [device, setDevice] = useState(initialDevice());

  function identifyDevice() {
    if(window.innerWidth > WINDOW_WIDTH.LAPTOP) {
      setDevice('laptop');
    } else {
      if(window.innerWidth > WINDOW_WIDTH.TABLET) {
        setDevice('tablet');
      } else {
        setDevice('mobile');
      }
    }
  }

  function getInitialCardsAmount() {
    if(window.innerWidth > WINDOW_WIDTH.LAPTOP) {
      return NUMBER_OF_CARDS.LAPTOP;
    } else {
      if(window.innerWidth > WINDOW_WIDTH.TABLET) {
        return NUMBER_OF_CARDS.TABLET;
      } else {
        return NUMBER_OF_CARDS.MOBILE;
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
    if(window.innerWidth > WINDOW_WIDTH.LAPTOP) {
      setCardsAmount(cardsAmount+ADDITIONAL_CARDS.LAPTOP)
      setCards(props.cardsSet.slice(0, cardsAmount))
    } else {
      setCardsAmount(cardsAmount+ADDITIONAL_CARDS.TABLET)
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
    setCardsAmount(getInitialCardsAmount()) 
  }, [props.cardsSet])

  useEffect(() => {
    if(props.cardsSet.length > 0) {
      setCards(props.cardsSet.slice(0, getInitialCardsAmount()));
    };
  }, [window.location.pathname])

  useEffect(() => {
    window.addEventListener("resize", identifyDevice);
    return () =>  
    window.removeEventListener("resize", identifyDevice);
  }, [])

  useEffect(() => {
    resetCardsAmount();
  }, [device])

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