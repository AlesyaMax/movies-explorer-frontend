function NavTab(props) {
    return (
      <ul className={`navtab ${props.additionalClass}`}>
        {props.pointsSet.map((point) => (
          <li className={`navtab__point ${point.additionalPointClass}`}>
            <a key={point.id} className={`navtab__link ${point.additionalLinkClass}`} href={point.link}>{point.name}</a>
          </li>
        ))}
      </ul>
    )
}

export default NavTab;