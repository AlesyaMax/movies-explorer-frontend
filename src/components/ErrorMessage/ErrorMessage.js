function ErrorMessage(props) {
  return (
    <p className={`error-message ${props.hasErrors && 'error-message_visible'} ${props.additionalErrorClass}`}>{props.errorMessage}</p>
  )
}

export default ErrorMessage;