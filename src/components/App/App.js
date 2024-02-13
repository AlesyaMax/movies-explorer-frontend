import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import React, { useState, useEffect } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true); //На следующем этапе прописать запрос на создание / проверку / удаление токена для обновления переменной
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMovieSaved, setIsMovieSaved] = useState(false); //На следующем этапе прописать запрос на проверку статуса фильма и его добавление / удаление из сохраненных

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

  useEffect(() => {
    setIsMenuOpened(false);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main isMenuOpened={isMenuOpened} onMenuClick={handleClickOnMenu} isLoggedIn={isLoggedIn}/>} />
      <Route path="/movies" element={<Movies isMenuOpened={isMenuOpened} onMenuClick={handleClickOnMenu} isLoggedIn={isLoggedIn}/>}></Route>
      <Route path="/saved-movies" element={<SavedMovies isMenuOpened={isMenuOpened} onMenuClick={handleClickOnMenu} isLoggedIn={isLoggedIn}/>}></Route>
      <Route path="/profile" element={<Profile isMenuOpened={isMenuOpened} onMenuClick={handleClickOnMenu} isLoggedIn={isLoggedIn}/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/signin" element={<Login/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>)
}

export default App;
