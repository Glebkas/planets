import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import SinglePlanet from './components/SinglePlanet';
import data from './utils/data';

function App() {
    const mercury = data[0];
    const [planet, setPlanet] = React.useState(mercury);
    const [open, setOpen] = React.useState(false);

    function handleNavClick(planet) {
        setPlanet(planet);
        if (open) {
            setOpen(false);
        }
    }

    function handleHumburgerClick() {
        setOpen(!open);
    }

    return (
        <div className='App'>
            <div className='root'>
                <Header
                    setPlanet={setPlanet}
                    open={open}
                    handleHumburgerClick={handleHumburgerClick}
                    handleNavClick={handleNavClick}
                />

                <SinglePlanet planet={planet} open={open} />
            </div>
        </div>
    );
}

export default App;
