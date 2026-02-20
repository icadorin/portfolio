import { CommitItem } from '@app-types/commit';

export const commitData: CommitItem[] = [
  {
    title: 'Correção de relacionamento',
    description: 'Alterado de OneToMany para OneToOne em UserProfile',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/5d5baea800445ffafe05d4352ae9dc150255ce7a',
  },
  {
    title: 'Adição de endereço',
    description: 'Adicionado campo address em UserProfile',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/da4b958ea3449318b5733dae2b204a37234f8296',
  },
  {
    title: 'Correção de nome de variável',
    description: 'Corrigido imaUrl para imageUrl',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/3a360ee9fe0f9e3f33405ad2b70cea2826239cac',
  },
  {
    title: 'Builder defaults e JDBC',
    description: 'Adicionados defaults e suporte JSON nativo',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/76ec84dc1e2607c0fee16fdeaf32995ca5aa1250',
  },
  {
    title: 'List para Map',
    description: 'Alterado ingredients/allergens de List para Map',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/ae022432e58f84715873045769f17bb5ebf67c09',
  },
  {
    title: 'Atualização mapToResponse',
    description: 'Mapeamento manual de campos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/7af983ffad05fc6762f7ac2e2f0e3fc0ccf756f4',
  },
  {
    title: 'Getters e Setters',
    description: 'Adicionados via Lombok em RegisterRequest',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/744960c4ee3208c4b6809974765a31483a4c5edf',
  },
  {
    title: 'Tratamento de erros no login',
    description: 'Adicionado try-catch para autenticação',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/18faecf2841ecb7e018e5f4178514b937166df2c',
  },
  {
    title: 'Validação de refresh token',
    description: 'Resolvido problema com testes adicionados',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/2c97b2a69e4dd18079e42d80a01d7b2fd1abd20f',
  },
  {
    title: 'Propriedades de DB',
    description: 'Ajustadas configs de bancos por serviço',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/7788d8803ed9411f67924850b22f7acaad9d556e',
  },
  {
    title: 'Correção de campos em entidades',
    description: 'Ajustes em testes e campos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/86918513349ef422a6d18f4d0c21ec8c9841ec14',
  },
];
