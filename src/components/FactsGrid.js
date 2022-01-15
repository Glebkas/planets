function FactGrid(props) {
  return (
    <ul className="facts-grid">
      <li className="facts-grid__item">
        <p className="facts-grid__item-title">ROTATION TIME</p>
        <p className="facts-grid__item-fact">{props.planet.rotation}</p>
      </li>
      <li className="facts-grid__item">
        <p className="facts-grid__item-title">REVOLUTION TIME</p>
        <p className="facts-grid__item-fact">{props.planet.revolution}</p>
      </li>
      <li className="facts-grid__item">
        <p className="facts-grid__item-title">RADIUS</p>
        <p className="facts-grid__item-fact">{props.planet.radius}</p>
      </li>
      <li className="facts-grid__item">
        <p className="facts-grid__item-title">AVERAGE TEMP.</p>
        <p className="facts-grid__item-fact">{props.planet.temperature}</p>
      </li>
    </ul>
  );
}

export default FactGrid;
