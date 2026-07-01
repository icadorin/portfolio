import type { ProjectList } from '@app-types/project';

export const projectsData: ProjectList = [
  {
    id: 1,
    title: 'Previsão do Tempo',
    description:
      'Previsão do tempo com geolocalização ou busca manual, integrada com a **API OpenWeather**.',
    githubUrl: 'https://github.com/icadorin/previsao-tempo',
    liveUrl: 'https://previsao-tempo-ic.vercel.app',
    technologies: ['React', 'TypeScript', 'Vite', 'API OpenWeather'],
    highlights: ['geolocalização'],
  },
  {
    id: 2,
    title: 'Calculadora de Frete',
    description: 'API para cálculo de frete com base no estado, usando a **API ViaCEP**.',
    githubUrl: 'https://github.com/icadorin/calculadora-de-frete',
    liveUrl: 'https://calcular-frete-ic.vercel.app',
    technologies: ['React', 'Vite', 'TypeScript', 'Java', 'Spring Boot', 'API ViaCEP'],
    highlights: ['frete'],
  },
  {
    id: 3,
    title: 'Quick Bite',
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
    highlights: ['microsserviços'],
  },
  {
    id: 4,
    title: 'Plataforma SaaS de Avaliação Física',
    status: 'Em Desenvolvimento',
    description:
      'Plataforma SaaS para gestão de avaliações físicas, nutricionais e assinaturas recorrentes.',
    githubUrl: 'https://github.com/icadorin/bioimpedance-backend',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      '2FA',
      'Stripe',
      'React',
      'TypeScript',
      'Recharts',
      'PostgreSQL',
    ],
    highlights: ['SaaS'],
  },
];
