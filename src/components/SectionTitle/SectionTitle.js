function SectionTitle(props) {
  return (
    <h2 className={`section-title ${props.additionalClass}`}>{props.sectionTitle}</h2>
  )
}

export default SectionTitle;