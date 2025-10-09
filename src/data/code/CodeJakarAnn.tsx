import React from 'react';
import CodeBlockWithTitle from '@code-block/CodeBlockWithTitle';

const CodeJakarAnn: React.FC = () => {
  return (
    <CodeBlockWithTitle
      title="Anotações Jakarta"
      code={`
// Pacote jakarta.persistence fornecido pelo spring-boot-starter-data-jpa
import jakarta.persistence.*;

@Entity
@Table(name = "users")

@RestController
public class UserController {
    
    public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 255)
    private String email;

    ...
}
      `}
    />
  );
};

export default CodeJakarAnn;
