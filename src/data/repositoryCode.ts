import { dedent } from '@/utils/dedent';

export const repositoryCode = {
  queryAnnotation: dedent(`
  @Query("SELECT rt FROM RefreshToken rt WHERE rt.user.id = :userId AND rt.revoked = false AND rt.expiresAt > :now")
  List<RefreshToken> findValidTokensByUser(@Param("userId") Long userId, @Param("now") LocalDateTime now);
  `),

  queryWithParams: dedent(`
  @Query("SELECT COUNT(u) > 0 FROM User u WHERE LOWER(u.email) = LOWER(:email)")
  boolean existsByEmailIgnoreCase(@Param("email") String email);
  `),

  modifyingQuery: dedent(`
  @Modifying
  @Query("UPDATE RefreshToken rt SET rt.revoked = true WHERE rt.expiresAt < :now AND rt.revoked = false")
  void revokedAllExpiredSince(@Param("now") LocalDateTime now);
  `),

  complexQuery: dedent(`
  @Query("""
  SELECT p
  FROM Product p
  WHERE p.isAvailable = true
      AND p.restaurant.isActive = true
      AND LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))
  """)
  List<Product> searchAvailableProductsByName(@Param("name") String name);
  `),

  aggregationQuery: dedent(`
  @Query("SELECT COUNT(o) FROM Order o WHERE o.restaurantId = :restaurantId AND o.status = :status")
  Long countByRestaurantAndStatus(
      @Param("restaurantId") Long restaurantId,
      @Param("status") Order.OrderStatus status
  );
  `),

  caseInsensitiveQuery: dedent(`
  @Query("SELECT COUNT(u) > 0 FROM User u WHERE LOWER(u.email) = LOWER(:email)")
  boolean existsByEmailIgnoreCase(@Param("email") String email);
  `),

  dateRangeQuery: dedent(`
  @Query("SELECT o FROM Order o WHERE o.userId = :userId AND o.createdAt BETWEEN :startDate AND :endDate")
  List<Order> findByUserIdAndCreateAtBetween(
      @Param("userId") Long userId,
      @Param("startDate") LocalDateTime startDate,
      @Param("endDate") LocalDateTime endDate
  );
  `),

  orderingQuery: dedent(`
  // Ordenação automática por sortOrder
  List<Category> findByIsActiveTrueOrderBySortOrderAsc();

  // Ordenação por data de criação descendente  
  OrderStatusHistory findFirstByOrderIdOrderByCreatedAtDesc(Long orderId);
  `),
} as const;
