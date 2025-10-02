import type { ProjectList } from '../types/project';
import weatherImage from '../assets/images/weather-preview.png';
import freightImage from '../assets/images/frete-preview.png';

export const projectsData: ProjectList = [
  {
    id: 1,
    imageUrl: weatherImage,
    title: 'Previsão do Tempo',
    description:
      'Previsão do tempo com geolocalização ou busca manual, integrada com a **OpenWeather API**.',
    githubUrl: 'https://github.com/icadorin/previsao-tempo',
    liveUrl: 'https://previsao-tempo-ic.vercel.app',
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API'],
  },
  {
    id: 2,
    imageUrl: freightImage,
    title: 'Calculadora de Frete',
    description:
      'API para cálculo de frete com base no estado, usando a API **ViaCEP**.',
    githubUrl: 'https://github.com/icadorin/calculadora-de-frete',
    liveUrl: 'https://calcular-frete-ic.vercel.app',
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'Java',
      'Spring Boot',
      'ViaCEP API',
    ],
  },
  {
    id: 3,
    imageUrl: freightImage,
    title: 'Quick Bite',
    status: 'Em Desenvolvimento',
    description: 'Plataforma de delivery com arquitetura de microsserviços.',
    githubUrl: 'https://github.com/icadorin/quick-bite-backend',
    // liveUrl: ' ',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'PostgreSQL',
      'Kafka',
      'Redis',
      'JWT',
      'Microservices',
    ],
  },
];
