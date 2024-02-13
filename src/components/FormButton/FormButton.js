function FormButton(props) {
  return (
    <button className={`${props.isSubmitButton && 'button_submit'} ${props.isDisabled && 'button_submit_disabled'} ${props.additionalButtonClass}`}>{props.buttonText}</button>
  )
}

export default FormButton;