export const oneToMany = {
  title: 'Relação OneToMany com Cascade e Orphan Removal',
  code: `
@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
private List<OrderItem> items = new ArrayList<>();
`.trim(),
};
