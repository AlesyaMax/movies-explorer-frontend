import checkboxOn from "../../images/smalltumb.svg";
import checkboxOff from "../../images/smalltumboff.svg";

function FilterCheckbox(props) {
  return (
    <div className='filter' onClick={props.onFilterClick}>
      <img className='filter__image' alt="чекбокс" src={props.isFilterOn === "true" ? checkboxOn : checkboxOff}></img>
      <p className='filter__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;