import React from "react";
import PlanetImage from "./PlanetImage";

function SinglePlanet({ planet, open }) {
  const [info, setInfo] = React.useState("overview");

  const handleChange = (e) => {
    setInfo(e.target.value);
  };

  const planetName = planet.name.toLowerCase();

  return (
    <section className="single-planet">
      <div className="single-planet__top">
        <div className="planet-ilustration">
          <PlanetImage info={info} planet={planet} />
        </div>
        <div className="planet-info">
          <div className="planet-info__top">
            <h2 className="planet-info__title fade-in">{planet.name}</h2>

            <p
              className={`plant-info__description plant-info__description-${info}`}
            >
              {planet[info].content}
            </p>
            <p className="planet-info__source">
              Source :
              <a
                href={planet.overview.source}
                className="planet-info__source-link"
              >
                Wikipedia
              </a>
              <span className="planet-info__sourse-icon"></span>
            </p>
          </div>
          <div className="button-area">
            <div className="button-area__button">
              <input
                className={`button-area__button-input button-area__button-input_type_${planetName}`}
                type="radio"
                id="overview"
                name="info"
                value="overview"
                onChange={handleChange}
                checked={info === "overview"}
              />
              <label className="button-area__button-label" htmlFor="overview">
                {" "}
                <span className="button-area__button-label-num">01</span>{" "}
                Overview
              </label>
            </div>
            <div className="button-area__button">
              <input
                className={`button-area__button-input button-area__button-input_type_${planetName}`}
                type="radio"
                id="structure"
                name="info"
                value="structure"
                onChange={handleChange}
                checked={info === "structure"}
              />
              <label className="button-area__button-label" htmlFor="structure">
                {" "}
                <span className="button-area__button-label-num">02</span>{" "}
                Internal Structure
              </label>
            </div>
            <div className="button-area__button">
              <input
                className={`button-area__button-input button-area__button-input_type_${planetName}`}
                type="radio"
                id="geology"
                name="info"
                value="geology"
                onChange={handleChange}
                checked={info === "geology"}
              />
              <label className="button-area__button-label" htmlFor="geology">
                {" "}
                <span className="button-area__button-label-num">03</span>{" "}
                Surface Geology
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="single-planet__bottom">
        <ul className="facts-grid">
          <li className="facts-grid__item">
            <p className="facts-grid__item-title">ROTATION TIME</p>
            <p className="facts-grid__item-fact">{planet.rotation}</p>
          </li>
          <li className="facts-grid__item">
            <p className="facts-grid__item-title">REVOLUTION TIME</p>
            <p className="facts-grid__item-fact">{planet.revolution}</p>
          </li>
          <li className="facts-grid__item">
            <p className="facts-grid__item-title">RADIUS</p>
            <p className="facts-grid__item-fact">{planet.radius}</p>
          </li>
          <li className="facts-grid__item">
            <p className="facts-grid__item-title">AVERAGE TEMP.</p>
            <p className="facts-grid__item-fact">{planet.temperature}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SinglePlanet;
