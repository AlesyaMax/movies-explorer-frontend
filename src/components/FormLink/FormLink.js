import { NavLink } from 'react-router-dom';

function FormLink(props) {
  return(
    <NavLink to={props.address} className={`form__link ${props.additionalLinkClass}`}>{props.linkText}<span className='form__link_span'>{props.linkButton}</span></NavLink>
  )
}

export default FormLink;