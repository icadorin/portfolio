import React, { useState, useRef, useEffect } from 'react';
import { CustomHamburgerIcon } from '../icons/CustomHamburgerIcon';
import { CustomCloseIcon } from '../icons/CustomCloseIcon';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { useMenuScrollControl } from '../../hooks/useMenuScrollControl';
import { HeaderProps } from '../../types/header';
import { navItems } from './navItems';
import '../../styles/header.css';

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const { isVisible, hasShadow, setIsProgrammaticScroll } = useHeaderScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useMenuScrollControl(isMenuOpen);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || !isMenuOpen) return;

    const handleScroll = () => {
      const buffer = 5;

      if (menu.scrollTop + menu.clientHeight >= menu.scrollHeight - buffer) {
        menu.scrollTop = menu.scrollHeight - menu.clientHeight;
      }

      if (menu.scrollTop <= buffer) {
        menu.scrollTop = 0;
      }
    };

    menu.addEventListener('scroll', handleScroll, { passive: true });
    return () => menu.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setIsProgrammaticScroll(true);
    scrollToSection(sectionId);

    if (sectionId !== 'resume') {
      setTimeout(() => setIsProgrammaticScroll(false), 1000);
    }
  };

  return (
    <header
      className={`header ${isVisible ? 'visible' : 'hidden'} ${hasShadow ? 'shadow' : ''}`}
    >
      <button
        className="hamburger-btn"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isMenuOpen ? <CustomCloseIcon /> : <CustomHamburgerIcon />}
      </button>

      <nav
        ref={menuRef}
        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map(({ id, label, isPrimary }) => (
          <button
            key={id}
            className={isPrimary ? 'btn-resume' : ''}
            onClick={() => navigateToSection(id)}
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
