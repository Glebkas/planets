import React from "react";

function PlanetImage(props) {
  if (props.info === "overview") {
    return (
      <img
        className="planet-ilustration__img"
        src={props.planet.images.planet}
        alt={`${props.planet.name} overview img`}
      />
    );
  } else if (props.info === "structure") {
    return (
      <img
        className="planet-ilustration__img"
        src={props.planet.images.internal}
        alt={`${props.planet.name} internal structure img`}
      />
    );
  } else {
    return (
      <>
        <img
          className="planet-ilustration__img"
          src={props.planet.images.planet}
          alt={`${props.planet.name} internal overview img`}
        />
        <img
          className="planet-ilustration__img-tooltip"
          src={props.planet.images.geology}
          alt={`${props.planet.name} internal surface img`}
        />
      </>
    );
  }
}

export default PlanetImage;
