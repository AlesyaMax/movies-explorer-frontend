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
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [hasErrors, setHasErrors] = useState(false); //На следующем этапе прописать валидацию данных
  const [isLoading, setIsLoading] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(false);
  const [isInEditingMode, setIsInEditingMode] = useState(false);
  const [foundMovies, setFoundMovies] = useState({});
  const [authData, setAuthData] = useState({});


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
        setCurrentUser(newUserInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegisterSubmit(data) {
    mainApi
      .register(data)
      .then((res) => {
        setAuthData(res);
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
        setIsLoggedIn(true);
        setAuthData(data);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  } 

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
      localStorage.setItem("recentSearchResult", JSON.stringify(movies));
      setIsMovieFound(true);
    } else {
      setIsMovieFound(false);
    }
  }

  function handleMovieSearch(data, searchRequest) {
    const isFilterOn = localStorage.getItem("filterState");
    if (isFilterOn === "true") {
      const movies = searchShortMovies(data, searchRequest);
      saveSearchResult(movies);
    } else {
      const movies = searchAllMovies(data, searchRequest);
      saveSearchResult(movies);
    }
  }

  function handleSearchSubmit(searchRequest) {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if(movies && movies.length > 0) {
      handleMovieSearch(movies, searchRequest);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          handleMovieSearch(res, searchRequest);
          setIsLoading(false)})
        .catch((err) => console.log(err));
    }
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

  useEffect(() => {
    setIsMenuOpened(false);
  }, [currentPath]);

  useEffect(() => {
    const searchRequest = localStorage.getItem("searchRequest");
    if(searchRequest && searchRequest.length > 0) {
      const movies = JSON.parse(localStorage.getItem("movies"));
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  console.log(currentUser);

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
          isMovieFound={isMovieFound}
          cardsSet={foundMovies}
          isOnlySavedMovies={false}
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
          isMovieFound={isMovieFound}
          cardsSet={foundMovies}
          isOnlySavedMovies={true}
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
