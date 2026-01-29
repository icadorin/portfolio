import React, { useRef, useEffect, useState } from 'react';
import '@styles-quickbite/quickbite.css';
import { ArrowUp } from 'lucide-react';
import EntityImpl from './EntityImpl';
import RepositoryImpl from './RepositoryImpl';
import TestsImpl from './TestsImpl';
import DtosImpl from './DtosImpl';
import DependenciesImpl from './DependenciesImpl';
import GitHubStatus from '../../components/layout/GitHubStatus';
import ImprovementsImpl from './ImprovementsImpl';
import BugFixesImplementation from './BugFixesImpl';

interface DriftCar {
  id: number;
  model: string;
}

const availableCars: DriftCar[] = [
  { id: 2, model: 'Entities' },
  { id: 3, model: 'Repositories' },
  { id: 5, model: 'Tests' },
  { id: 6, model: 'Dependencies' },
  { id: 11, model: 'Bug Fixes' },
];

const comingSoonCars: DriftCar[] = [
  { id: 1, model: 'Improvements' },
  { id: 4, model: 'Dtos' },
  { id: 7, model: 'Exceptions' },
  { id: 8, model: 'Spring Security' },
  { id: 9, model: 'Controllers' },
  { id: 10, model: 'Services' },
];

const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div className="coming-soon">
    <h2>{title}</h2>
    <h3>Em breve...</h3>
  </div>
);

const sectionComponents: Record<string, React.FC> = {
  Improvements: ImprovementsImpl,
  Entities: EntityImpl,
  Repositories: RepositoryImpl,
  Tests: TestsImpl,
  Dtos: DtosImpl,
  Dependencies: DependenciesImpl,
  'Bug Fixes': BugFixesImplementation,
};

const QuickBite: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState(availableCars[0]);
  const [showButton, setShowButton] = useState(false);
  const menuRef = useRef<HTMLHeadingElement | null>(null);

  const SelectedComponent =
    sectionComponents[selectedCar.model] || (() => <ComingSoon title={selectedCar.model} />);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="doc-layout">
      <h1 className="doc-page-title">QuickBite</h1>
      <p className="warning">
        Esta documentação está em constante desenvolvimento. Os conteúdos são inicialmente
        adicionados e refinados ao longo do tempo. Isso também se aplica ao layout da documentação.
      </p>
      <h4 className="doc-page-subtitle">Backend Java Spring Boot para sistema de delivery</h4>
      <p className="doc-page-description">
        Aqui eu explico um pouco sobre a implementação do projeto, como os componentes estão sendo
        criados e a interação do framework e dependências.
      </p>

      <GitHubStatus />

      <div ref={menuRef} className="doc-shell">
        <div className="doc-nav">
          {availableCars.map((car) => (
            <button
              key={car.id}
              className={`doc-nav-item ${selectedCar.id === car.id ? 'selected' : ''}`}
              onClick={() => setSelectedCar(car)}
            >
              {car.model}
            </button>
          ))}

          {comingSoonCars.map((car) => (
            <button
              key={car.id}
              className={`doc-nav-item ${selectedCar.id === car.id ? 'selected' : ''} soon`}
              onClick={() => setSelectedCar(car)}
            >
              {car.model}
            </button>
          ))}
        </div>

        <div className="doc-content">
          <SelectedComponent />
        </div>
      </div>

      {showButton && (
        <button className="top-back" onClick={scrollToTop}>
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default QuickBite;
