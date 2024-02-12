import { NavLink } from 'react-router-dom';

function FormLink(props) {
  return(
    <NavLink to={props.address} className={`form__link ${props.isAuth ? 'form__link_auth' : 'form__link_profile'}`}>{props.linkText}<span className='form__link_span'>{props.linkButton}</span></NavLink>
  )
}

export default FormLink;