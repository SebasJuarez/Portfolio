import React, { useState } from 'react';
import './Planet.css';

const Planet = ({ name, orbitDuration, orbitRadius, title, link }) => {
  const [zoomed, setZoomed] = useState(false);
  const [paused, setPaused] = useState(false);

  const toggleZoom = () => {
    setZoomed(!zoomed);
    if (!zoomed) {
      setPaused(!paused); // Pausar o reanudar la animación al hacer clic en el planeta
    }
  };

  const resumeAnimation = () => {
    setZoomed(false);
    setPaused(false); // Reanudar la animación cuando se hace clic en el botón de zoom
  };

  return (
    <div
      className={`planet ${name.toLowerCase()} ${zoomed ? 'zoomed' : ''}`}
      onClick={toggleZoom}
      style={{
        animationDuration: `${orbitDuration}s`,
        animationPlayState: paused ? 'paused' : 'running',
      }}
    >
      {/* Imagen del planeta */}
      <img
        src={`./src/assets/${name.toLowerCase()}.png`}
        alt={name}
        className={`planet-image ${zoomed ? 'zoomed' : ''}`}
      />
      {/* Botón de zoom */}
      {zoomed && (
        <div className="zoom-button" onClick={resumeAnimation}>
          <span>Reanudar animación</span>
        </div>
      )}
      {zoomed && paused && (
        <div className="planet-details">
            <h2 className={`planet-title ${name.toLowerCase()}-title`}>{title}</h2>
            <button className={`planet-link ${name.toLowerCase()}-link`} onClick={() => window.location.href = link}>Ir a la página</button>
        </div>
        )}
    </div>
  );
};

export default Planet;
