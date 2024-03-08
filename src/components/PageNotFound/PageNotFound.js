function PageNotFound(props) {
  function handleBackRedirection() {
    window.history.back();
  }

  return(
    <main className='page-not-found'>
      <h1 className='page-not-found__code'>404</h1>
      <p className='page-not-found__message'>Страница не найдена</p>
      <button className='page-not-found__redirection' type="button" onClick={handleBackRedirection}>Назад</button>
    </main>
  )
}

export default PageNotFound;