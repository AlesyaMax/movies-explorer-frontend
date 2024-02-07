import React from 'react';
import { NavLink } from 'react-router-dom';

class NavTab extends React.Component {
  render() {
    return (
      <nav className='navtab'>
        <NavLink to="" className="navtab__link">О проекте</NavLink>
        <NavLink to="" className="navtab__link">Технологии</NavLink>
        <NavLink to="" className="navtab__link">Студент</NavLink>
      </nav>
    )
  }
}

export default NavTab;