import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {identifyError} from '../../utils/input-validation';


function InputElement(props) {
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkValidity = (e) => {
    if(!e.target.validity.valid) {
      setHasErrors(true);
      identifyError(e.target.validity, setErrorMessage)
    } else {
      setHasErrors(false);
    }
  }

  const handleChange = (e) => {
    props.onChange(e);
    checkValidity(e);
  }

  return (
    <div className={`input-element ${props.inputElementClass}`}>
      <label className={`label ${props.additionalLabelClass}`} for={props.id}>{props.label}</label>
      <input 
      className={`input ${props.hasSecretValue && 'input_secret'} ${props.additionalInputClass}`} 
      id={props.id}
      name={props.name}
      type={props.type} 
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder} 
      required 
      disabled={props.isDisabled}
      onChange={handleChange}
      value={props.value}
      ></input>
      {hasErrors && <ErrorMessage hasErrors={hasErrors} errorMessage={errorMessage}></ErrorMessage>}
    </div>
  )
}

export default InputElement;