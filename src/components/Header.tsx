import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomHamburgerIcon from "./icons/CustomHamburgerIcon";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef<number>(0);
  const isProgrammaticScroll = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current || currentScrollY < 30) {
        setIsVisible(true);
      }
      setHasShadow(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (sectionId: string) => {
    if (sectionId === "resume") {
      setIsVisible(true);
      setHasShadow(false);
    } else {
      setIsVisible(false);
    }
    setIsMenuOpen(false);
    isProgrammaticScroll.current = true;
    scrollToSection(sectionId);
    setTimeout(() => { isProgrammaticScroll.current = false; }, 1000);
  };

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"} ${hasShadow ? "shadow" : ""}`}>

      <button
        className="hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        {isMenuOpen ? <FaTimes /> : <CustomHamburgerIcon />}
      </button>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <button onClick={() => handleMenuClick("about")}>Sobre Mim</button>
        <button onClick={() => handleMenuClick("experience")}>Experiência</button>
        <button onClick={() => handleMenuClick("projects")}>Projetos</button>
        <button onClick={() => handleMenuClick("contact")}>Contato</button>
        <button className="btn-resume" onClick={() => handleMenuClick("resume")}>Resumo</button>
      </nav>
    </header>
  );
};

export default Header;
