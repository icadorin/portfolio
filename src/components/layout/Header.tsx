import React, { useState, useEffect } from 'react';
import { CustomHamburgerIcon } from '../icons/CustomHamburgerIcon';
import { CustomCloseIcon } from '../icons/CustomCloseIcon';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { HeaderProps } from '../../types/header';
import { navItems } from './navItems';
import '../../styles/header.css';

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const { isVisible, hasShadow, isAtTop, setIsProgrammaticScroll } =
    useHeaderScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  const navigateToSection = (sectionId: string) => {
    setIsProgrammaticScroll(true);
    scrollToSection(sectionId);

    if (sectionId !== 'resume') {
      setTimeout(() => setIsProgrammaticScroll(false), 1000);
    }
  };

  const handleMenuClick = (sectionId: string) => {
    document.body.classList.remove('no-scroll');
    setIsMenuOpen(false);
    navigateToSection(sectionId);
  };

  return (
    <header
      className={`header ${isVisible ? 'visible' : 'hidden'} ${
        hasShadow ? 'shadow' : ''
      } ${isAtTop ? 'at-top' : ''}`}
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
