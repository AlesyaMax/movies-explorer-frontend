import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <>
      <nav className={`navigation navigation_authorized ${props.isLoggedIn ? '' : 'navigation__link_hidden'} ${props.isMenuOpened && 'navigation_authorized_visible'}`}>
          <NavLink to="/" className={`navigation__link_authorized navigation__link navigation__link_main ${props.isMenuOpened ? '' : 'navigation__link_hidden'}`} aria-current="page">Главная</NavLink>
          <NavLink to="/movies" className="navigation__link_authorized navigation__link navigation__link_movies" aria-current="page">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__link_authorized navigation__link" aria-current="page">Сохранённые фильмы</NavLink>
          <NavLink to="/profile" className="navigation__link_authorized navigation__link navigation__link_user">Аккаунт</NavLink>
        </nav>

      <nav className={`navigation navigation_unauthorized ${props.isLoggedIn && 'navigation_hidden'}`}>
          <NavLink to="/signup" className="navigation__link_unauthorized navigation__link navigation__link_signup">Регистрация</NavLink>
          <NavLink to="/signin" className="navigation__link_unauthorized navigation__link navigation__link_signin">Войти</NavLink>
      </nav>
    </>
  )
}

export default Navigation;
