import React from 'react';
import headerLogo from "../../images/logo.svg";
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <div className='header'>
      <img className='header__logo' alt="логотип" src={headerLogo} onClick={props.onLogoClick}/>
      <div className={`header__overlay ${props.isMenuOpened && 'header__overlay_visible'}`}></div>
      <Navigation isLoggedIn={props.isLoggedIn} isMenuOpened={props.isMenuOpened}></Navigation>
      {props.isLoggedIn && (<button className={`header__hamburger-menu header__hamburger-menu_visible ${props.isMenuOpened ? 'header__hamburger-menu_opened' : 'header__hamburger-menu_closed'}`} onClick={props.onMenuClick}></button>)}
    </div>
  );
}

export default Header;