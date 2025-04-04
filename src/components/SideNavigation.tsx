import React, { useEffect, useState } from "react";

interface SideNavigationProps {
  sections: string[];
}

const SideNavigation: React.FC<SideNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="side-navigation">
      <div className="nav-titles">
        {sections.map((section) => (
          <span
            key={section}
            className={`nav-title ${hoveredSection === section ? "visible" : ""}`}
          >
            {section}
          </span>
        ))}
      </div>

      <div className="nav-dots">
        {sections.map((section) => (
          <div
            key={section}
            className="nav-item"
            onMouseEnter={() => setHoveredSection(section)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <button
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`nav-dot ${activeSection === section ? "active" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
