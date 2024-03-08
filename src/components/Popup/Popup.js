function Popup(props) {


  return (
    <section className={`popup ${props.isPopupVisible ? "popup_visible" : ""}`}>
      <div className='popup__container'>
        <button className='popup__button' type="button" onClick={props.onClose} ></button>
        <h2 className='popup__title'>{props.title}</h2>
        <p className='popup__message'>{props.message}</p>
      </div>
    </section>
  )
}

export default Popup;