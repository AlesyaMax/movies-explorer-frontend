function Paragraph(props) {
  return (
    <p className={`paragraph ${props.additionalClass}`}>{props.text}</p>
  )
}

export default Paragraph;