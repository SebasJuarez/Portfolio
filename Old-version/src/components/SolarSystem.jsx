import React, { useState } from 'react';
import './SolarSystem.css';
import Planet from './Planet.jsx';

const SolarSystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetName);
  };

  return (
    <div className="solar-system">
      <div className="sun"></div>
      <Planet name="Earth" orbitDuration={12} orbitRadius={300} title="Sobre Mí" link="/sobre-mí" onClick={() => handlePlanetClick('earth')} />
      <Planet name="Mars" orbitDuration={14} orbitRadius={300} title="Contactame" link="/contacto" onClick={() => handlePlanetClick('mars')} />
      <Planet name="Venus" orbitDuration={16} orbitRadius={300} title="Mi Trabajo" link="/mi-trabajo" onClick={() => handlePlanetClick('venus')} />

      {selectedPlanet && (
        <div className="planet-info">
          {selectedPlanet === 'earth' && (
            <>
              <h2>Proyectos en la Tierra</h2>
              <p>Descripción de tus proyectos en la Tierra.</p>
              <a href="/proyectos-tierra">Ir a la página de proyectos en la Tierra</a>
            </>
          )}
          {selectedPlanet === 'mars' && (
            <>
              <h2>Proyectos en Marte</h2>
              <p>Descripción de tus proyectos en Marte.</p>
              <a href="/proyectos-marte">Ir a la página de proyectos en Marte</a>
            </>
          )}
          {selectedPlanet === 'venus' && (
            <>
              <h2>Proyectos en Venus</h2>
              <p>Descripción de tus proyectos en Venus.</p>
              <a href="/proyectos-venus">Ir a la página de proyectos en Venus</a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SolarSystem;
