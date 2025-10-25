import { dedent } from '@/utils/dedent';

export const entityCodes = {
  jakarAnn: dedent(`
    // Pacote jakarta.persistence fornecido pelo spring-boot-starter-data-jpa
    import jakarta.persistence.*;

    @Entity
    @Table(name = "users")
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(unique = true, nullable = false)
        private String email;
        // ...
    }
  `),

  manyToOne: dedent(`
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
  `),

  oneToMany: dedent(`
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();
  `),

  sharedPrimaryKey: dedent(`
    public class UserProfile {

        @Id
        private Long userId; // Chave não gerada automaticamente

        @OneToOne
        @MapsId // Usa o ID do User como chave primária (herda)
        @JoinColumn(name = "user_id")
        private User user;
    }
  `),

  prePersistUpdate: dedent(`
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
  `),

  codeWithoutBuilder: dedent(`
    // Construtor sem parâmetros + Setters (objeto mutável/inconsistente)
    private User createUser(RegisterRequest request) {
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setFullName(request.getFullName());
        user.setRole(parseUserRole(request.getRole()));
        user.setStatus(User.UserStatus.ACTIVE);
        return userRepository.save(user);
    }

    // Construtor com parâmetros (ilegível)
    private User createUser(RegisterRequest request) {
        User user = new User(
            request.getEmail(),
            passwordEncoder.encode(request.getPassword()),
            request.getFullName(),
            parseUserRole(request.getRole()),
            User.UserStatus.ACTIVE
        );
        return userRepository.save(user);
    }
  `),

  codeWithBuilder: dedent(`
    private User createUser(RegisterRequest request) {
        return userRepository.save(
            User.builder()
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .fullName(request.getFullName())
                // NÃO precisa setar role/status - usa valores default
                .build()
        );
    }
  `),

  buildDefaultEntity: dedent(`
    @Builder.Default
    private UserStatus status = UserStatus.ACTIVE;
  `),

  construtors: dedent(`
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public class User {
      //...
    }
  `),
} as const;
