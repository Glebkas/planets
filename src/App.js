import React from "react";

import Header from "./components/Header";
import SinglePlanet from "./components/SinglePlanet";
import data from "./utils/data";

function App() {
  const mercury = data[0];
  const [planet, setPlanet] = React.useState(mercury);

  return (
    <>
      <div className="App">
        <div className="root">
          <Header setPlanet={setPlanet} />
          <SinglePlanet planet={planet} />
        </div>
      </div>
    </>
  );
}

export default App;
