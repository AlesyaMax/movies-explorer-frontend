function FormButton(props) {
  return (
    <button className={`button ${props.isDisabled && 'button_disabled'} ${props.additionalButtonClass}`} type={props.type}>{props.buttonText}</button>
  )
}

export default FormButton;