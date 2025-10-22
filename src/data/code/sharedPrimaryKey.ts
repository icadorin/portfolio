export const sharedPrimaryKey = `
public class UserProfile {

    @Id
    private Long userId; // Chave não gerada automaticamente

    @OneToOne
    @MapsId // Usa o ID do User como chave primária (herda)
    @JoinColumn(name = "user_id")
    private User user;`.trim();
