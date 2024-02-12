import { NavLink } from 'react-router-dom';

function PageNotFound(props) {
  return(
    <main className='page-not-found'>
      <h1 className='page-not-found__code'>404</h1>
      <p className='page-not-found__message'>Страница не найдена</p>
      <NavLink to="/" className='page-not-found__redirection'>Назад</NavLink>
    </main>
  )
}

export default PageNotFound;