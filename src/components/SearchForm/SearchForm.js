import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <form className='search-form'>
      <input className='search-form__input' placeholder='Фильм' required></input>
      <button className='search-form__button' type="submit"></button>
      <FilterCheckbox checkboxIcon={props.checkboxIcon} onFilterClick={props.onFilterClick}/>
    </form>
  )
}

export default SearchForm;