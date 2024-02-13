import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <>
      <nav className={`navigation_authorized ${props.isLoggedIn ? '' : 'navigation__link_hidden'} ${props.isMenuOpened && 'navigation_authorized_visible'}`}>
          <NavLink to="/" className={`navigation_authorized__link navigation__link navigation__link_main ${props.isMenuOpened ? '' : 'navigation__link_hidden'}`} >Главная</NavLink>
          <NavLink to="/movies" className="navigation_authorized__link navigation__link navigation__link_movies">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation_authorized__link navigation__link">Сохранённые фильмы</NavLink>
          <NavLink to="/profile" className="navigation_authorized__link navigation__link navigation__link_user">Аккаунт</NavLink>
        </nav>

      <nav className={`navigation_unauthorized ${props.isLoggedIn && 'navigation_hidden'}`}>
          <NavLink to="/signup" className="navigation_unauthorized__link navigation__link navigation__link_signup">Регистрация</NavLink>
          <NavLink to="/signin" className="navigation_unauthorized__link navigation__link navigation__link_signin">Войти</NavLink>
      </nav>
    </>
  )
}

export default Navigation;
