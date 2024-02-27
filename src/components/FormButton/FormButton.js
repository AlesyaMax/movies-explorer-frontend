function FormButton(props) {
  return (
    <button className={`button ${props.isDisabled && 'button_disabled'} ${props.additionalButtonClass}`} type={props.type} disabled={props.isDisabled}>{props.buttonText}</button>
  )
}

export default FormButton;