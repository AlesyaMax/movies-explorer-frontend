import { Route, Routes, useNavigate} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import React, { useState, useEffect } from 'react';
import checkboxOn from "../../images/smalltumb.svg";
import checkboxOff from "../../images/smalltumboff.svg";

function App() {

  const currentPath = window.location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(true); //На следующем этапе прописать запрос на создание / проверку / удаление токена для обновления переменной
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMovieSaved, setIsMovieSaved] = useState(false); //На следующем этапе прописать запрос на проверку статуса фильма и его добавление / удаление из сохраненных
  const [checkboxIcon, setCheckboxIcon] = useState(checkboxOff);
  const [hasErrors, setHasErrors] = useState(false); //На следующем этапе прописать валидацию данных
  const [isLoading, setIsLoading] = useState(false); //На следующем этапе прописать загрузку при выполнении запросов
  const [isMovieFound, setIsMovieFound] = useState(true); //На следующем этапе прописать результат поиска при выполнении запросов

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

  function handleFilterClick() {
    if(checkboxIcon === checkboxOn) {
      setCheckboxIcon(checkboxOff);
    } else {
      setCheckboxIcon(checkboxOn);
    }
  }

  useEffect(() => {
    setIsMenuOpened(false);
  }, [currentPath]);

  return (
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
          checkboxIcon={checkboxIcon} 
          onFilterClick={handleFilterClick} 
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
          isMovieFound={isMovieFound}
        />}
      />
      <Route 
        path="/saved-movies" 
        element={<SavedMovies 
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          isLoggedIn={isLoggedIn} 
          checkboxIcon={checkboxIcon} 
          onFilterClick={handleFilterClick} 
          onLogoClick={handleLogoClick}
          isLoading={isLoading}
          isMovieFound={isMovieFound}
        />}
      />
      <Route 
        path="/profile" 
        element={<Profile 
          isMenuOpened={isMenuOpened} 
          onMenuClick={handleClickOnMenu} 
          isLoggedIn={isLoggedIn} 
          onLogoClick={handleLogoClick}
        />}
      />
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/signin" element={<Login/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>)
}

export default App;
