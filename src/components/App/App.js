import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

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
