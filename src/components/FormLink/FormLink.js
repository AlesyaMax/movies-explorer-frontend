import { NavLink } from 'react-router-dom';

function FormLink(props) {
  return(
    <NavLink to={props.address} className={`form-link ${props.additionalLinkClass}`}>{props.linkText}<span className='form-link__span'>{props.linkButton}</span></NavLink>
  )
}

export default FormLink;