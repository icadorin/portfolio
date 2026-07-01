import type { Company } from '@app-types/experience.ts';

export const companiesData: Company[] = [
  {
    id: 0,
    name: 'Plataforma SaaS de Avaliação Física',
    position: 'Desenvolvedor Full-Stack',
    period: '2026 - Atual',
    descriptions: [
      'Desenvolvimento de APIs REST utilizando Java 21 e Spring Boot, com autenticação JWT, autenticação em dois fatores (2FA) e arquitetura em camadas.',
      'Implementação de gestão de assinaturas recorrentes com Stripe, controle de usuários e regras de negócio para avaliações físicas e nutricionais.',
      'Desenvolvimento da interface em React e TypeScript, incluindo dashboards interativos, geração de laudos em PDF e integração completa com o backend.',
    ],
    highlights: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      '2FA',
      'Stripe',
      'React',
      'TypeScript',
      'PostgreSQL',
    ],
  },
  {
    id: 1,
    name: 'QuickBite',
    position: 'Desenvolvedor Full-Stack',
    period: '2025 - 2026',
    descriptions: [
      'Desenvolvimento de APIs REST utilizando Java e Spring Boot, com autenticação e autorização via JWT.',
      'Implementação de funcionalidades em arquitetura de microserviços, incluindo configuração de API Gateway para roteamento entre serviços.',
      'Criação de testes automatizados com JUnit e Mockito e configuração de integração contínua com GitHub Actions.',
    ],
    highlights: [
      'Java',
      'Spring Boot',
      'JWT',
      'microserviços',
      'API Gateway',
      'JUnit',
      'Mockito',
      'GitHub Actions',
    ],
  },
  {
    id: 2,
    name: 'SoftExpert',
    position: 'Estágio em Desenvolvimento',
    period: 'Jan 2021 - Jan 2022',
    descriptions: [
      'Desenvolvimento e manutenção de funcionalidades em ERP web, utilizando Java, PHP, JavaScript e React.',
      'Correções e melhorias seguindo padrões internos de código, com versionamento e colaboração via Git e persistência de dados em MySQL.',
    ],
    highlights: ['Java', 'PHP', 'JavaScript', 'React', 'Git', 'MySQL'],
  },
  {
    id: 3,
    name: 'Tigre',
    position: 'Desenvolvedor Front-End',
    period: 'Mar 2019 - Jul 2019',
    descriptions: [
      'Desenvolvimento de interfaces web para acompanhamento de metas, utilizando Vue.js e Vuetify.',
      'Implementação de componentes responsivos com JavaScript, em ambiente colaborativo com controle de versão via Git e GitHub.',
    ],
    highlights: ['Vue.js', 'Vuetify', 'JavaScript', 'Git', 'GitHub'],
  },
];

export default companiesData;
