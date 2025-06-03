import { FiGithub, FiLinkedin } from 'react-icons/fi';
import '../../styles/social-sidebar.css';

const SocialSidebar: React.FC = () => {
  return (
    <div className="sidebarContainer">
      <a
        href="https://github.com/icadorin"
        target="_blank"
        rel="noopener noreferrer"
        className="socialLink"
      >
        <FiGithub size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/israelmcadorin/"
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
