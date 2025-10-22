export const codeJakarAnn = `
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
}`.trim();
