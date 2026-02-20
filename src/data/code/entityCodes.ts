import { dedent } from '@/utils/dedent';

export const entityCodes = {
  OrderEntity: dedent(`
    @Entity
    @Table(name = "orders")
    public class Order {

        @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
        @Builder.Default
        private List<OrderItem> items = new ArrayList<>();
    }
  `),

  OrderItemEntity: dedent(`
    @Entity
    @Table(name = "order_items")
    public class OrderItem {

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "order_id", nullable = false)
        private Order order;
    }
  `),

  fetchTypeLazy: dedent(`
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
  `),

  generatedTimestamps: dedent(`
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

  builderDefaultUserStatus: dedent(`
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    @Builder.Default
    private UserStatus status = UserStatus.ACTIVE;
  `),

  builderDefaultRevokedFlag: dedent(`
    @Column(nullable = false)
    @Builder.Default
    private boolean revoked = false;
  `),

  userProfile: dedent(`
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
} as const;
