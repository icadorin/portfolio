export const manyToOne = {
  title: 'Relação ManyToOne com FetchType.LAZY',
  code: `
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_id", nullable = false)
private User user;
`.trim(),
};
