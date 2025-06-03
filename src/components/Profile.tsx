import React, { useState } from 'react';
import Header from './layout/Header';
import Resume from './Resume';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './layout/Footer';
import SocialSidebar from './layout/SocialSidebar';
import companies from '../data/experienceData';
import '../styles/global.css';
import '../styles/profile.css';

const Profile: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const scrollToSection = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      const offset = -30;
      const elementPosition =
        elemento.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="profile-container">
      <Header scrollToSection={scrollToSection} />
      <main className="content-wrapper">
        <Resume />
        <About />
        <Experience
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialSidebar />
    </section>
  );
};

export default Profile;
