import type { ProjectList } from '@app-types/project';

export const projectsData: ProjectList = [
  {
    id: 1,
    title: 'Previsão do Tempo',
    description:
      'Previsão do tempo com geolocalização ou busca manual, integrada com a **OpenWeather API**.',
    githubUrl: 'https://github.com/icadorin/previsao-tempo',
    liveUrl: 'https://previsao-tempo-ic.vercel.app',
    technologies: ['React', 'TypeScript', 'Vite', 'OpenWeather API'],
  },
  {
    id: 2,
    title: 'Calculadora de Frete',
    description: 'API para cálculo de frete com base no estado, usando a API **ViaCEP**.',
    githubUrl: 'https://github.com/icadorin/calculadora-de-frete',
    liveUrl: 'https://calcular-frete-ic.vercel.app',
    technologies: ['React', 'Vite', 'TypeScript', 'Java', 'Spring Boot', 'ViaCEP API'],
  },
  {
    id: 3,
    title: 'Quick Bite',
    status: 'Em Desenvolvimento',
    description: 'Plataforma de delivery com arquitetura de microsserviços.',
    githubUrl: 'https://github.com/icadorin/quick-bite-backend',
    liveUrl: 'https://israelcadorin.vercel.app/quickbite',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'APIs REST',
      'JWT',
      'Microservices',
      'PostgreSQL',
      'JUnit 5',
      'Mockito',
      'GitHub Actions',
    ],
  },
];
