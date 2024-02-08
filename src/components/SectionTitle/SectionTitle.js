function SectionTitle(props) {
  return (
    <h3 className={`section-title ${props.additionalClass}`}>{props.sectionTitle}</h3>
  )
}

export default SectionTitle;