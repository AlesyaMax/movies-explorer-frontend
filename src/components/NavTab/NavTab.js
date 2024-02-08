import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTab(props) {
    return (
      <nav className='navtab'>
        {props.pointsSet.map((point) => (
          <NavLink key={point.id} to={point.link} className={`navtab__link ${point.additionalClass}`}>{point.name}</NavLink>
        ))}
      </nav>
    )
}

export default NavTab;