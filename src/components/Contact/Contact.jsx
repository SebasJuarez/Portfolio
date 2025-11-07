import React from 'react';
import './Contact.css';

export default function Contact(){
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner container">
        <h2>¿Listo para crear algo increíble?</h2>
        <p>Hablemos.</p>

        <div className="socials">
          <a href="https://github.com/SebasJuarez" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social">
            {/* GitHub SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.17 9.07 7.57 10.54.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.08.67-3.73-1.49-3.73-1.49-.5-1.28-1.23-1.62-1.23-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.53.22 2.66.11 2.94.7.78 1.13 1.77 1.13 2.98 0 4.25-2.59 5.18-5.06 5.46.39.34.73 1.01.73 2.04 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.76.53C19.08 20.82 22.25 16.65 22.25 11.75 22.25 5.48 17.27.5 12 .5z" fill="currentColor" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-juarez-b76062274/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social">
            {/* LinkedIn SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" d="M4.983 3.5A2.25 2.25 0 102.5 5.983 2.25 2.25 0 004.983 3.5zM3 8.25h3.95V21H3V8.25zM9.5 8.25H13.25v1.74h.05c.52-.99 1.79-2.03 3.68-2.03 3.94 0 4.67 2.59 4.67 5.95V21h-3.95v-5.67c0-1.35-.02-3.09-1.89-3.09-1.89 0-2.18 1.48-2.18 3v5.76H9.5V8.25z" fill="currentColor"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/sebasjuarez_02/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social">
            {/* Instagram SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm5-.75a1.125 1.125 0 11-1.125-1.125A1.125 1.125 0 0117 7.75z" fill="currentColor"/>
            </svg>
          </a>

          <a href="mailto:juaressebastian@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="social">
            {/* Email SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <p className="copyright">© {new Date().getFullYear()} Sebas</p>
      </div>
    </footer>
  );
}
