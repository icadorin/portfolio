import React from 'react';
import '../../styles/global.css';
import '../../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="easter-egg">
        <div className="serial-number">RB28DETT Z2
          <div className="tooltip">
            RB28DETT Z2 é um easter egg que faz referência ao motor do carro
            Nissan Skyline R34 Z-TUNE.
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
