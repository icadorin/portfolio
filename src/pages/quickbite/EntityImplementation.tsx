import React from 'react';
import '@styles-quickbite/entity.css';
import MavenDependency from '@code-block/MavenDependency';
import CodeBlockWithTitle from '@code-block/CodeBlockWithTitle';
import { codeJakarAnn } from '@data-code/codeJakarAnn';
import { codeWithoutBuilder } from '@data-code/codeWithoutBuilder';
import { codeWithBuilder } from '@data-code/codeWithBuilder';
import { construtors } from '@data-code/constructors';
import { manyToOne } from '@/data/code/manyToOne';
import { oneToMany } from '@/data/code/oneToMany';
import { buildDefaultEntity } from '@/data/code/buildDefaultEntity';

import HighlightedTextQuickbite from '@text-highlight/HighlightedTextQuickbite';
import '@styles-quickbite/highlightedTextQuickbite.css';

const EntityImplementation: React.FC = () => {
  return (
    <div className="entity">
      <h1 className="entity-title">Implementação de Entidades</h1>
      <h2 className="entity-subtitle">Dependências</h2>
      <div className="entity-dependencies">
        <div className="entity-tech-badge-container">
          <span className="entity-tech-badge">JPA</span> e{' '}
          <span className="entity-tech-badge">Lombok</span>
        </div>
      </div>
      <div className="jpa-dep">
        <h3 className="entity-tech-title">JPA</h3>
        <p>Import da dependência no arquivo pom.xml</p>

        {/* CRIAR UM COMPONENTE REUTIL. PARA O REGEX */}
        <MavenDependency
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />
        <p>
          <HighlightedTextQuickbite>
            Essa dependência permite o acesso ao JPA e Hibernate. Dessa forma,
            utilizo as anotações do JPA, como: @Table, @Id, @Column, etc; para
            montar um planejamento dos dados com o JPA. Depois, o Hibernate faz
            o trabalho de execução para criação das tabelas, de acordo com o
            planejado.
          </HighlightedTextQuickbite>
        </p>
        <p>
          <HighlightedTextQuickbite>
            No código abaixo, faço o uso das anotações do Jakarta, que estão
            contidas no JPA.
          </HighlightedTextQuickbite>
        </p>

        <CodeBlockWithTitle
          title={codeJakarAnn.title}
          code={codeJakarAnn.code}
        />

        <p>
          <HighlightedTextQuickbite>
            Para implementação de alguns campos, utilizei relacionamentos
            como(@OneToMany, @ManyToOne, etc) onde a configuração é adaptada
            conforme a necessidade. Neste caso, implementei um relacionamento
            many-to-one com estratégia de carregamento LAZY. Essa configuração
            impede que os dados relacionados sejam carregados automaticamente em
            uma consulta, exige uma consulta específica quando necessário.
          </HighlightedTextQuickbite>
        </p>

        <CodeBlockWithTitle title={manyToOne.title} code={manyToOne.code} />

        <p>
          <HighlightedTextQuickbite>
            Neste caso, com @OneToMany usei outras configurações, um pouco mais
            específicas, porém comum para salvar dados, apesar de não ser o
            comportamento padrão:
          </HighlightedTextQuickbite>
        </p>

        <ul className="list">
          <li className="list-item">
            <HighlightedTextQuickbite>
              mappedBy: Define o lado inverso da relação.
            </HighlightedTextQuickbite>
          </li>
          <li className="list-item">
            <HighlightedTextQuickbite>
              order: Garante a ordenação dos dados.
            </HighlightedTextQuickbite>
          </li>
          <li className="list-item">
            <HighlightedTextQuickbite>
              cascade: Aplica exclusão em modo cascata para os registros.
            </HighlightedTextQuickbite>
          </li>
          <li className="list-item">
            {' '}
            <HighlightedTextQuickbite>
              orphanRemoval: Remove entidades "órfãs", quando um registro não
              possui mais sua entidade principal.
            </HighlightedTextQuickbite>
          </li>
        </ul>

        <CodeBlockWithTitle title={oneToMany.title} code={oneToMany.code} />
      </div>{' '}
      <div className="lombok-dep">
        <h3 className="entity-tech-title">Lombok</h3>
        <p>Import da dependência no arquivo pom.xml</p>
        <MavenDependency groupId="org.projectlombok" artifactId="lombok" />
        <p>
          <HighlightedTextQuickbite>
            O Lombok foi uma opção adotada para redução do código boilerplate,
            códigos que se repetem com pouca ou nenhuma variação. Um exemplo
            disso seria a criação dos getters e setters. Além disso, o Lombok
            também permite a criação de construtores com e sem parâmetros.
          </HighlightedTextQuickbite>
        </p>
        <p>
          Para criar objetos utilizei o padrão Builder, que torna a criação dos
          objetos mais legível e segura por ser imutável.
        </p>
        <div>
          <CodeBlockWithTitle
            title={codeWithoutBuilder.title}
            code={codeWithoutBuilder.code}
            icon={<span>❌</span>}
          />
          <CodeBlockWithTitle
            title={codeWithBuilder.title}
            code={codeWithBuilder.code}
            icon={<span>✅</span>}
          />
          <p>
            É importante ressaltar que, para criar objetos sem passar valores
            padrão com o Builder é necessário configurar isso no campo da
            entidade.
          </p>
          <CodeBlockWithTitle
            title={buildDefaultEntity.title}
            code={buildDefaultEntity.code}
          />
          <p>
            <HighlightedTextQuickbite>
              Quando o padrão Builder é utilizado, ele cria um construtor com
              todos os parâmetros, mas para que tenha esse funcionamento não
              pode haver outros construtores, seja criado manualmente ou por
              anotação. O JPA exige a criação de um construtor sem parâmetros,
              isso faz com que o Builder não gere um construtor, ele passa a
              usar o construtor que eu criei, porém o contrutor sem parâmetros
              utilizado para o JPA não funciona para o Builder, ele precisa de
              um construtor com parâmetros. Neste caso, eu implementei os dois
              contrutores, com e sem parâmetros jutamente com o Builder.
            </HighlightedTextQuickbite>
          </p>

          <CodeBlockWithTitle
            title={construtors.title}
            code={construtors.code}
          />
        </div>
      </div>
    </div>
  );
};

export default EntityImplementation;
