import logo from '../../images/logo.svg';

function Form(props) {
  return (
    <section className={`form-container ${props.additionalContainerClass}`}>
      {props.withLogo && (<img className="form-container__logo" alt="лого" src={logo}/>)}
      <h1 className={`form-container__title ${props.additionalTitleClass}`}>{props.title}</h1>
      <form className='form-container__form' onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </section>
  )
}

export default Form;