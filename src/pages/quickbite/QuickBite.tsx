import React, { useEffect, useState } from 'react';
import '@styles-quickbite/quickbite.css';
import { ArrowUp } from 'lucide-react';
import EntityImplementation from './EntityImplement';
import Tests from './TestsImplement';
import GitHubStatus from '../../components/layout/GitHubStatus';

interface DriftCar {
  id: number;
  model: string;
}

const availableCars: DriftCar[] = [
  { id: 1, model: 'Entities' },
  { id: 8, model: 'Tests' },
];

const comingSoonCars: DriftCar[] = [
  { id: 2, model: 'Repositories' },
  { id: 3, model: 'DTOs' },
  { id: 4, model: 'Exceptions' },
  { id: 5, model: 'Spring Security' },
  { id: 6, model: 'Controllers' },
  { id: 7, model: 'Services' },
];

const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div className="coming-soon">
    <h2>{title}</h2>
    <h3>Em breve...</h3>
  </div>
);

const sectionComponents: Record<string, React.FC> = {
  Entities: EntityImplementation,
  Tests: Tests,
};

const QuickBite: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState(availableCars[0]);
  const [showButton, setShowButton] = useState(false);

  const SelectedComponent =
    sectionComponents[selectedCar.model] || (() => <ComingSoon title={selectedCar.model} />);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="main-container">
      <h1 className="title">QuickBite</h1>
      <p className="description">
        Aqui eu explico um pouco sobre a implementação do projeto, como os componentes estão sendo
        criados e a interação do framework e dependências.
      </p>

      <GitHubStatus />

      <div className="car-container">
        <div className="side-bar">
          {availableCars.map((car) => (
            <button
              key={car.id}
              className={`cars-items-button ${selectedCar.id === car.id ? 'selected' : ''}`}
              onClick={() => setSelectedCar(car)}
            >
              {car.model}
            </button>
          ))}

          {comingSoonCars.map((car) => (
            <button
              key={car.id}
              className={`cars-items-button ${selectedCar.id === car.id ? 'selected' : ''} soon`}
              onClick={() => setSelectedCar(car)}
            >
              {car.model}
            </button>
          ))}
        </div>

        <div className="content">
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
