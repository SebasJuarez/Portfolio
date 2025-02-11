import React from 'react'
import "./Home.css"
import SolarSystem from '../SolarSystem.jsx'


function Home () {
  return (
    <div className="Home">
        <h1 className='titulo'>Soy SebasJuarez</h1>
        <p className='info'>Presiona cualquiera de los planetas para saber más de mí</p>
      <SolarSystem />
    </div>
  )
}

export default Home