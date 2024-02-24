function FilterCheckbox(props) {
  return (
    <div className='filter' onClick={props.onFilterClick}>
      <img className='filter__image' alt="чекбокс" src={props.checkboxIcon}></img>
      <p className='filter__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;