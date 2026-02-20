import { dedent } from '@/utils/dedent';

export const codeImprovements = {
  baseEntity: dedent(`
    @Getter
    @Setter
    @MappedSuperclass
    public abstract class BaseEntity {
        @Column(name = "created_at", nullable = false, updatable = false)
        private LocalDateTime createdAt;
        @Column(name = "updated_at", nullable = false)
        private LocalDateTime updatedAt;

        @PrePersist
        protected void onCreate() {
            createdAt = LocalDateTime.now();
            updatedAt = LocalDateTime.now();
        }

        @PreUpdate
        protected void onUpdate() {
            updatedAt = LocalDateTime.now();
        }
    }

    // Uso nas entidades
    @Getter
    @Setter
    @Entity
    @Table(name = "categories")
    @SuperBuilder(toBuilder = true)
    @NoArgsConstructor
    @AllArgsConstructor
    @EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = false)
    public class Category extends BaseEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @EqualsAndHashCode.Include
        private Long id;
        
        @Column(unique = true, nullable = false, length = 100)
        private String name;
    }
  `),

  builderDefault: dedent(`
    @Entity
    @Table(name = "products")
    @SuperBuilder(toBuilder = true)
    public class Product extends BaseEntity {
        
        @Column(name = "is_available", nullable = false)
        @Builder.Default
        private Boolean isAvailable = true;
        
        @Column(name = "is_featured", nullable = false)
        @Builder.Default
        private Boolean isFeatured = false;
        
        @Column(name = "sort_order", nullable = false)
        @Builder.Default
        private Integer sortOrder = 0;
        
        @Column(name = "notification_preferences", columnDefinition = "jsonb")
        @Builder.Default
        private String notificationPreferences = "{\\"email\\": true, \\"sms\\": false}";
    }
  `),

  jdbcTypeCode: dedent(`
    @Entity
    @Table(name = "products")
    public class Product extends BaseEntity {
        
        @JdbcTypeCode(SqlTypes.JSON)
        @Column(columnDefinition = "jsonb")
        private Map<String, Object> ingredients;
        
        @JdbcTypeCode(SqlTypes.JSON)
        @Column(columnDefinition = "jsonb")
        private Map<String, Object> allergens;
        
        @JdbcTypeCode(SqlTypes.JSON)
        @Column(columnDefinition = "jsonb")
        private Map<String, Object> address;
    }

    // Uso no service - sem conversões manuais
    public ProductResponse createProduct(ProductRequest request) {
        Product product = createMapper.toEntity(request);
        product.setIngredients(request.getIngredients()); // Map diretamente
        return responseMapper.toResponse(productRepository.save(product));
    }
  `),

  mapStructPatch: dedent(`
    // Configuração compartilhada
    @MapperConfig(
        componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        unmappedTargetPolicy = ReportingPolicy.IGNORE
    )
    public interface PatchMapperConfig {}

    // PatchMapper
    @Mapper(config = PatchMapperConfig.class)
    public interface ProductPatchMapper {
        
        @BeanMapping(ignoreByDefault = true)
        @Mapping(target = "name", 
                 expression = "java(request.getName() != null ? request.getName().trim() : null)")
        void updateProductFromRequest(ProductRequest request, @MappingTarget Product product);
    }

    // Uso no service
    @Transactional
    public ProductResponse updateProduct(Long id, ProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        
        patchMapper.updateProductFromRequest(request, product); // Atualiza apenas campos não-null
        return responseMapper.toResponse(productRepository.save(product));
    }
  `),

  specifications: dedent(`
    // DTO Filter
    public record ProductFilter(Long restaurantId, Long categoryId, String name, 
                               BigDecimal minPrice, BigDecimal maxPrice) {}

    // Specification
    public final class ProductSpecification {
        public static Specification<Product> withFilters(ProductFilter filter) {
            return (root, query, cb) -> {
                List<Predicate> predicates = new ArrayList<>();
                
                var restaurantJoin = root.join("restaurant");
                
                predicates.add(cb.isTrue(root.get("isAvailable")));
                predicates.add(cb.isTrue(restaurantJoin.get("isActive")));
                
                if (filter == null) return cb.and(predicates.toArray(new Predicate[0]));
                
                if (filter.restaurantId() != null)
                    predicates.add(cb.equal(restaurantJoin.get("id"), filter.restaurantId()));
                
                if (filter.name() != null && !filter.name().isBlank()) {
                    String pattern = "%%%s%%".formatted(filter.name().toLowerCase());
                    predicates.add(cb.like(cb.lower(root.get("name")), pattern));
                }
                
                return cb.and(predicates.toArray(new Predicate[0]));
            };
        }
    }

    // Service
    public Page<ProductResponse> getProducts(ProductFilter filter, Pageable pageable) {
        return productRepository
            .findAll(ProductSpecification.withFilters(filter), pageable)
            .map(responseMapper::toResponse);
    }
  `),

  globalExceptionHandler: dedent(`
    @Slf4j
    @RestControllerAdvice
    public class GlobalExceptionHandler {
        
        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException ex) {
            Map<String, String> details = new HashMap<>();
            ex.getBindingResult().getFieldErrors()
                .forEach(error -> details.put(error.getField(), error.getDefaultMessage()));
            
            return build(new ApiError("VALIDATION_ERROR", "Validation failed"), 
                        HttpStatus.BAD_REQUEST, details);
        }
        
        @ExceptionHandler(BaseBusinessException.class)
        public ResponseEntity<ErrorResponse> handleBusinessException(BaseBusinessException ex) {
            return build(ex.getApiError(), resolveStatus(ex), null);
        }
        
        private HttpStatus resolveStatus(BaseBusinessException ex) {
            return switch (ex.getApiError().code()) {
                case "RESOURCE_NOT_FOUND" -> HttpStatus.NOT_FOUND;
                case "VALIDATION_ERROR" -> HttpStatus.BAD_REQUEST;
                case "BUSINESS_RULE_VIOLATION" -> HttpStatus.UNPROCESSABLE_ENTITY;
                case "TOKEN_ERROR" -> HttpStatus.UNAUTHORIZED;
                default -> HttpStatus.INTERNAL_SERVER_ERROR;
            };
        }
    }
  `),

  apiPaths: dedent(`
    // ApiPaths.java
    public final class ApiPaths {
        private ApiPaths() {}
        public static final String API_V1 = "/api/v1";
        public static final String PRODUCTS = API_V1 + "/products";
        public static final String BY_ID = "/{id}";
    }

    // PublicEndPoints.java
    public final class PublicEndPoints {
        public static final String[] PUBLIC = {
            ApiPaths.PRODUCTS + "/**",
            "/actuator/health",
            "/error"
        };
    }

    // Uso no controller
    @RestController
    @RequestMapping(ApiPaths.PRODUCTS)
    public class ProductController {
        @GetMapping(ApiPaths.BY_ID)
        public ProductResponse getById(@PathVariable Long id) {
            return service.getProductById(id);
        }
    }

    // Uso na segurança
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        return http.authorizeHttpRequests(auth -> auth
            .requestMatchers(PublicEndPoints.PUBLIC).permitAll()
            .anyRequest().authenticated()
        ).build();
    }
  `),

  authenticatedUser: dedent(`
    // Objeto leve
    @Getter
    @AllArgsConstructor
    public class AuthenticatedUser {
        private Long id;
        private String email;
    }

    // JwtAuthenticationFilter
    @Component
    public class JwtAuthenticationFilter extends OncePerRequestFilter {
        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                       FilterChain filterChain) {
            try {
                String token = extractToken(request);
                if (token != null) {
                    Claims claims = jwtService.validateAndExtractClaims(token);
                    var principal = new AuthenticatedUser(
                        claims.get("userId", Long.class),
                        claims.getSubject()
                    );
                    
                    var auth = new UsernamePasswordAuthenticationToken(
                        principal, null,
                        List.of(new SimpleGrantedAuthority(
                            UserRole.valueOf(claims.get("role", String.class)).getAuthority()
                        ))
                    );
                    SecurityContextHolder.getContext().setAuthentication(auth);
                }
                filterChain.doFilter(request, response);
            } catch (Exception ex) {
                SecurityContextHolder.clearContext();
                resolver.resolveException(request, response, null, ex);
            }
        }
    }

    // SecurityUtils
    public final class SecurityUtils {
        public static AuthenticatedUser getCurrentUser() {
            var auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth == null || !auth.isAuthenticated())
                throw new BusinessRuleViolationException("User not authenticated");
            return (AuthenticatedUser) auth.getPrincipal();
        }
    }
  `),

  phoneValidation: dedent(`
    @Data
    @Builder(toBuilder = true)
    @NoArgsConstructor
    @AllArgsConstructor
    public class RegisterRequest {
        @NotBlank @Size(min = 2, max = 255)
        private String fullName;
        
        @NotBlank @Email @Size(max = 255)
        private String email;
        
        @NotBlank @Size(min = 6, max = 100)
        private String password;
        
        @Pattern(regexp = "^\\\\+?[0-9]{10,15}$", 
                 message = "Phone must be valid (10-15 digits, optional +)")
        @Size(max = 20)
        private String phone;
        
        @Size(max = 500)
        private String address;
    }
  `),

  validationTestHelper: dedent(`
    // Helper
    public final class ValidationTestHelper {
        public static <T> void assertHasViolationOnField(
            Set<ConstraintViolation<T>> violations, String field) {
            assertTrue(violations.stream().anyMatch(
                v -> v.getPropertyPath().toString().equals(field)),
                "Expected validation error on field: " + field);
        }
    }

    // Uso no teste
    @Test
    void shouldFail_whenNameIsBlank() {
        CategoryRequest request = new CategoryRequest();
        request.setName("");
        
        var violations = validator.validate(request);
        assertHasViolationOnField(violations, "name");
    }
  `),
} as const;
