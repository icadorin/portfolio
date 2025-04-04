import React from "react";
import { GitHub, LinkedIn } from '@mui/icons-material';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-contact">Contato</h2>
      <div className="link-format">
        <a
          className="linkedin-icon"
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn sx={{ fontSize: 25, color: 'white' }} />
        </a>
        <a
          className="github-g-icon"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ fontSize: 25, color: 'white' }} />
        </a>
      </div>
      <p className="contact-email">email_bolado34@gmail.com</p>
    </section>
  );
};

export default Contact;
