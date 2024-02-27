function MoreButton(props) {
  return(
    <div className='more-button-container'>
      <button className='more-button-container__button' type='button' onClick={props.onMoreButtonClick}>Ещё</button>
    </div>
  )
}

export default MoreButton;