function InputElement(props) {
  return (
    <div className={`input-element ${props.inputElementClass}`}>
      <label className={`label ${props.additionalLabelClass}`} for={props.id}>{props.label}</label>
      <input className={`input ${props.hasSecretValue && 'input_secret'} ${props.additionalInputClass}`} id={props.id} type={props.type} placeholder={props.placeholder}>{props.inputValue}</input>
    </div>
  )
}

export default InputElement;