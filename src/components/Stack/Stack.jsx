import React from 'react';
import './Stack.css';

const groups = [
  {
    title: 'IA',
    items: ['Modelos de IA', 'Python']
  },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Backend',
    items: ['.NET', 'C#', 'MongoDB', 'Supabase']
  },
  {
    title: 'Lenguajes',
    items: ['C++', 'Python']
  },
  {
    title: 'Data',
    items: ['Power BI']
  }
];

export default function Stack(){
  return (
    <section className="stack" id="stack">
      <div className="container stack-inner">
        <h2 className="section-title">Stack & Skills</h2>
        <p className="section-sub">Conozco estas herramientas hasta este momento! Me mantengo siempre aprendiendo.</p>

        <div className="stack-grid">
          {groups.map((g) => (
            <article className="stack-card" key={g.title} aria-label={g.title}>
              <h3 className="stack-card-title">{g.title}</h3>
              <div className="stack-badges">
                {g.items.map((it) => (
                  <span key={it} className="tool" title={it}>{it}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
