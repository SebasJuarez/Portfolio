import React, { useEffect, useState } from 'react';
import './Proyects.css';
import { Link } from 'react-router-dom';

const Proyects = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`contact-container ${animate ? 'animate' : ''}`}>
      <h1 className="contact-item contact-title">¿Quiéres conocer lo que he hecho?</h1>
      <p className="contact-item contact-paragraph">Estos son todos los proyectos en los que he participado/creado</p>
      <h2 className="contact-item contact-sub"></h2>
      <ul className="project-list">
        <li>
          <a href="https://lab4-753da.web.app" className="contact-item contact-sub">Imagen de la Luna</a>
        </li>
        <p className="contact-paragraph1">Una imagen de la luna solo utilizando lenguaje CSS</p>
        <li>
          <a href="https://genshinmemory-2a263.web.app"className="contact-item contact-sub">Juego de Memoria</a>
        </li>
        <p className="contact-paragraph1">Juego de memoria usando React</p>
        <li>
          <a href="https://proyecto1-sytw-5b6d8.web.app"className="contact-item contact-sub">Pagina de TicketASA</a>
        </li>
        <p className="contact-paragraph1">Copia de la Pagina de Ticket Asa usando React con Vite</p>
        <li>
          <a href="https://lab9sytw.web.app"className="contact-item contact-sub">Calculadora Basica</a>
        </li>
        <p className="contact-paragraph1">Calculadora basica usando React</p>
        <li>
          <a href="/"className="contact-item contact-sub">Portfolio</a>
        </li>
        <p className="contact-paragraph1">Portafolio hecho en React</p>
        <li>
          <a href="https://visitourlands.netlify.app"className="contact-item contact-sub">Visit Our Lands</a>
        </li>
        <p className="contact-paragraph1">Una pagina de recomendaciones de Guatemala</p>
      </ul>
    </div>
  );
};

export default Proyects;
