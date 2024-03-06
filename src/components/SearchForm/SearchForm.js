import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {  
  const [searchRequest, setSearchRequest] = useState("");
  const [searchSavedRequest, setSearchSavedRequest] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isFilterOnSaved, setIsFilterOnSaved] = useState(false);

  const handleChange = (e) => {
    const {value} = e.target;
    if(!props.isOnlySavedMovies) {
      setSearchRequest(value.toLowerCase());
    } else {
      setSearchSavedRequest(value.toLowerCase());   
    }
  }

  const handleSearch = (request, filterState, key) => {
    if(request.length < 1) {
      setHasErrors(true);
    } else {
      setHasErrors(false);
      props.onSearchSubmit(request, filterState);
      if(key) {
        localStorage.setItem(`${key}`, request);
      } else {
        return;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(props.isOnlySavedMovies) {
      handleSearch(searchSavedRequest, isFilterOnSaved);
    } else {
      handleSearch(searchRequest, isFilterOn, "searchRequest");
    }
  };

  const handleGeneralFilterClick = () => {
    if(isFilterOn) {
      setIsFilterOn(false)
      localStorage.setItem("filterState", false);
      handleSearch(searchRequest, false, "searchRequest");
    } else {
      setIsFilterOn(true)
      localStorage.setItem("filterState", true);
      handleSearch(searchRequest, true, "searchRequest");
    };
  }

  const handleSavedFilterClick = () => {
    if(isFilterOnSaved) {
      setIsFilterOnSaved(false)
      handleSearch(searchSavedRequest, false);
    } else {
      setIsFilterOnSaved(true)
      handleSearch(searchSavedRequest, true);
    };
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
      <input className='search-form__input' type="text" placeholder='Фильм' required onChange={handleChange} value={props.isOnlySavedMovies ? searchSavedRequest : searchRequest}></input>
      <button className='search-form__button' type="submit"></button>
      <p className={`search-form__error ${hasErrors ? "search-form__error_visible" : ""}`}>Нужно ввести ключевое слово</p>
      <FilterCheckbox isFilterOn={isFilterOn} isFilterOnSaved={isFilterOnSaved} onFilterClick={handleGeneralFilterClick} onSavedFilterClick={handleSavedFilterClick} isOnlySavedMovies={props.isOnlySavedMovies}/>
    </form>
  )
}

export default SearchForm;