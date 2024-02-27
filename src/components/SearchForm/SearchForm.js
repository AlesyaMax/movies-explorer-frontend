import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {  
  const [searchRequest, setSearchRequest] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const handleChange = (e) => {
    const {value} = e.target;
    setSearchRequest(value.toLowerCase());
  }

  const handleSearch = () => {
    if(searchRequest.length < 1) {
      setHasErrors(true);
    } else {
      setHasErrors(false);
      props.onSearchSubmit(searchRequest);
      localStorage.setItem("searchRequest", searchRequest);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  const handleFilterClick = () => {
    console.log("filter");
    if(isFilterOn === "true") {
      setIsFilterOn(false)
    } else {
      setIsFilterOn(true)
    };
    localStorage.setItem("filterState", isFilterOn);
    handleSearch();

  }

  useEffect(() => {
    const searchRequest = localStorage.getItem("searchRequest");
    const isFilterOn = localStorage.getItem("filterState");
    if (searchRequest && searchRequest.length > 0) {
      setSearchRequest(searchRequest)
      setIsFilterOn(isFilterOn);
    }
  }, [])

  return (
    <form className='search-form' onSubmit={handleSubmit} noValidate>
      <input className='search-form__input' type="text" placeholder='Фильм' required onChange={handleChange} value={searchRequest}></input>
      <button className='search-form__button' type="submit"></button>
      <p className={`search-form__error ${hasErrors ? "search-form__error_visible" : ""}`}>Нужно ввести ключевое слово</p>
      <FilterCheckbox isFilterOn={isFilterOn} onFilterClick={handleFilterClick}/>
    </form>
  )
}

export default SearchForm;