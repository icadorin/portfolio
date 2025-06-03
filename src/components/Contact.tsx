import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import '../styles/global.css';
import '../styles/contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-contact">Contato</h2>
      <p className="contact-description">
        Caso tenha alguma dúvida ou queira entrar em contato, responderei com
        prazer assim que possível.
      </p>
      <div className="link-format">
        <a
          className="linkedin-icon"
          href="https://www.linkedin.com/in/israelmcadorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn sx={{ fontSize: 30 }} />
        </a>
        <a
          className="github-g-icon"
          href="https://github.com/icadorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ fontSize: 30 }} />
        </a>
      </div>
      <a href="mailto:cadorinisrael@gmail.com" className="contact-email">
        cadorinisrael@gmail.com
      </a>
    </section>
  );
};

export default Contact;
