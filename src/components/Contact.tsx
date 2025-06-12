import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactLinks } from '../data/contactLinks';
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
          className="github-g-icon"
          href={contactLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={20} />
        </a>
        <a
          className="linkedin-icon"
          href={contactLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={20} />
        </a>
      </div>
      <a href={`mailto:${contactLinks.email}`} className="contact-email">
        {contactLinks.email}
      </a>
    </section>
  );
};

export default Contact;
