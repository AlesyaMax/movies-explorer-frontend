import logo from '../../images/logo.svg';

function Form(props) {
  return (
    <section className={`form_container ${props.additionalContainerClass}`}>
      {props.withLogo && (<img className="form_container__logo" alt="лого" src={logo}/>)}
      <h1 className={`form_container__title ${props.additionalTitleClass}`}>{props.title}</h1>
      <form className='form_container__form' onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </section>
  )
}

export default Form;