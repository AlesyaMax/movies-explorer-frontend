import {ERROR_MESSAGES} from "./constants";

export const identifyError = (validity, errorMessageSetter) => {
  if(validity.typeMismatch) {
    errorMessageSetter(ERROR_MESSAGES.WRONG_TYPE)
    return;
  } 
  if(validity.tooLong) {
    errorMessageSetter(ERROR_MESSAGES.TOO_LONG)
    return;
  }
  if(validity.tooShort) {
    errorMessageSetter(ERROR_MESSAGES.TOO_SHORT)
  }
}