import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
          <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <p className='footer__copyright'>© 2024</p>
          <nav className='footer_links'>
            <a href='https://practicum.yandex.ru/' target="blank" className='footer_links__item'>Яндекс.Практикум</a>
            <a href='https://github.com/' target="blank" className='footer_links__item'>Github</a>
          </nav>
      </div>
    )
  }
}

export default Footer;
