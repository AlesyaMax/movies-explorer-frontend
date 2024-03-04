import {errorMessages} from "./constants";

export const identifyError = (validity, errorMessageSetter) => {
  if(validity.typeMismatch) {
    errorMessageSetter(errorMessages.wrongType)
    return;
  } 
  if(validity.tooLong) {
    errorMessageSetter(errorMessages.tooLong)
    return;
  }
  if(validity.tooShort) {
    errorMessageSetter(errorMessages.tooShort)
  }
}