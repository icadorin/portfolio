import React from 'react';
import '@styles-quickbite/entity.css';
import MavenDependency from '@code-block/MavenDependency';
import CodeJakarAnn from '@data-code/CodeJakarAnn';
import CodeWithBuilder from '@data-code/CodeWithBuilder';
import CodeWithoutBuilder from '@data-code/CodeWithoutBuilder';

const EntityImplementation: React.FC = () => {
  return (
    <div className="entity-container">
      <h1 className="entity-title">Implementação de Entidades</h1>
      <h2>Dependências</h2>
      <div className="dependencies-section">
        <div className="dependencies-box">
          <span className="dependencies">JPA</span> e{' '}
          <span className="dependencies">Lombok</span>
        </div>
        <p>Import da depenência no arquivo pom.xml</p>
        <MavenDependency
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />
      </div>
      <p>
        Essa dependência permite o acesso ao JPA e Hibernate. Dessa forma, eu
        utilizo as anotaçãoes do JPA, como: @Table, @Id, @Column, etc; para
        montar um planejamento dos dados com o JPA. Depois, o Hibernate faz o
        trabalho de execução para criação das tabelas, de acordo com o
        planejado.
      </p>
      <p>
        No código abaixo, eu faço o uso das anotações do Jakarta, que estão
        contidas no JPA.
      </p>
      <CodeJakarAnn />
      <p>
        O Lombok foi uma opção adotada para redução do código boilerplate,
        códigos que se repetem com pouca ou nenhuma variação. Um exemplo disso
        seria a criação dos getters e setters. Além disso, o Lombok também
        permite a criação construtores com e sem parâmetros
      </p>

      <p>
        Por fim, implementei o padrão de projeto builder para deixar a criação
        dos objetos mais elegantes.
      </p>
      <div>
        <CodeWithBuilder /> <CodeWithoutBuilder />
      </div>
    </div>
  );
};

export default EntityImplementation;
