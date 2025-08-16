import React from 'react';
import '../../styles/global.css';
import '../../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="easter-egg">
        <div className="serial-number">
          RB26DETT Z2
          <div className="tooltip">
            <strong className="engine">RB26DETT Z2</strong> é um
            <span className="easter-egg-text"> easter egg </span>
            que faz referência ao motor do carro
            <span className="car-model"> Nissan Skyline R34 Z-TUNE</span>.
          </div>
        </div>
      </div>

      <div className="copy-right">
        <p>Desenvolvido por Israel &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
