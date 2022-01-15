function Buttons(props) {
  return (
    <div className="button-area">
      <div className="button-area__button">
        <input
          className={`button-area__button-input button-area__button-input_type_${props.planetName}`}
          type="radio"
          id="overview"
          name="info"
          value="overview"
          onChange={props.handleChange}
          checked={props.info === "overview"}
        />
        <label className="button-area__button-label" htmlFor="overview">
          {" "}
          <span className="button-area__button-label-num">01</span> Overview
        </label>
      </div>
      <div className="button-area__button">
        <input
          className={`button-area__button-input button-area__button-input_type_${props.planetName}`}
          type="radio"
          id="structure"
          name="info"
          value="structure"
          onChange={props.handleChange}
          checked={props.info === "structure"}
        />
        <label
          className="button-area__button-label button-area__button-label_type_structure"
          htmlFor="structure"
        >
          {" "}
          <span className="button-area__button-label-num">02</span>
        </label>
      </div>
      <div className="button-area__button">
        <input
          className={`button-area__button-input button-area__button-input_type_${props.planetName}`}
          type="radio"
          id="geology"
          name="info"
          value="geology"
          onChange={props.handleChange}
          checked={props.info === "geology"}
        />
        <label
          className="button-area__button-label button-area__button-label_type_surface"
          htmlFor="geology"
        >
          {" "}
          <span className="button-area__button-label-num">03</span> Surface
        </label>
      </div>
    </div>
  );
}

export default Buttons;
