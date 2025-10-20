import React, { useEffect, useState } from 'react';
import '@styles-quickbite/quickbite.css';
import { ArrowUp } from 'lucide-react';
import EntityImplementation from './EntityImplementation';
import RepositoryImplementation from './RepositoryImplementation';

interface DriftCar {
  id: number;
  model: string;
}

const driftCars: DriftCar[] = [
  { id: 1, model: 'Entities' },
  { id: 2, model: 'Repositories' },
  { id: 3, model: 'DTOs' },
  { id: 4, model: 'Exceptions' },
  { id: 5, model: 'Spring Security' },
  { id: 6, model: 'Controllers' },
  { id: 7, model: 'Services' },
];

const sectionComponents: Record<string, React.FC> = {
  Entities: EntityImplementation,
  Repositories: RepositoryImplementation,
};

const QuickBite: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState(driftCars[0]);
  const [showButton, setShowButton] = useState(false);

  const SelectedComponent =
    sectionComponents[selectedCar.model] || (() => <div>Componente não encontrado</div>);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="">
      <h1 className="title">QuickBite</h1>
      <p className="description">
        Aqui eu explico um pouco sobre a implementação do projeto, como os componentes estão sendo
        criados e a interação do framework e dependências.
      </p>
      <div className="car-container">
        <div className="side-bar">
          {driftCars.map((car) => (
            <button
              key={car.id}
              className={`cars-items-button ${selectedCar.id === car.id ? 'selected' : ''}`}
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
