import React from 'react';
import '@styles-quickbite/entity.css';

const EntityImplementation: React.FC = () => {
  const technologies = [
    {
      name: 'JPA (Java Persistence API)',
      description: 'Persistência de dados relacionais.',
    },
    { name: 'Lombok', description: 'Redução de código boilerplate.' },
  ];

  const jpaAnnotations = [
    { description: 'Criação de tabela no banco.', annotation: '@Entity' },
    {
      description: 'Define nome da tabela.',
      annotation: '@Table',
      example: `@Table(name = "users")`,
    },
    { description: 'Chave primária.', annotation: '@Id' },
    {
      description: 'Estratégia de geração da chave.',
      annotation: '@GeneratedValue',
      example: `@GeneratedValue(strategy = GenerationType.IDENTITY)`,
    },
    {
      description: 'Mapeia atributo para coluna.',
      annotation: '@Column',
      example: `@Column(name = "username", nullable = false, unique = true)`,
    },
  ];

  const lombokFeatures = [
    {
      description: 'Gera getters e setters automaticamente.',
      annotations: ['@Data', '@Getter', '@Setter'],
    },
    {
      description: 'Construtores vazios e completos.',
      annotations: ['@NoArgsConstructor', '@AllArgsConstructor'],
    },
    {
      description: 'Criação fluida de objetos.',
      annotations: ['@Builder'],
      example: `Entidade.builder().nome("exemplo").valor(100).build();`,
    },
  ];

  return (
    <div className="entity-container">
      <h1 className="entity-title">Implementação de Entidades</h1>

      <section className="section">
        <h2>Dependências</h2>
        <ul className="compact-list">
          {technologies.map((tech, idx) => (
            <li key={idx}>
              <span className="highlight">{tech.name}</span>: {tech.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Anotações JPA</h2>
        <ul className="compact-list">
          {jpaAnnotations.map((ann, idx) => (
            <li key={idx}>
              <div>{ann.description}</div>
              <div className="inline-tags">
                <span className="annotation">{ann.annotation}</span>
              </div>
              {ann.example && <pre className="code-block">{ann.example}</pre>}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Anotações Lombok</h2>
        <ul className="compact-list">
          {lombokFeatures.map((feature, idx) => (
            <li key={idx}>
              {feature.description}
              <div className="inline-tags">
                {feature.annotations.map((ann, i) => (
                  <span key={i} className="annotation">
                    {ann}
                  </span>
                ))}
              </div>
              {feature.example && (
                <pre className="code-block">{feature.example}</pre>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EntityImplementation;
