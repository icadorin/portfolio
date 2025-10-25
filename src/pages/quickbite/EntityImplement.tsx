import React from 'react';
import '@styles-quickbite/quickbiteHighlighter.css';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import CodeBlock from '@/components/code-block/CodeBlock';
import QuickbiteHighlighter from '@/components/highlight/QuickbiteHighlighter';
import { entityCodes } from '@/data/entityCodes';

const EntityImplementation: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação de Entidades</h1>
      <h2 className="section-subtitle">Dependências</h2>
      <div className="section-content">
        <div className="tech-badge-container">
          <span className="tech-badge">JPA</span>
          <span className="tech-badge">Lombok</span>
        </div>
      </div>

      <div className="dep-content">
        <h3 className="tech-title">JPA</h3>
        <p>Import da dependência no arquivo pom.xml</p>

        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />

        <h3 className="sub-description">Anotações Jakarta</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Essa dependência permite o acesso ao JPA e Hibernate. Dessa forma, utilizo as anotações do
          JPA, como: @Table, @Id, @Column, etc; para montar um planejamento dos dados com o JPA.
          Depois, o Hibernate faz o trabalho de execução para criação das tabelas, de acordo com o
          planejado.
        </QuickbiteHighlighter>

        <QuickbiteHighlighter asParagraph={true}>
          No código abaixo, faço o uso das anotações do Jakarta, que estão contidas no JPA.
        </QuickbiteHighlighter>

        <CodeBlock code={entityCodes.jakarAnn} />

        <h3 className="sub-description">Relação ManyToOne com FetchType.LAZY</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para implementação de alguns campos, utilizei relacionamentos como(@OneToMany, @ManyToOne,
          etc) onde a configuração é adaptada conforme a necessidade. Neste caso, implementei um
          relacionamento many-to-one com estratégia de carregamento LAZY. Essa configuração impede
          que os dados relacionados sejam carregados automaticamente em uma consulta, exige uma
          consulta específica quando necessário.
        </QuickbiteHighlighter>

        <CodeBlock code={entityCodes.manyToOne} />

        <h3 className="sub-description">Relação OneToMany com Cascade e Orphan Removal</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Neste caso, com @OneToMany usei outras configurações, um pouco mais específicas, porém
          comum para salvar dados, apesar de não ser o comportamento padrão:
        </QuickbiteHighlighter>

        <ul className="list">
          <li className="list-item">
            <QuickbiteHighlighter>mappedBy: Define o lado inverso da relação.</QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>order: Garante a ordenação dos dados.</QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>
              cascade: Aplica exclusão em modo cascata para os registros.
            </QuickbiteHighlighter>
          </li>
          <li className="list-item">
            {' '}
            <QuickbiteHighlighter>
              orphanRemoval: Remove entidades "órfãs", quando um registro não possui mais sua
              entidade principal.
            </QuickbiteHighlighter>
          </li>
        </ul>

        <CodeBlock code={entityCodes.oneToMany} />

        <h3 className="sub-description">Primary Key Compartilhada entre Entidades</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para criar a tabela UserProfile, adicionei a anotação @MapsId, pois essa tebela é um
          complemento da tabela User. As duas entidades compartilham a mesma chave primária, desta
          forma, a entidade UserProfile herda a chave primária da entidade principal User.
        </QuickbiteHighlighter>

        <CodeBlock code={entityCodes.sharedPrimaryKey} />

        <h3 className="sub-description">Ciclo de vida JPA - @PrePersist e @PreUpdate</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para ter um controle da criação e edição dos registros, implementei campos de data com
          LocalDateTime. Para automatizar o preenchimento desses campos, utilizei as anotações
          @PrePersist e @PreUpdate do JPA, que executam métodos automaticamente antes das operações
          de salvar a atualizar. Desta forma, os campos são preenchidos corretamente com timestamps
          (campos de data e hora) sem a necessidade de implementação manual dessa lógica.
        </QuickbiteHighlighter>

        <CodeBlock code={entityCodes.prePersistUpdate} />
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Lombok</h3>
        <p>Import da dependência no arquivo pom.xml</p>
        <MavenSnippet groupId="org.projectlombok" artifactId="lombok" />

        <QuickbiteHighlighter asParagraph={true}>
          O Lombok foi uma opção adotada para redução do código boilerplate, códigos que se repetem
          com pouca ou nenhuma variação. Um exemplo disso seria a criação dos getters e setters.
          Além disso, o Lombok também permite a criação de construtores com e sem parâmetros.
        </QuickbiteHighlighter>

        <p>
          Para criar objetos utilizei o padrão Builder, que torna a criação dos objetos mais legível
          e segura por ser imutável.
        </p>

        <h3 className="sub-description">❌ Sem o uso do Builder</h3>
        <CodeBlock code={entityCodes.codeWithoutBuilder} />

        <h3 className="sub-description">✅ Com o uso do Builder</h3>
        <CodeBlock code={entityCodes.codeWithBuilder} />

        <h3 className="sub-description">Configurando campo como valores padrão</h3>
        <p>
          É importante ressaltar que, para criar objetos sem passar valores padrão com o Builder é
          necessário configurar isso no campo da entidade.
        </p>

        <CodeBlock code={entityCodes.buildDefaultEntity} />

        <h3 className="sub-description">Construtores</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Quando o padrão Builder é utilizado, ele cria um construtor com todos os parâmetros, mas
          para que tenha esse funcionamento não pode haver outros construtores, seja criado
          manualmente ou por anotação. O JPA exige a criação de um construtor sem parâmetros, isso
          faz com que o Builder não gere um construtor, ele passa a usar o construtor que eu criei,
          porém o contrutor sem parâmetros utilizado para o JPA não funciona para o Builder, ele
          precisa de um construtor com parâmetros. Neste caso, eu implementei os dois contrutores,
          com e sem parâmetros jutamente com o Builder.
        </QuickbiteHighlighter>

        <CodeBlock code={entityCodes.construtors} />
      </div>
    </div>
  );
};

export default EntityImplementation;
