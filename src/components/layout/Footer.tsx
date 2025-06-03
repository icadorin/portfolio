import React from 'react';
import '../../styles/global.css';
import '../../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="easter-egg">
        <div className="serial-number">R34-Z-015</div>
      </div>

      <div className="copy-right">
        <p>Desenvolvido por Israel &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
