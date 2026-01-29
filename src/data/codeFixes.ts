import { dedent } from '@/utils/dedent';

export const codeFixes = {
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
} as const;
