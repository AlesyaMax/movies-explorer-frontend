import checkBoxOn from "../../images/smalltumb.svg";
import checkBoxOff from "../../images/smalltumboff.svg";


function FilterCheckbox(props) {
  return (
    <div className='filter'>
      <img className='filter__image' alt="чекбокс" src={checkBoxOn}></img>
      <p className='filter__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;