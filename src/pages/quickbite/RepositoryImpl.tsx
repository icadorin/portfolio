import React from 'react';
import QuickbiteHighlighter from '@/components/highlight/QuickbiteHighlighter';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import { repositoryCode } from '@/data/repositoryCode';

const RepositoryImpl: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação de Repositories</h1>
      <h2 className="section-subtitle">Dependências</h2>
      <div className="section-content">
        <div className="tech-badge-container">
          <span className="tech-badge">Spring Data JPA</span>
          <span className="tech-badge">JPA</span>
        </div>
      </div>

      <div className="dep-content">
        <p>Import das dependências no arquivo.pom</p>
        <QuickbiteHighlighter asParagraph={true}>
          O Spring Data JPA simplifica de forma significativa a implementação de repositórios, ele
          fornece métodos de CRUD prontos e permite a criação de queries personalizadas através de
          convenções de nomeclatura ou anotações.
        </QuickbiteHighlighter>
        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Spring Data JPA</h3>

        <h3 className="sub-description">Interface JpaRepository</h3>
        <QuickbiteHighlighter asParagraph={true}>
          O Spring JPA permite criar queries apenas seguindo padrões de nomeclatura. Os métodos são
          automaticamente implementados baseando-se nas palavras chave como: findBy, existsBy,
          countBy, etc.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Consultas com @Query</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para utilizar quries mais complexas que não seguem o padrão de nomeclatura reconhecido
          pelo Spring JPA, implementei anotação @Query com JPQL (Java Persistense Query Language).
          Isso garante o controle sobre as consultas e otimizaçãoes específicas.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Parâmetros com @Param</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para garantir que as queries sejam seguras e legiveis, adotei o uso do @Param para
          vincular parâmetros. Isso previne SQL injection e torna o código mais claro.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Consultas com operações de modificação</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Nas operações de UPDATE E DELETE que modificam o banco de dados, é preciso usar a anotação
          @Modifyingem conjunto com @Query. Isso informa ao Spring Data essa determinada operação
          que altera os dados e não é apenas uma consulta.
        </QuickbiteHighlighter>

        <h3 className="sub-decription">Consultas com condições complexas</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Em consultas que envolvem diferentes condições e join entre entidades, fiz o uso do JPQL
          com cláusula WHERE especifica. Desta forma, permite filtrar por relacionamentos e
          propriedades encadeadas.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Consultas com agregação</h3>
        <QuickbiteHighlighter asParagraph={true}>
          As operações de contagem e agregação são realizadas através da função COUNT em conjunto
          com condições específicas, facilitando a visualização de estatísticas e relatórios.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Busca com Igone Case</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para buscar case-insensitive é feito por meio da função LOWER() nas queries para garantir
          que a pesquisa não dependa de letras maiúsculas e minúsculas.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Consulta com intervalo de datas</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para fitrar por intervalos de tempo, utilizamos BETWEEN com parâmetros de data, que
          normalmente são usados para relatórios e históricos.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Consultas com ordenação</h3>
        <QuickbiteHighlighter asParagraph={true}>
          O método de ordenação é muito comum em repositórios para ordenação automática, como por
          exemplo: findByIsActiveTrueOrderBySortOrderAsc, esse método retorna registros ativos
          ordenados por uma conluna específica.
        </QuickbiteHighlighter>
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Padrões de Implementação</h3>

        <h3 className="sub-description"></h3>
        <QuickbiteHighlighter>Sepração com módulo</QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph={true}>
          Os repositórios são organizados por módulo de negócio (auth_service, product_service,
          order_service), cada um com suas entidades e quiries específicas.
        </QuickbiteHighlighter>
      </div>
    </div>
  );
};

export default RepositoryImpl;
