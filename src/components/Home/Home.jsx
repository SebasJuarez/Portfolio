import React from 'react';
import Hero from '../Hero/Hero.jsx';
import Projects from '../Projects/Projects.jsx';
import Stack from '../Stack/Stack.jsx';
import Contact from '../Contact/Contact.jsx';
import './Home.css';

export default function Home(){
  return (
    <main>
      <Hero />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}