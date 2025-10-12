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
        <p className="entity-paragraph">
          Import da dependência no arquivo pom.xml
        </p>

        {/* CRIAR UM COMPONENTE REUTIL. PARA O REGEX */}
        <MavenDependency
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />
        <p className="entity-paragraph">
          <HighlightedTextQuickbite>
            Essa dependência permite o acesso ao JPA e Hibernate. Dessa forma,
            eu utilizo as anotações do JPA, como: @Table, @Id, @Column, etc;
            para montar um planejamento dos dados com o JPA. Depois, o Hibernate
            faz o trabalho de execução para criação das tabelas, de acordo com o
            planejado.
          </HighlightedTextQuickbite>
        </p>
        <p className="entity-paragraph">
          <HighlightedTextQuickbite>
            No código abaixo, eu faço o uso das anotações do Jakarta, que estão
            contidas no JPA.
          </HighlightedTextQuickbite>
        </p>

        <CodeBlockWithTitle
          title={codeJakarAnn.title}
          code={codeJakarAnn.code}
        />

        <p className="entity-paragraph">
          <HighlightedTextQuickbite>
            Para implementação de alguns campos eu utilizei relacionamentos
            como(@OneToMany, @ManyToOne, etc) onde a configuração é adaptada
            conforme a necessidade do caso. Neste caso, implementei um
            relacionamento many-to-one utilizando estratégia de carregamento
            LAZY. Essa configuração impede que os dados relacionados sejam
            carregados automaticamente em uma consulta, exige uma consulta
            específica quando necessário.
          </HighlightedTextQuickbite>
        </p>

        <CodeBlockWithTitle title={manyToOne.title} code={manyToOne.code} />

        <p className="entity-paragraph">
          <HighlightedTextQuickbite>
            Neste caso, com @OneToMany usei outras configurações, um pouco mais
            específicas, porém comum para salvar dados, apesar de não ser o
            comportamento padrão:
          </HighlightedTextQuickbite>
        </p>

        <ul className="entity-list">
          <li className="entity-list-item">
            <HighlightedTextQuickbite>
              mappedBy: Define o lado inverso da relação.
            </HighlightedTextQuickbite>
          </li>
          <li className="entity-list-item">
            <HighlightedTextQuickbite>
              order: Garante a ordenação dos dados.
            </HighlightedTextQuickbite>
          </li>
          <li className="entity-list-item">
            <HighlightedTextQuickbite>
              cascade: Aplica exclusão em modo cascata para os registros.
            </HighlightedTextQuickbite>
          </li>
          <li className="entity-list-item">
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
        <p className="entity-paragraph">
          Import da dependência no arquivo pom.xml
        </p>
        <MavenDependency groupId="org.projectlombok" artifactId="lombok" />
        <p className="entity-paragraph">
          <HighlightedTextQuickbite>
            O Lombok foi uma opção adotada para redução do código boilerplate,
            códigos que se repetem com pouca ou nenhuma variação. Um exemplo
            disso seria a criação dos getters e setters. Além disso, o Lombok
            também permite a criação de construtores com e sem parâmetros.
          </HighlightedTextQuickbite>
        </p>
        <p className="entity-paragraph">
          Para construtores implementei o padrão de projeto builder para deixar
          a criação dos objetos mais elegantes.
        </p>
        <div className="entity-code-examples">
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

          <p className="entity-paragraph">
            <HighlightedTextQuickbite>
              Embora o uso do padrão Builder pelo Lombok elimine a necessidade
              de um construtor, o JPA requer obrigatoriamente um construtor sem
              parâmetros. Para o projeto, eu implementei construtores sem
              parâmetros, com todos os parâmetros para padronização, e também
              construtores personalizados que recebem apenas os atributos
              necessários.
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
