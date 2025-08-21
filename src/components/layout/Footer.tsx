import React from 'react';
import '../../styles/global.css';
import '../../styles/footer.css';
import { Lightbulb } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="easter-egg">
        <div className="serial-number">
          RB26DETT Z2
          <div className="tooltip">
            <span className="tooltip-icon">
              <Lightbulb size={20} />
            </span>
            <div className="tooltip-content">
              Você encontrou um easter egg!
              <br />
              Referência ao motor{' '}
              <strong className="engine"> RB26DETT Z2 </strong>
              do <span className="car-model">Nissan Skyline R34 Z-TUNE</span>.
            </div>
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
