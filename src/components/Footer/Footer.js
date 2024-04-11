import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
          <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <p className='footer__copyright'>© 2024</p>
          <nav className='footer__links'>
            <a href='https://practicum.yandex.ru/' target="blank" className='footer__link'>Яндекс.Практикум</a>
            <a href='https://github.com/' target="blank" className='footer__link'>Github</a>
          </nav>
      </footer>
    )
  }
}

export default Footer;
