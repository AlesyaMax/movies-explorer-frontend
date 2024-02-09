import React from 'react';
import headerLogo from "../../images/logo.svg";
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <div className='header'>
      <img className='header__logo' alt="логотип" src={headerLogo}/>
      <div className='header__overlay'></div>
      <Navigation></Navigation>
      <button className=" header__hamburger-menu header__hamburger-menu_closed header__hamburger-menu_visible"></button>
    </div>
  );
}

export default Header;