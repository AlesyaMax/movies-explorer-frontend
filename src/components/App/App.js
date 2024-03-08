import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import React, { useState, useEffect } from 'react';
import moviesApi from "../../utils/MoviesApi";
import mainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import Popup from '../Popup/Popup';
import {errorMessages, successMessages, shortMovieDuration} from '../../utils/constants';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const currentPath = window.location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInEditingMode, setIsInEditingMode] = useState(false);
  const [foundMovies, setFoundMovies] = useState({});
  const [savedMovies, setSavedMovies] = useState({});
  const [hasMoviesToShow, setHasMoviesToShow] = useState(false);
  const [hasSavedMoviesToShow, setHasSavedMoviesToShow] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showNotFoundResult, setShowNotFoundResult] = useState(false);
  const [showNotFoundResultSaved, setShowNotFoundResultSaved] = useState(false);


  const navigate = useNavigate();

  function handleClosePopup() {
    setIsPopupVisible(false);
    setPopupTitle("");
    setPopupMessage("")
  }

  function handleLogoClick() {
    navigate("/", { replace: true })
  }

  function handleOpenMenu() {
    setIsMenuOpened(true);
  }

  function handleCloseMenu() {
    setIsMenuOpened(false);
  }

  function handleClickOnMenu() {
    if(isMenuOpened) {
      handleCloseMenu();
    } else {
      handleOpenMenu();
    }
  }

  function switchEditingMode() {
    if(isInEditingMode) {
      setIsInEditingMode(false);
    } else {
      setIsInEditingMode(true)
    }
  }

  function handleProfileSubmit(userInfo) {
    setIsLoading(true);
    switchEditingMode();
    mainApi
      .editUserInfo(userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setPopupTitle(successMessages.updateTitle);
        setPopupMessage(successMessages.updateMessage);
        setIsPopupVisible(true);
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setIsPopupVisible(true);
        if(err.status === 409) {
          setPopupMessage(errorMessages.duplicateError);
        } else {
          setPopupMessage(errorMessages.serverError);
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegisterSubmit(data) {
    setIsLoading(true);
    mainApi
      .register(data)
      .then((res) => {
        localStorage.setItem("userId", res._id);
        setCurrentUser(res);
        setPopupTitle(successMessages.registerTitle);
        setPopupMessage(successMessages.registerMessage);
        setIsPopupVisible(true);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setIsPopupVisible(true);
        if(err.status === 409) {
          setPopupMessage(errorMessages.duplicateError);
        } else {
          setPopupMessage(errorMessages.serverError);
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleLoginSubmit(data) {
    setIsLoading(true);
    mainApi
      .authorization(data)
      .then((res) => {
        localStorage.setItem("userId", res._id);
        setIsLoggedIn(true);
        setCurrentUser(data);
        setPopupTitle(successMessages.loginTitle);
        setPopupMessage(successMessages.loginMessage);
        setIsPopupVisible(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setIsPopupVisible(true);
        switch(err.status) {
          case 400: 
            setPopupMessage(errorMessages.authError);
            break;
          case 401:
            setPopupMessage(errorMessages.wrongLogin);
            break;
          case 403:
            setPopupMessage(errorMessages.wrongToken);
            break;
          default:
            setPopupMessage(errorMessages.serverError);
        }
      })
      .finally(() => setIsLoading(false));
  } 

  function storeData(key, data) {
    return localStorage.setItem(`${key}`, JSON.stringify(data));
  }

  function getStoredData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function updateStoredMovies(newDataSet, newOwner, newMovieId) {
    const allMovies = getStoredData("movies");
    allMovies.map((m) => (m.movieId === newDataSet.movieId ? (m.owner = newOwner, m._id = newMovieId) : m));
    storeData("movies", allMovies);
  }

  function handleSignOut() {
    navigate("/signout", {replace: true});
    mainApi.signOut()
    .then(() => {
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/", {replace: true})
    })
    .catch((err) => {
      console.log(err)
      setPopupTitle(errorMessages.errorTitle);
      setPopupMessage(errorMessages.serverError);
      setIsPopupVisible(true);
    });
  }

  function auth() {
    const jwt = localStorage.getItem("userId");
    if (jwt) {
      mainApi
        .checkAuth(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setPopupTitle(errorMessages.errorTitle);
          setIsPopupVisible(true);
          switch(err.status) {
            case 401:
              setPopupMessage(errorMessages.wrongToken);
              break;
            case 403: 
              setPopupMessage(errorMessages.authError);
              break;
            default:
              setPopupMessage(errorMessages.serverError);
          }
        });
    }
  }

  function configMovies(moviesSet) {
    return moviesSet.map((m) => m = {
      thumbnail: `https://api.nomoreparties.co${m.image.formats.thumbnail.url}`,
      image: `https://api.nomoreparties.co${m.image.url}`,
      movieId: m.id,
      country: m.country,
      director: m.director,
      duration: m.duration,
      year: m.year,
      description: m.description,
      trailerLink: m.trailerLink,
      nameRU: m.nameRU,
      nameEN: m.nameEN
    })
  };

  function checkIfSaved(moviesSet) {
    const savedMoviesSet = getStoredData("savedMovies");
    const checkedMoviesSet = moviesSet.map((m) => {
      const savedMovie = savedMoviesSet.filter((sm) => sm.movieId === m.movieId);
      if(savedMovie.length > 0) {
        return m = {...m, owner: savedMovie[0].owner, _id: savedMovie[0]._id};
      } else {
        return m
      }
    })
    return checkedMoviesSet;
  }

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        const moviesSavedByUser = movies.filter((movie) => movie.owner === currentUser._id);
        setSavedMovies(moviesSavedByUser);
        storeData("savedMovies", moviesSavedByUser);
        setHasSavedMoviesToShow(true)
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setPopupMessage(errorMessages.serverError);
        setIsPopupVisible(true);
      })
  }

 function handleSaveMovie(movie) {
    delete movie._id;
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        const savedMoviesList = getStoredData("savedMovies");
        savedMoviesList.push(newMovie);
        storeData("savedMovies", savedMoviesList);
        setSavedMovies(savedMoviesList);
        movie.owner = newMovie.owner;
        movie._id = newMovie._id;
        updateStoredMovies(newMovie, newMovie.owner, newMovie._id)})
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setPopupMessage(errorMessages.serverError);
        setIsPopupVisible(true);
      });
 }

 function handleRemoveMovie(movie) {
  const movieToRemove = savedMovies.filter((m) => m.movieId === movie.movieId);
  if(movieToRemove && movieToRemove.length > 0) {
    mainApi
      .removeMovie(movieToRemove[0]._id)
      .then(() => {    
        setSavedMovies((state) => state.filter((sm) => sm.movieId !== movie.movieId)); 
        const savedMoviesSet = getStoredData("savedMovies");
        const updatedSavedMoviesSet = savedMoviesSet.filter((sm) => sm.movieId !== movie.movieId);
        storeData("savedMovies", updatedSavedMoviesSet); 
        movie.owner = "";
        movie._id = "";
        updateStoredMovies(movie, "", "")})
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setPopupMessage(errorMessages.serverError);
        setIsPopupVisible(true);
      });
  }
 }

 function changeMovieStatus(movie, isSaved) {
   if(isSaved) {
     handleRemoveMovie(movie)
   } else {
     handleSaveMovie(movie)
   }
 };

 function searchShortMovies(data, searchRequest) {
  const movies = data.filter((item) => item.duration < shortMovieDuration && (item.nameRU.toLowerCase().includes(`${searchRequest}`) || item.nameEN.toLowerCase().includes(`${searchRequest}`))); 
  return movies;
}

function searchAllMovies(data, searchRequest) {
  const movies = data.filter((item) => item.nameRU.toLowerCase().includes(`${searchRequest}`) || item.nameEN.toLowerCase().includes(`${searchRequest}`)); 
  return movies;
}

function saveSearchResult(movies) {
  if(movies.length > 0) {
    setFoundMovies(movies);
    storeData("recentSearchResult", movies);
    setHasMoviesToShow(true)
  } else {
    setHasMoviesToShow(false)
    setShowNotFoundResult(true)
  }
};

function handleMovieSearch(data, searchRequest, filterState) {
  if (filterState) {
    const movies = searchShortMovies(data, searchRequest);
    return movies;
  } else {
    const movies = searchAllMovies(data, searchRequest);
    return movies;
  }
}

function handleGeneralSearchSubmit(searchRequest, filterState) {
  const movies = getStoredData("movies");
  if(movies && movies.length > 0) {
    const searchResult = handleMovieSearch(movies, searchRequest, filterState);
    saveSearchResult(searchResult);
  } else {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((res) => {
        const moviesSet = configMovies(res);
        const checkedMoviesSet = checkIfSaved(moviesSet);
        storeData("movies", checkedMoviesSet)
        const searchResult = handleMovieSearch(checkedMoviesSet, searchRequest, filterState);
        saveSearchResult(searchResult);
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(errorMessages.errorTitle);
        setPopupMessage(errorMessages.serverError);
        setIsPopupVisible(true);
      })
      .finally(() => setIsLoading(false));
  }
}

function handleSavedSearchSubmit(searchRequest, filterState) {
  setIsLoading(true);
  const movies = getStoredData("savedMovies");
  if(movies && movies.length > 0) {
    const searchResult = handleMovieSearch(movies, searchRequest, filterState);
    if(searchResult.length > 0) {
      setSavedMovies(searchResult);
      setHasSavedMoviesToShow(true);
      setShowNotFoundResultSaved(false);
    } else {
      setHasSavedMoviesToShow(false);
      setShowNotFoundResultSaved(true);
    }
  } else {
    setHasSavedMoviesToShow(false);
    setShowNotFoundResultSaved(true);
  }
  setIsLoading(false);
}

function checkCurrentSavedMovies() {
  const currentSavedMovies = getStoredData("savedMovies");
  if(currentSavedMovies && currentSavedMovies.length > 0) {
    setHasSavedMoviesToShow(true);
    setSavedMovies(currentSavedMovies)
  } else {
    setHasSavedMoviesToShow(false);
  }
}

  useEffect(() => {
    setIsMenuOpened(false);
    setShowNotFoundResultSaved(false);
    checkCurrentSavedMovies();
  }, [currentPath]);

  useEffect(() => {
    const searchRequest = localStorage.getItem("searchRequest");
    const filterState = localStorage.getItem("filterState");
    if(searchRequest && searchRequest.length > 0) {
      const movies = getStoredData("movies");
      const searchResult = handleMovieSearch(movies, searchRequest, filterState);
      saveSearchResult(searchResult);
      setShowNotFoundResult(true)
      return;
    } 
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          getSavedMovies();
        })
        .catch((err) => {
          console.log(err);
          setPopupTitle(errorMessages.errorTitle);
          setPopupMessage(errorMessages.serverError);
          setIsPopupVisible(true);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    auth();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <Routes>
      <Route 
        path="/" 
        element={<Main 
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          isLoggedIn={isLoggedIn}
        />}
      />
      <Route 
        path="/movies" 
        element={<ProtectedRouteElement 
          isLoggedIn={isLoggedIn}
          element={Movies}
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
          hasMoviesToShow={hasMoviesToShow}
          cardsSet={foundMovies}
          isOnlySavedMovies={false}
          onMovieStatusClick={changeMovieStatus}
          onSearchSubmit={handleGeneralSearchSubmit}
          showNotFoundResult={showNotFoundResult}
          />}
      />
      <Route 
        path="/saved-movies" 
        element={<ProtectedRouteElement
          isLoggedIn={isLoggedIn}
          element={SavedMovies}
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
          hasMoviesToShow={hasSavedMoviesToShow}
          cardsSet={savedMovies}
          isOnlySavedMovies={true}
          onMovieStatusClick={changeMovieStatus}
          onSearchSubmit={handleSavedSearchSubmit}
          showNotFoundResult={showNotFoundResultSaved}
          />}
      />
      <Route 
        path="/profile" 
        element={<ProtectedRouteElement
          isLoggedIn={isLoggedIn}
          element={Profile}
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          onLogoClick={handleLogoClick}
          isInEditingMode={isInEditingMode}
          onEditProfile={switchEditingMode}
          onSubmit={handleProfileSubmit}
          onSignOut={handleSignOut}
          name={currentUser.name}
          email={currentUser.email}
          isLoading={isLoading}
        />}
      />
      <Route 
        path="/signup" 
        element={<Register 
          isLoggedIn={isLoggedIn} 
          onSubmit={handleRegisterSubmit}
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
        />}
      />
      <Route 
        path="/signin" 
        element={<Login 
          isLoggedIn={isLoggedIn} 
          onSubmit={handleLoginSubmit}
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
        />}
      />
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    <Popup isPopupVisible={isPopupVisible} onClose={handleClosePopup} title={popupTitle} message={popupMessage}/>
    </CurrentUserContext.Provider>)
}

export default App;
