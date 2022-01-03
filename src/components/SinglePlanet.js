import React from "react";
// import data from "../utils/data";

function SinglePlanet({ planet, open }) {
  const [info, setInfo] = React.useState("overview");

  const handleChange = (e) => {
    console.log(e.target.id);
    setInfo(e.target.value);
  };

  return (
    <section className="single-planet">
      <div className="planet-ilustration">
        <div className="planet-ilustration__img" />
        <div
          // className="planet-ilustration__img planet-ilustration__img_type_iner"
          src=""
          alt=""
        />
        <div
          // className="planet-ilustration__img planet-ilustration__img_type_surface"
          src=""
          alt=""
        />
      </div>
      <div className="planet-info">
        <h2 className="planet-info__title">{planet.name}</h2>
        <p className="plant-info__description">{planet[info].content}</p>
        <p className="planet-info__source">
          Source :
          <a href={planet.overview.source} className="planet-info__source-link">
            Wikipedia
          </a>
          <span className="planet-info__sourse-icon"></span>
        </p>
        <div className="button-area">
          <div className="button-area__button">
            <input
              className="button-area__button-input"
              type="radio"
              id="overview"
              name="info"
              value="overview"
              onChange={handleChange}
              checked={info === "overview"}
            />
            <label className="button-area__button-label" htmlFor="overview">
              {" "}
              <span className="button-area__button-label-num">01</span> Overview
            </label>
          </div>
          <div className="button-area__button">
            <input
              className="button-area__button-input"
              type="radio"
              id="structure"
              name="info"
              value="structure"
              onChange={handleChange}
              checked={info === "structure"}
            />
            <label className="button-area__button-label" htmlFor="structure">
              {" "}
              <span className="button-area__button-label-num">02</span> Internal
              Structure
            </label>
          </div>
          <div className="button-area__button">
            <input
              className="button-area__button-input"
              type="radio"
              id="geology"
              name="info"
              value="geology"
              onChange={handleChange}
              checked={info === "geology"}
            />
            <label className="button-area__button-label" htmlFor="geology">
              {" "}
              <span className="button-area__button-label-num">03</span> Surface
              Geology
            </label>
          </div>

          {/* <input
            name="detail"
            value="structure"
            id="1"
            onChange={handleChange}
            checked={detail === "structure"}
            className={`button-area__button ${
              isActive ? "button-area__button_active" : " "
            }`}
          >
            <span className="button-area__button-num">02</span> Internal
            Structure
          </input>
          <input
            value="geology"
            id="2"
            checked={detail === "geology"}
            onChange={handleChange}
            className={`button-area__button ${
              isActive ? "button-area__button_active" : ""
            }`}
          >
            <span className="button-area__button-num">03</span> Surface Geology
          </input> */}
        </div>
      </div>
      <div className="facts-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default SinglePlanet;
