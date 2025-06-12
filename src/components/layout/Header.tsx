import React, { useState } from 'react';
import { CustomHamburgerIcon } from '../icons/CustomHamburgerIcon';
import { CustomCloseIcon } from '../icons/CustomCloseIcon';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { HeaderProps } from '../../types/header';
import { navItems } from './navItems';
import '../../styles/header.css';

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const { isVisible, hasShadow, setIsProgrammaticScroll } = useHeaderScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = (sectionId: string) => {
    setIsProgrammaticScroll(true);
    scrollToSection(sectionId);

    if (sectionId !== 'resume') {
      setTimeout(() => setIsProgrammaticScroll(false), 1000);
    }
  };

  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    navigateToSection(sectionId);
  };

  return (
    <header
      className={`header ${isVisible ? 'visible' : 'hidden'} ${hasShadow ? 'shadow' : ''}`}
    >
      <button
        className="hamburger-btn"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Abrir menu"
      >
        {isMenuOpen ? <CustomCloseIcon /> : <CustomHamburgerIcon />}
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(({ id, label, isPrimary }) => (
          <button
            key={id}
            className={isPrimary ? 'btn-resume' : ''}
            onClick={() => handleMenuClick(id)}
            aria-label={`Ir para ${label}`}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
