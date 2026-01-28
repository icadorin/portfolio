import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';
import SimpleList from '@/components/ui/SimpleList';
import HighlightedList from '@/components/highlight/quickbite/HighlightedList';
import CodeBlock from '@/components/code-block/CodeBlock';
import { dedent } from '@/utils/dedent';

const codeExamples = {
  relationshipFix: dedent(`
    // Antes: Relacionamento incorreto como OneToMany e tabela errada
    @Entity
    @Table(name = "user_product")
    public class UserProfile {
        @Id
        private Long userId;
        @OneToMany
        @MapsId
        @JoinColumn(name = "user_id")
        private User user;
    }

    // Depois: Correção para OneToOne e tabela correta
    @Entity
    @Table(name = "user_profiles")
    public class UserProfile {
        @Id
        private Long userId;
        @OneToOne
        @MapsId
        @JoinColumn(name = "user_id")
        private User user;
    }
  `),

  addAddress: dedent(`
    // Antes: Sem campo de endereço
    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;
    @Column(name = "preferred_language", length = 10)
    private String preferredLanguage = "pt_BR";

    // Depois: Adição do campo de endereço
    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;
    @Column(name = "address")
    private String address;
    @Column(name = "preferred_language", length = 10)
    private String preferredLanguage = "pt_BR";
  `),

  correctImageUrl: dedent(`
    // Antes: Nome de variável incorreto
    private String imaUrl;

    // Depois: Correção do nome
    private String imageUrl;
  `),

  builderDefaults: dedent(`
    // Antes: Sem defaults no builder e tipos simples para JSON
    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder = 0;
    @Column(name = "is_active", nullable = false)
    private Boolean isActive = true;

    // Depois: Com @Builder.Default e suporte a JSON nativo
    import org.hibernate.annotations.JdbcTypeCode;
    import org.hibernate.type.SqlTypes;

    @Column(name = "sort_order", nullable = false)
    @Builder.Default
    private Integer sortOrder = 0;
    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private Boolean isActive = true;

    // Exemplo para campos JSON
    @Column(columnDefinition = "jsonb")
    @JdbcTypeCode(SqlTypes.JSON)
    private Map<String, Object> ingredients;
  `),

  listToMap: dedent(`
    // Antes: Uso de List<String> para ingredients e allergens
    private List<String> ingredients;
    private List<String> allergens;

    // Depois: Mudança para Map<String, Object> para maior flexibilidade
    private Map<String, Object> ingredients;
    private Map<String, Object> allergens;

    // No serviço: Remoção de conversões manuais
    // Antes: convertToJson(request.getIngredients())
    // Depois: Direto - .ingredients(request.getIngredients())
  `),

  mapToResponse: dedent(`
    // Antes: Uso de ObjectMapper com conversão automática e try-catch para JSON
    private ProductResponse mapToResponse(Product product) {
        ProductResponse response = objectMapper.convertValue(product, ProductResponse.class);
        // ... try-catch para deserialização
        return response;
    }

    // Depois: Mapeamento manual completo para todos os campos
    private ProductResponse mapToResponse(Product product) {
        ProductResponse response = new ProductResponse();
        response.setId(product.getId());
        response.setName(product.getName());
        response.setDescription(product.getDescription());
        response.setPrice(product.getPrice());
        // ... setters para todos os campos restantes
        return response;
    }
  `),

  gettersSetters: dedent(`
    // Antes: Apenas @Data
    @Data
    public class RegisterRequest {
        // campos...
    }

    // Depois: Adição de @Builder, @NoArgsConstructor, @AllArgsConstructor
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public class RegisterRequest {
        // campos...
    }
  `),

  errorHandlingLogin: dedent(`
    // Antes: Sem tratamento de exceções específicas
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(email, password)
    );

    // Depois: Com try-catch para AuthenticationException
    try {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(email, password)
        );
        // fluxo de autenticação bem-sucedido
    } catch (AuthenticationException e) {
        log.warn("Falha na autenticação para: {} - {}", email, e.getMessage());
        throw new AuthException("Credenciais inválidas");
    }
  `),

  refreshToken: dedent(`
    // Exemplo de teste adicionado para validar refresh token
    @Test
    void login_ShouldGenerateValidRefreshToken() {
        // ... setup
        AuthResponse response = authService.login(validEmail, validPassword);
        assertNotNull(response.getRefreshToken());
        verify(refreshTokenRepository).save(argThat(token ->
            token.getUser().equals(activeUser) &&
            !token.isRevoked() &&
            token.getExpiresAt().isAfter(LocalDateTime.now()) &&
            token.getToken() != null
        ));
    }
  `),

  dbProperties: dedent(`
    # Antes: Configurações genéricas ou duplicadas
    spring.datasource.url=jdbc:postgresql://localhost:5432/quickbite-db

    # Depois: Bancos isolados por serviço
    # Auth Service
    spring.datasource.url=jdbc:postgresql://localhost:5432/quickbite-auth-db

    # Product Service
    spring.datasource.url=jdbc:postgresql://localhost:5432/quickbite-product-db

    # Order Service
    spring.datasource.url=jdbc:postgresql://localhost:5432/quickbite-order-db
  `),

  entityFields: dedent(`
    // Correções em testes e dependências
    // Exemplo: Correção de nomes de testes
    void createCategory_ShouldThrowValidationExceptionWhenNameIsTooLong() { ... }

    // Correção de espaços em mensagens de erro
    throw new BusinessRuleViolationException("Restaurant with name '" + trimmedName + "' already exists");
  `),

  validationAndErrorHandling: dedent(`
    // Validação mais precisa
    @NotBlank(message = "Product name is required")
    @Size(max = 255, message = "Product name must not exceed 255 characters")
    private String name;

    // Handler global
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiError> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> details = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            if (error instanceof FieldError fieldError) {
                details.put(fieldError.getField(), fieldError.getDefaultMessage());
            } else {
                details.put(error.getObjectName(), error.getDefaultMessage());
            }
        });
        // ...
    }
  `),
  commitTable: (
    <table>
      <thead>
        <tr>
          <th>Commit</th>
          <th>Descrição</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Correção de relacionamento</td>
          <td>Alterado de OneToMany para OneToOne em UserProfile</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/5d5baea800445ffafe05d4352ae9dc150255ce7a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Adição de endereço</td>
          <td>Adicionado campo address em UserProfile</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/da4b958ea3449318b5733dae2b204a37234f8296"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Correção de nome de variável</td>
          <td>Corrigido imaUrl para imageUrl</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/3a360ee9fe0f9e3f33405ad2b70cea2826239cac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Builder defaults e JDBC</td>
          <td>Adicionados defaults e suporte JSON nativo</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/76ec84dc1e2607c0fee16fdeaf32995ca5aa1250"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>List para Map</td>
          <td>Alterado ingredients/allergens de List para Map</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/ae022432e58f84715873045769f17bb5ebf67c09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Atualização mapToResponse</td>
          <td>Mapeamento manual de campos</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/7af983ffad05fc6762f7ac2e2f0e3fc0ccf756f4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Getters e Setters</td>
          <td>Adicionados via Lombok em RegisterRequest</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/744960c4ee3208c4b6809974765a31483a4c5edf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Tratamento de erros no login</td>
          <td>Adicionado try-catch para autenticação</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/18faecf2841ecb7e018e5f4178514b937166df2c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Validação de refresh token</td>
          <td>Resolvido problema com testes adicionados</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/2c97b2a69e4dd18079e42d80a01d7b2fd1abd20f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Propriedades de DB</td>
          <td>Ajustadas configs de bancos por serviço</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/7788d8803ed9411f67924850b22f7acaad9d556e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>Correção de campos em entidades</td>
          <td>Ajustes em testes e campos</td>
          <td>
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/86918513349ef422a6d18f4d0c21ec8c9841ec14"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  ),
};

const BugFixesEnterprise: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Refatoração e Correções no Backend do QuickBite</h1>
      <h2 className="section-subtitle">Visão geral</h2>
      <p className="section-intro">
        Esta seção apresenta correções e refatorações aplicadas no backend, destacando problemas
        técnicos identificados ao longo do desenvolvimento e as decisões adotadas para resolvê-los.
        Os exemplos a seguir ilustram ajustes de modelagem, validação, persistência e tratamento de
        erros, sempre com foco em previsibilidade, manutenibilidade e boas práticas.
      </p>

      <div className="dep-content">
        <h3 className="sub-description">
          Principais Problemas Técnicos Identificados e Corrigidos
        </h3>
        <SimpleList
          items={[
            'Modelagem incorreta de relacionamentos JPA gerando inconsistência de dados (OneToMany → OneToOne)',
            'Adição de campos essenciais em entidades (ex: endereço em perfil de usuário)',
            'Correções de nomes de variáveis e tipografias no código',
            'Implementação de defaults no builder e suporte nativo a JSONB no PostgreSQL',
            'Mudança de estruturas de dados para maior flexibilidade (List para Map)',
            'Mapeamento manual de DTOs para evitar dependências automáticas falhas',
            'Adição de getters/setters via Lombok em DTOs',
            'Melhoria no tratamento de erros em métodos críticos como login',
            'Resolução de issues com validação de tokens de refresh',
            'Ajustes em configurações de bancos de dados por serviço',
            'Correções em campos de entidades e testes',
          ]}
        />

        <h3 className="sub-description">Benefícios das Correções</h3>
        <HighlightedList
          items={[
            'Maior consistência e integridade dos dados com relacionamentos corretos',
            'Construção de objetos mais segura com valores default garantidos',
            'Performance otimizada com mapeamento nativo de JSON no banco',
            'Validações robustas reduzindo erros em runtime',
            'Isolamento completo entre serviços para melhor escalabilidade',
            'Testes mais resilientes e cobertura abrangente de cenários',
          ]}
        />

        <h3 className="sub-description">Exemplos de Código – Decisões Técnicas Relevantes</h3>
        <h4>Correção de Relacionamento em UserProfile</h4>
        <p className="code-context">
          <strong>Problema:</strong> O relacionamento estava modelado como OneToMany, gerando
          inconsistência de chave e queries incorretas.
          <br />
          <strong>Decisão:</strong> Ajustar para OneToOne com @MapsId e tabela correta.
          <br />
          <strong>Benefício:</strong> Integridade referencial garantida e queries previsíveis.
        </p>
        <CodeBlock code={codeExamples.relationshipFix} />
        <h4>Adição de Endereço em UserProfile</h4>
        <CodeBlock code={codeExamples.addAddress} />
        <h4>Correção de Nome de Variável</h4>
        <CodeBlock code={codeExamples.correctImageUrl} />
        <h4>Adição de Builder default e jsonb para mapeamento</h4>
        <p className="code-context">
          <strong>Problema:</strong> Ao utilizar o padrão Builder, os atributos que são
          inicializados diretamente na entidade não são populados automaticamente sem o uso de
          @Builder.Default. Também, sem a definição do tipo jsonb, o Hibernate não consegue mapear
          corretamente campo JSON para o banco de dados.
          <br />
          <strong>Decisão:</strong> Utilizar Builder.Default para atributos que possuem valores
          padrão e definir o tipo jsonb para campos do tipo Map.
          <br />
          <strong>Benefício:</strong> Garantir valores padrão e consistentes ao usar o Builder e
          persistência correta de estruturas JSON no banco da dados.
        </p>
        <CodeBlock code={codeExamples.builderDefaults} />
        <h4>Mudança de List para Map</h4>
        <p className="code-context">
          <strong>Problema:</strong> Campos tipados com List faziam com que o service conhecesse
          detalhes de persistência, sendo reponsável pela serialização dos dados. Havia lógica
          técnica misturada com regra de negócio.
          <br />
          <strong>Decisão:</strong> Ajustar a tipagem para <code>Map&lt;String, Object&gt;</code> e
          definir o campo como jsonb com @JdbcTypeCode(SqlTypes.JSON)
          <br />
          <strong>Benefício:</strong> Melhor separação de responsabilidades, o service passa a
          orquestrar dados, enquanto a persistência e a conversão JSON ficam a cargo do Hibernate,
          eliminando a necessidade de conversões manuais.
        </p>
        <CodeBlock code={codeExamples.listToMap} />
        <h4>Mapeamento direto de entidade para response</h4>
        <p className="code-context">
          <strong>Problema:</strong> O uso de ObjectMapper para conversão automática e
          desserialização de campos JSON submetia o service a lidar com detalhes de serialização e
          tratamento de exceção, além de introduzir mapeamento implícito.
          <br />
          <strong>Decisão:</strong> Remover o uso de conversão automática e realizar mapeamento
          manual e explícito de todos os campos da entidade para o DTO de reposta, utilizando
          estruturas já desserializadas pelo Hibernate.
          <br />
          <strong>Benefício:</strong> Código mais previsível, melhor separação de responsabilidades,
          entre persistência (Hibernate) e mapeamento de reposta (DTO), eliminando lógica técnica do
          service.
        </p>
        <CodeBlock code={codeExamples.mapToResponse} />
        <h4>Adição de Getters/Setters em DTO</h4>
        <CodeBlock code={codeExamples.gettersSetters} />
        <h4>Login com tratamento de erro e ciclo de refresh token</h4>
        <p className="code-context">
          <strong>Problema:</strong> O fluxo de autenticação não tratava exceções específicas de
          forma controlada, expondo menssagens genéricas ou falhas inesperadas. Além disso, não
          tinha uma garantia direta de que o refresh token era gerado, persistindo e validando
          corretamente.
          <br />
          <strong>Decisão:</strong> Implementar tratamento de forma direta para
          AuthenticationException no login e adicionar testes automatizados para validar a geração,
          de persistência e estado do refresh token.
          <br />
          <strong>Benefício:</strong> Fluxo de autenticação mais seguro e previsível, mensagens de
          erro controladas, maior confiabilidade no gerenciamento de sessão e cobertura de testes em
          um ponto crítico do sistema.
        </p>
        <CodeBlock code={codeExamples.errorHandlingLogin} />
        <CodeBlock code={codeExamples.refreshToken} />
        <h4>Ajustes em Propriedades de Banco</h4>
        <CodeBlock code={codeExamples.dbProperties} />
        <h4>Handler global de validação</h4>
        <p className="code-context">
          <strong>Problema:</strong> Erros de validação eram tratados de forma inconsistente
          espalhados pelos controllers, dificultando padronização de messagens e manutenção de
          código.
          <br />
          <strong>Decisão:</strong> Centralizar o tratamento de exceções de validação em um handler
          global utilizando @RestControllerAdvice e @ExceptionHandler.
          <br />
          <strong>Benefício:</strong> Padronização das respostas de erro, redução de código
          duplicado e manutenção duplicada.
        </p>
        <CodeBlock code={codeExamples.validationAndErrorHandling} />

        <h3 className="sub-description">Desafios Enfrentados e Soluções</h3>
        <SimpleList
          items={[
            'Conversões JSON manuais propensas a erros - Solução: Uso de @JdbcTypeCode para mapeamento nativo.',
            'Validações inconsistentes - Solução: Handler global e anotações Bean Validation.',
            'Testes frágeis - Solução: Matchers flexíveis e verificações explícitas com Mockito.',
            'Dependências cíclicas - Solução: Mapeamento manual em DTOs.',
          ]}
        />

        <h3 className="sub-description">Melhorias nos Testes</h3>
        <HighlightedList
          items={[
            'Testes que não dependem da ordem das mensagens de validação, usando Matchers.anyOf',
            'Cobertura para exceções de autenticação e estados de usuário (inativo/suspenso)',
            'Verificações detalhadas para geração e persistência de tokens',
            'Testes para cenários de borda como nomes duplicados e parâmetros inválidos',
            'Isolamento com mocks para repositórios e managers',
          ]}
        />

        <h3 className="sub-description">Resultados e Impacto</h3>
        <SimpleList
          items={[
            'Redução significativa de erros de validação em runtime',
            'Melhoria perceptível na performance de consultas com uso de JSON nativo',
            'Alta cobertura de testes em serviços críticos',
            'Padronização de código reduzindo retrabalho',
            'Maior escalabilidade com isolamento de dados por serviço',
          ]}
        />

        <h3 className="sub-description">Tabela de Commits Relevantes</h3>
        <p>
          A tabela abaixo resume commits relevantes, priorizando correções que envolveram decisões
          arquiteturais, ajustes de modelagem e melhorias em robustez e validação.
        </p>
        {codeExamples.commitTable}

        <h3 className="sub-description">Conclusão</h3>
        <p>
          Essas refatorações transformaram o backend em uma solução robusta, com foco em qualidade
          de código, segurança e performance. As mudanças não apenas corrigiram bugs, mas
          estabeleceram padrões que facilitam manutenções futuras e escalabilidade.
        </p>
      </div>
    </div>

    // VER MELHORIA EM PORCENTAGEM
  );
};

export default BugFixesEnterprise;
