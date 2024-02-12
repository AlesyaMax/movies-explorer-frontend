import logo from '../../images/logo.svg';

function Form(props) {
  return (
    <div className='form_container'>
      {props.isAuth && <img className="form_container__logo" alt="лого" src={logo}></img>}
      <h2 className={`form_container__title ${props.isAuth ? 'title_auth' : 'title_profile'}`}>{props.title}</h2>
      <form className='form_container__form'>
        {props.children}
        <p className='form_container__error-message'>{props.errorMessage}</p>
        <button className={`form_container__button ${props.isAuth ? 'button_auth' : 'button_profile'}`}>{props.buttonText}</button>
        {props.link}
      </form>
    </div>
  )
}

export default Form;