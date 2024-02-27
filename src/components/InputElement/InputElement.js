import {errorMessages} from "../../utils/constants";
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


function InputElement(props) {
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const identifyError = (validity) => {
    if(validity.typeMismatch) {
      setErrorMessage(errorMessages.wrongType)
      return;
    } 
    if(validity.tooLong) {
      setErrorMessage(errorMessages.tooLong)
      return;
    }
    if(validity.tooShort) {
      setErrorMessage(errorMessages.tooShort)
    }
  }

  const checkValidity = (e) => {
    if(!e.target.validity.valid) {
      setHasErrors(true);
      identifyError(e.target.validity)
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