import React, { useEffect, useState } from 'react';
import './About.css';
import python from '../../assets/python.png';
import c from '../../assets/c++.png';
import js from '../../assets/js.png';
import java from '../../assets/java.png';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`about-container ${animate ? 'animate' : ''}`}>
      <h1 className="about-item about-title">Creemos algo impresionante!</h1>
      <h2 className="about-item about-sub">¿Quién soy?</h2>
      <p className="about-item about-paragraph">
        Soy un estudiante de la Universidad del Valle de Guatemala y estoy estudiando Ciencias de la Computación. Amo programar porque se pueden crear cosas increíbles. Solo hay que tener un poco de imaginación. Soy programador de Frontend y Backend.
      </p>
      <h2 className="about-item about-sub">Lenguajes en los que puedo programar</h2>
      <table>
        <tr>
          <td><img src={python} alt="Python" /></td>
          <td><img src={js} alt="JavaScript" /></td>
        </tr>
        <tr>
          <td><img src={java} alt="Java" /></td>
          <td><img src={c} alt="C++" /></td>
        </tr>
      </table>
      <p className="about-item about-paragraph">Estos son los lenguajes que conozco hasta ahora. Pero siempre puede que crezca mi repertorio.</p>
    </div>
  );
};

export default About;
