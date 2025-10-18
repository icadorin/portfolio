export const prePersistUpdate = {
  title: 'Ciclo de vida JPA - @PrePersist e @PreUpdate',
  code: `
@PrePersist
protected void onCreate() {
    createdAt = LocalDateTime.now();
    updatedAt = LocalDateTime.now();
}

@PreUpdate
protected void onUpdate() {
    updatedAt = LocalDateTime.now();
}
`.trim(),
};
