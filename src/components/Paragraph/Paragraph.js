function Paragraph(props) {
  return (
    <p className={`paragraph ${props.additionalClass}`} onClick={props.onClickFunction}>{props.text}</p>
  )
}

export default Paragraph;