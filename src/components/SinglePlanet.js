import React from "react";
import PlanetImage from "./PlanetImage";
import Buttons from "./Buttons";
import FactGrid from "./FactsGrid";

function SinglePlanet({ planet, open }) {
  const [info, setInfo] = React.useState("overview");

  const handleChange = (e) => {
    setInfo(e.target.value);
  };

  // const[buttonName, setButtonName] = React.useState()

  // const handleScreenSize =()=>{
  //   setButtonName
  // }

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
          <Buttons
            planetName={planetName}
            handleChange={handleChange}
            info={info}
          ></Buttons>
        </div>
      </div>

      <div className="single-planet__bottom">
        <FactGrid planet={planet} />
      </div>
    </section>
  );
}

export default SinglePlanet;
