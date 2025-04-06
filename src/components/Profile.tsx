import React, { useState } from "react";
import Resume from "./Resume";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import "../profile.css";
import companies from "../data/companiesData";
import Header from "../components/Header";

const Profile: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      const offset = -30;
      const elementPosition = elemento.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <section className="profile-container">
      <Header scrollToSection={scrollToSection} />

      <main className="content-wrapper">

        <Resume />
        <About />
        <Experience selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
        <Projects />
        <Contact />

        <div className="easter-egg">
          <div className="serial-number">R34-Z-015</div>
        </div>

        <footer className="footer">
          <p>Desenvolvido por Israel &copy; {new Date().getFullYear()}</p>
        </footer>

      </main>
    </section>
  );
};

export default Profile;
