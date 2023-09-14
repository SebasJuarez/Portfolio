import React, { useEffect, useState } from 'react';
import './Contact.css';
import instagramIcon from '../../assets/instagramIcon.png';
import githubIcon from '../../assets/githubIcon.png';
import emailIcon from '../../assets/emailIcon.png';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`contact-container ${animate ? 'animate' : ''}`}>
      <h1 className="contact-item contact-title">¿Dónde me puedes encontrar?</h1>
      <p className="contact-item contact-paragraph">Si tienes ganas de hacer algo nuevo y no sabes como empezar, estoy aqui dispuesto para ayudar! Solo tienes que contactarme yo estaré dispuesto a hacer todo lo que pueda para que tu idea se vuelva realidad.</p>
      <h2 className="contact-item contact-sub">Estas son mis redes sociales</h2>
      <div className="social-icons">
      <a href="https://www.instagram.com/sebasjuarez_02/" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://github.com/SebasJuarez" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="mailto:juaressebastian@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={emailIcon} alt="Correo electrónico" />
      </a>
    </div>
    </div>
  );
};

export default Contact;
