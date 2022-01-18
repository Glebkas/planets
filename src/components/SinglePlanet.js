import React from "react";
import PlanetImage from "./PlanetImage";
import Buttons from "./Buttons";
import FactGrid from "./FactsGrid";

function SinglePlanet(props) {
  const [info, setInfo] = React.useState("overview");

  const handleChange = (e) => {
    setInfo(e.target.value);
  };

  const planetName = props.planet.name.toLowerCase();

  return (
    <section className={props.open ? "single-planet_hide" : "single-planet"}>
      <div className="single-planet__top">
        <div className="planet-ilustration">
          <PlanetImage info={info} planet={props.planet} />
        </div>
        <div className="planet-info">
          <div className="planet-info__top">
            <h2 className="planet-info__title fade-in">{props.planet.name}</h2>
            <p
              className={`plant-info__description plant-info__description-${info}`}
            >
              {props.planet[info].content}
            </p>
            <p className="planet-info__source">
              Source :
              <a
                href={props.planet.overview.source}
                className="planet-info__source-link"
              >
                Wikipedia
              </a>
            </p>
          </div>
          <Buttons
            planetName={planetName}
            handleChange={handleChange}
            info={info}
          ></Buttons>
        </div>
      </div>

      <div className="single-planet__bottom">
        <FactGrid planet={props.planet} />
      </div>
    </section>
  );
}

export default SinglePlanet;
