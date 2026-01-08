import type { Company } from '@app-types/experience.ts';

export const companiesData: Company[] = [
  {
    id: 0,
    name: 'QuickBite',
    position: 'Desenvolvedor Full-Stack',
    period: '2024 - Atual',
    descriptions: [
      'Desenvolvimento de APIs REST utilizando Java e Spring Boot, com autenticação e autorização via JWT.',
      'Implementação de funcionalidades em arquitetura de microserviços, incluindo configuração de API Gateway para roteamento entre serviços.',
      'Criação de testes automatizados com JUnit e Mockito e configuração de integração contínua com GitHub Actions.',
    ],
  },
  {
    id: 1,
    name: 'SoftExpert',
    position: 'Estágio em Desenvolvimento',
    period: 'Jan 2021 - Jan 2022',
    descriptions: [
      'Desenvolvimento e manutenção de funcionalidades em ERP web, utilizando Java, PHP, JavaScript e React.',
      'Correções e melhorias seguindo padrões internos de código, com versionamento e colaboração via Git e persistência de dados em MySQL.',
    ],
  },
  {
    id: 2,
    name: 'Tigre',
    position: 'Desenvolvedor Front-End',
    period: 'Mar 2019 - Jul 2019',
    descriptions: [
      'Desenvolvimento de interfaces web para acompanhamento de metas, utilizando Vue.js e Vuetify.',
      'Implementação de componentes responsivos com JavaScript, em ambiente colaborativo com controle de versão via Git e GitHub.',
    ],
  },
];

export default companiesData;
