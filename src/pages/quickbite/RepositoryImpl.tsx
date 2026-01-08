import React from 'react';
import QuickbiteHighlighter from '@/components/highlight/quickbite/QuickbiteHighlighter';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import CodeBlock from '@/components/code-block/CodeBlock';
import { repositoryCode } from '@/data/repositoryCode';

const RepositoryImpl: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">ESSA SEÇÃO SERÁ REFATORADA!!!!</h1>
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
          O uso do Spring Data JPA simplifica a implementação da camada de repositórios, atuando
          como uma abstração sobre o JPA (Java Persistense API), que fornece os métodos CRUD
          prontos, permitindo a criação de queries personalizadas de maneira eficiente.
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
          A função principal é a capacidade de criar consultas a partir do padrão de nomeclatura. O
          Spring Data JPA gera automaticamente a implementação dos métodos com base nas palavras
          pré-definidas, como: findyBy, existsBy, countBy, deleteBy, assim por diante. Desta forma,
          facilita e acelera essa parte da implementação.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Consultas personalizadas com @Query</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Quando as regra de negócio exigem consultas mais complexas que não podem ser geradas
          automaticamente pelo JPA, utilizei a anotação @Query em conjunto com o JPQL (Java
          Persistense Query Language). Essa abordagem possibilita o controle necessário sobre a
          consulta, com otimizações específicas e buscar dados em cenários de joins complexos ou
          projeções.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.queryAnnotation} />

        <h3 className="sub-description">Parâmetros com @Param</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para garantir que todas as queries personalizadas sejam seguras e legíveis, adotei o uso
          do @Param que vincula parâmetros nomeados. Esta prática é muito importante, pois ela
          previne que qualquer caractere especial digitado pelo usuário seja interpretado como parte
          do comando SQL (SQL Injection) e torna o código mais claro, em especial com consultas que
          possuem múltiplos filtros.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.queryWithParams} />

        <h3 className="sub-description">Consultas com operações de modificação</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Em operações personalizadas que modificam o banco de dados (UPDATE E DELETE), é
          obrigatório o uso da anotação @Modifying. Desta forma, a operação se difere das consultas
          de leitura (SELECT), garantindo que o Spring Data JPA execute a query com as configurações
          necessárias para uma operação de modificação de dados seja executada corretamente.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.modifyingQuery} />

        <h3 className="sub-description">Consultas com condições complexas</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Em consultas que envolvem diferentes condições e JOINS entre entidades, o uso do JPQL com
          a cláusula WHERE expecífica é essencial, para que seja possível filtrar registros não
          apenas por propriedades da entidade principal, mas também por relacionamentos e
          propriedades encadeadas (ex: buscar um pedido pelo nome do cliente).
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.complexQuery} />

        <h3 className="sub-description">Consultas com agregação</h3>
        <QuickbiteHighlighter asParagraph={true}>
          As operações de contagem, soma e outras formas de agregação foram implementadas através de
          funções como COUNT e SUM dentro da @Query, para facilitar os dados gerados de estatísticas
          e relatórios, como número de registros ativos ou a soma total de vendas.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.aggregationQuery} />

        <h3 className="sub-description">Busca "Case-Insensitive"</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para evitar que buscas de texto como email, nome ou descrição dependam de letras
          maiúsculas ou minúsculas, apliquei a função LOWER() diretamente nas queries, para que a
          comparação seja case-insensitive garantindo que o usuário tenha experiência melhor em
          buscas, independente de como o texto é digitado.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.caseInsensitiveQuery} />

        <h3 className="sub-description">Filtro por intervalo de datas</h3>
        <QuickbiteHighlighter asParagraph={true}>
          No repositório de pedidos, implementei um método específico para buscar registros dentro
          de um intervalo de tempo. Esse filtro é feito com o uso da cláusula BETWEEN diretamente na
          query JPQL, permitindo difinir uma data inicial e final. Esse tipo de consulta é útil para
          gerar relatórios, acompanhar históricos de pedidos e analisar atividades do usuário em
          períodos específicos, mantendo a lógica simples.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.dateRangeQuery} />

        <h3 className="sub-description">Consultas com ordenação</h3>
        <QuickbiteHighlighter asParagraph={true}>
          A ordenação de resultados é um requisito comum e o Spring Data JPA simplifica isso com o
          padrão de nomeclatura, como por exemplo: findByIsActiveTrueOrderBySortOrderAsc, este
          método retorna os registros ativos automaticamente ordenados pela coluna sortOrder de
          forma ascendente.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.orderingQuery} />
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Padrões de Implementação</h3>

        <h3 className="sub-description">Padronização de nomes</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Utilização de nomes com palavras-chave do Spring Data JPA para derivar consultas
          automaticamente para métodos do repositório:
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.nameConventions} />

        <h3 className="sub-description">Filtros por status</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Alguns filtros por status também foram implementados (isActive, revoked, isAvailable),
          para garantir que apenas dados esperados sejam retornados.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.statusFilter} />

        <h3 className="sub-description">Operador para valores opcionais</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Optional foi usado para métodos que podem retornar valores nulos, para lidar com possíves
          problemas.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.optionalUsage} />
      </div>
    </div>
  );
};

export default RepositoryImpl;
