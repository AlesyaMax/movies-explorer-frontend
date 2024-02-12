function InputElement(props) {
  return (
    <>
      <label className='label' for={props.id}>{props.label}</label>
      <input className='input' id={props.id} type={props.type} placeholder={props.placeholder}>{props.inputValue}</input>
    </>
  )
}

export default InputElement;