import type { Company } from '@app-types/experience.ts';

export const companiesData: Company[] = [
  {
    id: 1,
    name: 'SoftExpert',
    position: 'Estágio em Desenvolvimento',
    period: 'Jan 2021 - Jan 2022',
    descriptions: [
      'Desenvolvimento front-end com criação de novas funcionalidades e componentes React.',
      'Refatoração de código legado e otimizações de performance para maior eficiência.',
    ],
  },
  {
    id: 2,
    name: 'Tigre',
    position: 'Desenvolvedor Front-End',
    period: 'Mar 2019 - Jul 2019',
    descriptions: [
      'Desenvolvimento de interfaces responsivas utilizando Vuetify.',
    ],
  },
];

export default companiesData;
