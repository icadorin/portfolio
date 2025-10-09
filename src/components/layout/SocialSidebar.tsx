import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactLinks } from '@data-sections/contactLinks';

import '@styles/social-sidebar.css';

const SocialSidebar: React.FC = () => {
  return (
    <div className="sidebarContainer">
      <a
        href={contactLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink"
      >
        <FiGithub size={20} />
      </a>
      <a
        href={contactLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink"
      >
        <FiLinkedin size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;
