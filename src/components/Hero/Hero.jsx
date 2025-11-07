import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hola, soy Sebas.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Desarrollo, diseño e inteligencia artificial que conecta ideas y emociones.
        </motion.p>

        <motion.a
          href="#projects"
          className="hero-cta"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explorar proyectos ⟶
        </motion.a>
      </div>

      <div className="hero-bg">
        <div className="orb" />
      </div>
    </section>
  );
}
