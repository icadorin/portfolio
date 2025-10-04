import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '@styles-quickbite/main.css';

interface DriftCar {
  id: number;
  model: string;
}

const driftCars: DriftCar[] = [
  {
    id: 1,
    model: 'Entities',
  },
  {
    id: 2,
    model: 'Repositories',
  },
  {
    id: 3,
    model: 'DTOs',
  },
  {
    id: 4,
    model: 'Exceptions',
  },
  {
    id: 5,
    model: 'Spring Security',
  },
  {
    id: 6,
    model: 'Controllers',
  },
  {
    id: 7,
    model: 'Services',
  },
];

const QuickBite: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(driftCars[0]);

  return (
    <div className="">
      <button onClick={() => navigate('/')} className="back-button">
        Voltar para o Perfil
      </button>
      <h1 className="title">QuickBite</h1>
      <p className="description">
        Aqui eu explico um pouco sobre a implementação do projeto, como os
        componentes estão sendo criados e a interação do framework e
        dependências.
      </p>
      <div className="cars-components">
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
      <div className="content">Load...</div>
    </div>
  );
};

export default QuickBite;
