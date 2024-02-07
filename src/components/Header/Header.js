import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from "../../images/logo.svg";
import hamburgerMenu from "../../images/menu.svg";
import closeMenu from "../../images/exit.svg";

function Header(props) {
  return (
    <div className='header'>
      <img className='header__logo' alt="логотип" src={headerLogo}/>
      <div className='header__overlay'></div>
      <nav className='header_menu_authorized'>
        <NavLink to="/" className="header__link header__link_authorized header__link_main header__link_hidden">Главная</NavLink>
        <NavLink to="/movies" className="header__link header__link_authorized header__link_movies header__link_hidden">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="header__link header__link_authorized header__link_saved-movies header__link_hidden">Сохранённые фильмы</NavLink>
        <NavLink to="/profile" className="header__link header__link_authorized header__link_user header__link_hidden">Аккаунт</NavLink>
      </nav>
      <nav className='header_menu_unauthorized'>
        <NavLink to="/signup" className="header__link header__link_signup">Регистрация</NavLink>
        <NavLink to="/signin" className="header__link header__link_signin">Войти</NavLink>
      </nav>
      <button className="header__hamburger-menu_button"><img className="header__hamburger-menu_img header__hamburger-menu_img" alt="меню" src={hamburgerMenu}/></button>
    </div>
  );
}

export default Header;