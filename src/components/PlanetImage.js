import React from "react";

    return (
      <img
        className="planet-ilustration__img"
        src={planet.images.planet}
        alt={`${planet.name} overview img`}
      />
    );
  } else if (info === "structure") {
    return (
      <img
        className="planet-ilustration__img"
        src={planet.images.internal}
        alt={`${planet.name} internal structure img`}
      />
    );
  } else {
    return (
      <>
        <img
          className="planet-ilustration__img"
          src={planet.images.planet}
          alt={`${planet.name} internal structure img`}
        />
        <img
          className="planet-ilustration__img-tooltip"
          src={planet.images.geology}
          alt={`${planet.name} internal structure img`}
        />
      </>
    );
  }
}

export default PlanetImage;
