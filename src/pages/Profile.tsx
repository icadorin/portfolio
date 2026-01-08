import React, { useState } from 'react';
import '@styles/global.css';
import '@styles-sections/profile.css';
import Header from '@layout/Header';
import Resume from '@pages-sections/Resume';
import About from '@pages-sections/About';
import CurrentWork from '@pages-sections/CurrentWork';
import Experience from '@pages-sections/Experience';
import Projects from '@pages-sections/Projects';
import Contact from '@pages-sections/Contact';
import Footer from '@layout/Footer';
import SocialSidebar from '@layout/SocialSidebar';
import companies from '@data-sections/experienceData.ts';

const Profile: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const elemento = document.getElementById(id);
    if (elemento) {
      const offset = -30;
      const elementPosition = elemento.getBoundingClientRect().top + window.pageYOffset;
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
        <CurrentWork />
        <Experience selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialSidebar />
    </section>
  );
};

export default Profile;
