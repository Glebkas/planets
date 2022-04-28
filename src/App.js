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
                ></Header>
                <Helmet>
                    <meta
                        property='og:image'
                        content='https://repository-images.githubusercontent.com/444030332/fcfa2b23-4d3c-4ff1-ab31-a3cf3619785d'
                    />
                </Helmet>
                <Header />
                <SinglePlanet planet={planet} open={open} />
            </div>
        </div>
    );
}

export default App;
