import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTab(props) {
    return (
      <nav className={`navtab ${props.additionalClass}`}>
        {props.pointsSet.map((point) => (
          <p key={point.id} className={`navtab__link ${point.additionalClass}`}>{point.name}</p>
        ))}
      </nav>
    )
}

export default NavTab;