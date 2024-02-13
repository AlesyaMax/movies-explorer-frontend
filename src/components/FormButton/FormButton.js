function FormButton(props) {
  return (
    <button className={`${props.isSubmitButton && 'button_submit'} ${props.additionalButtonClass}`}>{props.buttonText}</button>
  )
}

export default FormButton;