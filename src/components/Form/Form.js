import logo from '../../images/logo.svg';

function Form(props) {
  return (
    <div className='form_container'>
      {props.withLogo && (<img className="form_container__logo" alt="лого" src={logo}/>)}
      <h2 className={`form_container__title ${props.additionalTitleClass}`}>{props.title}</h2>
      <form className='form_container__form'>
        {props.children}
      </form>
    </div>
  )
}

export default Form;