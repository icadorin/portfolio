import React, { useState, useEffect, useRef } from "react";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current || currentScrollY < 30) {
        setIsVisible(true);
      }

      setHasShadow(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"} ${hasShadow ? "shadow" : ""}`}>
      <nav className="nav-links">
        <button onClick={() => scrollToSection("about")}>Sobre Mim</button>
        <button onClick={() => scrollToSection("experience")}>Experiência</button>
        <button onClick={() => scrollToSection("projects")}>Projetos</button>
        <button onClick={() => scrollToSection("contact")}>Contato</button>
        <button className="btn-resume" onClick={() => scrollToSection("resume")}>Resumo</button>
      </nav>
    </header>
  );
};

export default Header;
