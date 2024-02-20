function SearchForm(props) {
  return (
    <form className='search-form'>
      <input className='search-form__input' placeholder='Фильм' required></input>
      <button className='search-form__button'></button>
    </form>
  )
}

export default SearchForm;