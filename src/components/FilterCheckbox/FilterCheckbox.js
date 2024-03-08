import { useEffect } from 'react';
import checkboxOn from "../../images/smalltumb.svg";
import checkboxOff from "../../images/smalltumboff.svg";

function FilterCheckbox(props) {
  
  function handleFilterClick() {
    if(!props.isOnlySavedMovies) {
      props.onFilterClick();
    } else {
      props.onSavedFilterClick();
    }
  };

  function setFilterStatus() {
    if(!props.isOnlySavedMovies) {
      return props.isFilterOn;
    } else {
      return props.isFilterOnSaved;
    }
  }

  useEffect(() => {
    setFilterStatus();
  }, [props.isFilterOn, props.isFilterOnSaved])

  return (
    <div className='filter' onClick={handleFilterClick}>
      <img className='filter__image' alt="чекбокс" src={setFilterStatus() ? checkboxOn : checkboxOff}></img>
      <p className='filter__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;