import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
          <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <p className='footer__copyright'>© 2024</p>
          <nav className='footer_links'>
            <NavLink to='/' className='footer_links__item'>Яндекс.Практикум</NavLink>
            <NavLink to='/' className='footer_links__item'>Github</NavLink>
          </nav>
      </div>
    )
  }
}

export default Footer;
