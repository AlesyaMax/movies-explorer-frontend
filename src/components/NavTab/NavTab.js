function NavTab(props) {
    return (
      <nav className={`navtab ${props.additionalClass}`}>
        {props.pointsSet.map((point) => (
          <a key={point.id} className={`navtab__link ${point.additionalClass}`} href={point.link}>{point.name}</a>
        ))}
      </nav>
    )
}

export default NavTab;