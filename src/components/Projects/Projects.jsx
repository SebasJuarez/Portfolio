import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

// Import images from assets
import ImgVisit from '../../assets/VOL.png';
import ImgCalc from '../../assets/Calc.png';
import ImgDatabies from '../../assets/Databies.png';
import ImgMemory from '../../assets/Memoria.png';
import ImgLuna from '../../assets/luna.png';

// Projects with descriptions for modal
const sample = [
  { id: 1, title: 'Imagen de la Luna', tech: 'CSS puro', description: 'Una imagen de la luna solo utilizando lenguaje CSS', image: ImgLuna, github: '#', demo: 'https://lab4-753da.web.app' },
  { id: 2, title: 'Calculadora Basica', tech: 'React', description: 'Calculadora básica usando React', image: ImgCalc, github: '#', demo: 'https://lab9sytw.web.app' },
  { id: 3, title: 'Juego de Memoria', tech: 'React', description: 'Juego de memoria con cartas temáticas usando React', image: ImgMemory, github: '#', demo: 'https://genshinmemory-2a263.web.app' },
  { id: 4, title: 'Databies', tech: 'React • Vite', description: 'Aplicación diseñada para visualizar datos y tendencias de forma amigable', image: ImgDatabies, github: '#', demo: 'https://databies.netlify.app' },
  { id: 5, title: 'Visit Our Lands', tech: 'React • CSS', description: 'Página de recomendaciones turísticas de Guatemala con enfoque visual', image: ImgVisit, github: '#', demo: 'https://visitourlands.netlify.app' }
];

export default function Projects(){
  const trackRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [half, setHalf] = useState(0);

  // Measure half width for seamless loop
  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const measure = () => {
      // half is width of unique list (since we render list twice)
      const uniqueWidth = el.scrollWidth / 2;
      setHalf(uniqueWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Auto-scroll loop using Framer Motion controls
  useEffect(() => {
    if (!half) return;
    let stopped = false;
    const speed = 80; // px per second
    const run = async () => {
      while (!stopped) {
        const start = x.get();
        const distance = -half - start; // go to -half from current
        const duration = Math.abs(distance) / speed;
        await controls.start({ x: -half, transition: { duration, ease: 'linear' } });
        // jump back to 0 without visual gap
        controls.set({ x: 0 });
        x.set(0);
      }
    };
    run();
    return () => { stopped = true; controls.stop(); };
  }, [half]);

  const pause = () => controls.stop();
  const resume = () => {
    if (!half) return;
    // continue from current position
    const current = x.get();
    const speed = 80;
    const distance = -half - current;
    const duration = Math.abs(distance) / speed;
    controls.start({ x: -half, transition: { duration, ease: 'linear' } }).then(() => {
      controls.set({ x: 0 });
      x.set(0);
      // restart loop by triggering effect logic implicitly; we keep controls running in useEffect loop
    });
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="section-sub">Arrastra la banda para ver más ↔</p>

        <div className="conveyor-wrapper" onMouseEnter={pause} onMouseLeave={resume}>
          <motion.div
            className="conveyor"
            ref={trackRef}
            style={{ x }}
            animate={controls}
            drag="x"
            dragMomentum={false}
            dragElastic={0.001}
            onDragStart={pause}
            onDragEnd={() => {
              // keep x within [-half, 0] to avoid empty gaps
              const val = x.get();
              if (val < -half) x.set(-half);
              if (val > 0) x.set(0);
              resume();
            }}
          >
            {/* Duplicate list for seamless loop */}
            {[...sample, ...sample].map((p, idx) => (
              <div className="conveyor-item" key={idx}>
                <ProjectCard project={p} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
