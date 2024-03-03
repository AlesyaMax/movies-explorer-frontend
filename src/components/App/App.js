import { Route, Routes, useNavigate} from "react-router-dom";
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


  const navigate = useNavigate();

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
    switchEditingMode();
    mainApi
      .editUserInfo(userInfo)
      .then((newUserInfo) => {
        setCurrentUser(...currentUser, newUserInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegisterSubmit(data) {
    mainApi
      .register(data)
      .then((res) => {
        localStorage.setItem("userId", res._id);
        setCurrentUser(res);
        navigate("/movies")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginSubmit(data) {
    mainApi
      .authorization(data)
      .then((res) => {
        localStorage.setItem("userId", res._id);
        setIsLoggedIn(true);
        setCurrentUser(data);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  } 

  function storeData(key, data) {
    return localStorage.setItem(`${key}`, JSON.stringify(data));
  }

  function getStoredData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function handleSignOut() {
    navigate("/signout", {replace: true});
    mainApi.signOut()
    .then(() => {
      localStorage.clear();
      navigate("/signin", {replace: true})
    })
    .catch((err) => {
      console.log(err)
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
          navigate("/movies", { replace: true });
        })
        .catch((err) => {
          console.log(err);
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
      .catch((err) => console.log(err))
  }

 function handleSaveMovie(movie) {
    delete movie._id;
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        getSavedMovies();
        const updatedMoviesSet = checkIfSaved(getStoredData("movies"));
        storeData("movies", updatedMoviesSet);
        setFoundMovies((state) => state.map((m) => (m.movieId === newMovie.movieId ? newMovie : m)));
        })
      .catch((err) => {
        console.log(err);
      });
 }

 function handleRemoveMovie(movie) {
  const movieToRemove = savedMovies.filter((m) => m.movieId === movie.movieId);
  mainApi
    .removeMovie(movieToRemove[0]._id)
    .then(() => {
      getSavedMovies();
      const updatedMoviesSet = checkIfSaved(getStoredData("movies"));
      storeData("movies", updatedMoviesSet);
      setFoundMovies((state) => state.map((m) => (m.movieId === movie.movieId ? movie : m)));
    })
    .catch((err) => {
      console.log(err);
    });
 }

 function changeMovieStatus(movie, isSaved) {
   if(isSaved) {
     handleRemoveMovie(movie)
   } else {
     handleSaveMovie(movie)
   }
 };

 function searchShortMovies(data, searchRequest) {
  const movies = data.filter((item) => item.duration < '41' && (item.nameRU.toLowerCase().includes(`${searchRequest}`) || item.nameEN.toLowerCase().includes(`${searchRequest}`))); 
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
  }
};

function handleMovieSearch(data, searchRequest) {
  const isFilterOn = getStoredData("filterState");
  if (isFilterOn === "true") {
    const movies = searchShortMovies(data, searchRequest);
    saveSearchResult(movies);
  } else {
    const movies = searchAllMovies(data, searchRequest);
    saveSearchResult(movies);
  }
}

function handleSearchSubmit(searchRequest) {
  const movies = getStoredData("movies");
  if(movies && movies.length > 0) {
    handleMovieSearch(movies, searchRequest);
  } else {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((res) => {
        const moviesSet = configMovies(res);
        const checkedMoviesSet = checkIfSaved(moviesSet);
        storeData("movies", checkedMoviesSet)
        handleMovieSearch(checkedMoviesSet, searchRequest);
        setIsLoading(false)})
      .catch((err) => console.log(err));
  }
}

  useEffect(() => {
    setIsMenuOpened(false);
  }, [currentPath]);

  useEffect(() => {
    const searchRequest = localStorage.getItem("searchRequest");
    if(searchRequest && searchRequest.length > 0) {
      const movies = getStoredData("movies");
      handleMovieSearch(movies, searchRequest);
      return;
    } 
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          getSavedMovies()
        })
        .catch((err) => {
          console.log(err);
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
        element={<Movies 
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          isLoggedIn={isLoggedIn}  
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
          hasMoviesToShow={hasMoviesToShow}
          cardsSet={foundMovies}
          isOnlySavedMovies={false}
          onMovieStatusClick={changeMovieStatus}
          onSearchSubmit={handleSearchSubmit}
        />}
      />
      <Route 
        path="/saved-movies" 
        element={<SavedMovies 
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          isLoggedIn={isLoggedIn} 
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
          hasMoviesToShow={hasSavedMoviesToShow}
          cardsSet={savedMovies}
          isOnlySavedMovies={true}
          onMovieStatusClick={changeMovieStatus}
          onSearchSubmit={handleSearchSubmit}
        />}
      />
      <Route 
        path="/profile" 
        element={<Profile 
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          isLoggedIn={isLoggedIn} 
          onLogoClick={handleLogoClick}
          isInEditingMode={isInEditingMode}
          onEditProfile={switchEditingMode}
          onSubmit={handleProfileSubmit}
          onSignOut={handleSignOut}
          name={currentUser.name}
          email={currentUser.email}
        />}
      />
      <Route path="/signup" element={<Register onSubmit={handleRegisterSubmit}/>}></Route>
      <Route path="/signin" element={<Login onSubmit={handleLoginSubmit}/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </CurrentUserContext.Provider>)
}

export default App;
