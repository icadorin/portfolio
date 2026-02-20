import { CommitItem } from '@app-types/commit';

export const improvementsCommitData: CommitItem[] = [
  // ========== AUTH SERVICE ==========
  {
    title: 'refactor: improve entities and repositories structure',
    description:
      'Adiciona @Builder, @NoArgsConstructor, @AllArgsConstructor e padroniza entidades do Auth Service',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/a409f805cbdcae68f43e1de4d06a7d3e976b7eea',
  },
  {
    title: 'refactor: enhance entity fields',
    description: 'Adiciona @Builder.Default para valores padrão em campos de entidades',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/f768595c61a6892e4a55563a34666e9e282e48c9',
  },
  {
    title: 'refactor: improve RefreshToken entity',
    description: 'Adiciona método isExpired() e melhora mapeamento',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/11ee8242094eb4deeb96f07440b3c5818b2200e1',
  },
  {
    title: 'refactor: integrate custom user creation exceptions',
    description: 'Adiciona exceções específicas para criação de usuário',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/bd20484b96b79004aeb30dba70b6dda31a0482e9',
  },
  {
    title: 'refactor: fix method name type in exception handler',
    description: 'Corrige nomenclatura de métodos no handler de exceções',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/bf99ee6d84780d7ce8fa674d44875549e77fa393',
  },
  {
    title: 'refactor: align auth global exception handling',
    description: 'Alinha handler global do Auth Service com contrato de erros do core',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/943201fdaa019a22e04500a1095bd1067187e808',
  },
  {
    title: 'refactor: align auth services with core exceptions',
    description: 'Migra exceções do Auth Service para usar core exceptions',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/f8b6335060da00d1b2f93d3a03685ad714152ecb',
  },
  {
    title: 'refactor: align entities with BaseEntity and SuperBuilder',
    description: 'Padroniza entidades com BaseEntity e SuperBuilder',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/8ba5ac89ea3d8bbff42dd3472b5f300c4dc6804e',
  },
  {
    title: 'refactor: improve RegisterRequest validation',
    description: 'Adiciona validação de telefone com regex e tamanhos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/4148ba8bdc7d85ce64239baddf7d96d1d2d03b31',
  },
  {
    title: 'refactor: align DTOs with standardized validation',
    description: 'Padroniza validações com Bean Validation e mensagens consistentes',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/0c951c63623efc3b30fa81916edf0027455edf6d',
  },
  {
    title: 'refactor: improve JWT validation and authentication flow',
    description: 'Centraliza validação de tokens e melhora fluxo de autenticação',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/b892e7f187255813836927d33a52be3a6b6ef247',
  },
  {
    title: 'refactor: use lightweight AuthenticatedUser as JWT principal',
    description: 'Cria objeto leve para contexto de segurança',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/651590c2b5210b9382669a830a6c05ad0dee9f32',
  },
  {
    title: 'refactor: simplify jwtAuthenticationFilter to use claims',
    description: 'Simplifica filtro JWT usando apenas claims do token',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/c9dba53807e3c805692fe66f3ca79e1229b74b67',
  },
  {
    title: 'refactor: centralize token validation and claim extraction',
    description: 'Centraliza validação e extração de claims no JwtService',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/151d9d82f0bb66a271e99376a23694859a833154',
  },
  {
    title: 'refactor: standardize auth endpoints and security',
    description: 'Padroniza endpoints e configuração de segurança',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/c93c922134bb4fa4d8a697c2ecd1ff59311f6a98',
  },

  // ========== PRODUCT SERVICE ==========
  {
    title: 'refactor: improve product-service entitys',
    description: 'Padroniza entidades com @Builder e mapeamento JSON',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/12f8cf20c86b0e7c4d038f1dde14fe96b368aa77',
  },
  {
    title: 'refactor: enhance dto requests',
    description: 'Adiciona validações robustas nos DTOs',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/34d769d08bba88abc71849a44f15d368f1ef5c91',
  },
  {
    title: 'refactor: strengthen validation layer in services',
    description: 'Adiciona camada robusta de validação nos serviços',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/56cdb8d51c290c15376d9df82f2301330b2b0519',
  },
  {
    title: 'refactor: centralize product request validation',
    description: 'Move validações para método validatePricingRules()',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/9da8cca1d237a6c6d7610d98dafee3c399f29978',
  },
  {
    title: 'refactor: improve category service business rules',
    description: 'Adiciona verificação de produtos antes de deletar categoria',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/af2c3bebfcb8e599cd3eadb932227937271bf282',
  },
  {
    title: 'refactor: integrate mapstruct into products and restaurants',
    description: 'Substitui mapeamento manual por MapStruct',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/a2338fb9fa7800801a9ecb03fa50895ed96674ff',
  },
  {
    title: 'refactor: remove redundant mapstruct mappings',
    description: 'Remove mapeamentos redundantes nos mappers',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/9d997c1154fd0adac4827df2c351dd7b215e27ff',
  },
  {
    title: 'refactor: introduce patchmapperconfig',
    description: 'Cria configuração padronizada para mappers de patch',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/80161726bee6e78e889fd6612eeb83d927273473',
  },
  {
    title: 'refactor: migrate entities to superbuilder',
    description: 'Migra entidades para usar @SuperBuilder',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/b3d8cfa1214c0b1befc4b6779a342cafccd40ace',
  },
  {
    title: 'refactor: improve mappers and repository method naming',
    description: 'Padroniza nomenclatura de métodos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/de335d2797bfb2f43a9d6ced12eecf7299a405af',
  },
  {
    title: 'refactor: align repository method names with JPA conventions',
    description: 'Ajusta nomes para seguir convenções JPA',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/8ce5f96c7ae9240958ed1c5a80b7871919373ec0',
  },
  {
    title: 'refactor: improve query indentation',
    description: 'Melhora legibilidade das queries JPQL',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/700e2a032797e3be94706e6dc79e69b20db32635',
  },
  {
    title: 'refactor: migrate repositories to specification support',
    description: 'Implementa JpaSpecificationExecutor',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/3d8a553fe0d50cf5e43079fa961219d2d192e356',
  },
  {
    title: 'refactor: improve specification filter building',
    description: 'Otimiza construção de predicates',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/ffd4e5b6d88ed13f5b1d8403b99c295255d7f65d',
  },
  {
    title: 'refactor: add null-safe filter handling in specifications',
    description: 'Adiciona tratamento para filtros nulos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/b7a17069a3cb62f75dbac157272cfd2ff586adc0',
  },
  {
    title: 'refactor: redesign product endpoints',
    description: 'Adiciona paginação, filtros e segurança nos endpoints',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/65a809b0c552defce48bd7f7baa704358b0bd116',
  },
  {
    title: 'refactor: redesign category endpoints',
    description: 'Adiciona paginação e filtros nos endpoints',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/e7965b728ea2129c4d86ec0a9578609fb7f1d63c',
  },
  {
    title: 'refactor: redesign restaurant endpoints',
    description: 'Adiciona paginação, filtros e segurança nos endpoints',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/593f315b3e78efda0b9aff67d780ca1c0c2f69c3',
  },

  // ========== CORE MODULE ==========
  {
    title: 'refactor: centralize error handling using core ApiError',
    description: 'Cria módulo core com exceções base e padroniza tratamento',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/580b200101b1b0f31a7a8f6a31db353238d56e82',
  },
  {
    title: 'refactor: switch exception imports to core module',
    description: 'Migra importações para usar o módulo core',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/5e4f33006f98c703afee0121cda4fd8c7863f97e',
  },
  {
    title: 'refactor: standardize global exception handling',
    description: 'Padroniza tratamento global com core business exceptions',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/7a1cadb399e4dbf383b561c909b2abce74be78ae',
  },
  {
    title: 'refactor: centralize jackson objectMapper',
    description: 'Configuração unificada do ObjectMapper',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/8497095c6500fd1e82059e61cb4a67235e9150b2',
  },
  {
    title: 'refactor: move UserRole to core',
    description: 'Centraliza enum UserRole no módulo core',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/e8319b8526ecbb1191b3443047d5e5663a75bf2f',
  },
  {
    title: 'refactor: extend jpaSpecification for dynamic filtering',
    description: 'Adiciona suporte a Specifications no UserRepository',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/985a52f5a3435fc1b85272eae00c20da0fe40f75',
  },

  // ========== SEGURANÇA ==========
  {
    title: 'refactor: centralize public endpoints as constants',
    description: 'Cria constantes para endpoints públicos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/6c89c34536bcdccc711ed7a315936d47b9489eff',
  },
  {
    title: 'refactor: centralize secured endpoint paths',
    description: 'Cria constantes para paths protegidos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/9cbded1c4a45382e617f1b711ee25438e5a36429',
  },
  {
    title: 'refactor: simplify SecurityConfig',
    description: 'Move regras para nível de método e simplifica configuração',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/7fc729ea666f993a34194b2aa2db712385ba4697',
  },
  {
    title: 'refactor: use UserRole enum in JwtAuthenticationFilter',
    description: 'Substitui strings por enum UserRole',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/83fec956eb226712c69e7730cd34e76985e68d06',
  },
  {
    title: 'refactor: replace string-based role checks with UserRole enum',
    description: 'Substitui strings por enum nas verificações',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/caa9061b283d26138e175939cc0121ba20b06e90',
  },
  {
    title: 'refactor: use UserRole enum in RestaurantSecurity',
    description: 'Padroniza uso de enum na segurança',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/9ed8a4eead98f68e1b8f27fe5d8edba93a549f50',
  },
  {
    title: 'refactor: handle illegalargument as invalid token',
    description: 'Melhora tratamento de exceções no JWT',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/92b6d434b40a88523d83e86ceb5921b8ca50ea54',
  },
  {
    title: 'refactor: remove deprecated repository methods',
    description: 'Limpa métodos não utilizados',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/0e3e09848f1a904c1a5527062eab45c967cbaa41',
  },

  // ========== API GATEWAY ==========
  {
    title: 'refactor: switch to ServerWebExchange',
    description: 'Migra API Gateway para modelo reativo',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/1a9968c4a378297385128757060de5f0f85469ec',
  },
  {
    title: 'refactor: update api gateway exception handling',
    description: 'Melhora tratamento de exceções no gateway',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/3141bcfea51f3f6e39d8c918d699f46aec0f5085',
  },

  // ========== TESTES E CONSTANTES ==========
  {
    title: 'refactor: update restaurant service and adjust tests',
    description: 'Refatora testes e atualiza constantes',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/2b15e50247396f7a2acab042b991d8debcece3fa',
  },
  {
    title: 'refactor: adjust service tests for compatibility',
    description: 'Atualiza testes para novos DTOs e mappers',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/459065ae290696fb5b8ab56aadf4ef9c0f1d4f8b',
  },
  {
    title: 'refactor: add ValidationTestHelper',
    description: 'Cria helper para testes de validação',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/d37d1672efdc0d8268addd288952b0612ea06456',
  },
  {
    title: 'refactor: improve assertions in service tests',
    description: 'Melhora verificações nos testes',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/0354eba948953146040ec5b38f9b918cb4b91e57',
  },
  {
    title: 'refactor: migrate filtering logic to specification in tests',
    description: 'Atualiza testes para usar specifications',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/2129ecc0c7d73f39edda005ff258fce453606663',
  },
  {
    title: 'refactor: simplify controllers and extract API path constants',
    description: 'Extrai constantes de paths da API',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/90423c6cb78a445f9b8da128d410e15a3e2a7ba6',
  },
  {
    title: 'refactor: add logout and users paths to ApiPaths',
    description: 'Expande constantes com logout e users',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/845f1875ca32c63977546d9e2db6a22d8c29f086',
  },
  {
    title: 'refactor: align public endpoints with ApiPaths',
    description: 'Usa constantes nos endpoints públicos',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/7f2ac21525c94151cf1d11fa624ac6e7c59d971a',
  },

  // ========== ORDER SERVICE (CLIENTE FEIGN) ==========
  {
    title: 'refactor: update product service client with proper error handling',
    description: 'Melhora cliente Feign do order service',
    link: 'https://github.com/icadorin/quick-bite-backend/commit/b7fd0a90a9a09a1838310d113d3f2a2ea49b07de',
  },
];
