import React from 'react';
import QuickbiteHighlighter from '@/components/highlight/quickbite/QuickbiteHighlighter';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import CodeBlock from '@/components/code-block/CodeBlock';
import { HighlightedSection } from '@/components/documentation-layout/HighlightedSection';
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
        <QuickbiteHighlighter asParagraph>
          <p>Import das dependências no arquivo pom.xml</p>
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>
          O uso do Spring Data JPA simplifica a implementação da camada de repositórios, atuando
          como uma abstração sobre o JPA (Java Persistense API), que fornece os métodos CRUD
          prontos, permitindo a criação de queries personalizadas de maneira eficiente.
        </QuickbiteHighlighter>
        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-data-jpa"
        />
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Spring Data JPA</h2>

        <HighlightedSection
          title="Interface JpaRepository"
          items={[
            'Criação automática de consultas a partir do padrão de nomenclatura: findBy, existsBy, countBy, deleteBy',
            'Facilita e acelera a implementação de consultas básicas',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          O Spring Data JPA gera automaticamente a implementação dos métodos com base nas palavras
          pré-definidas, como: findBy, existsBy, countBy, deleteBy, facilitando e acelerando essa
          parte da implementação.
        </QuickbiteHighlighter>

        <HighlightedSection
          title="Consultas personalizadas com @Query"
          items={[
            'Permite consultas complexas que não podem ser geradas automaticamente',
            'Controle total sobre JPQL e otimizações específicas',
            'Suporte a joins complexos e projeções',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Utilize a anotação @Query em conjunto com JPQL (Java Persistense Query Language) para
          controlar consultas complexas que não podem ser derivadas automaticamente.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.queryAnnotation} />

        <HighlightedSection
          title="Parâmetros com @Param"
          items={[
            'Vincula parâmetros nomeados em queries',
            'Previne SQL Injection e mantém código legível',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Para garantir que todas as queries personalizadas sejam seguras e legíveis, utilizei o
          @Param, que vincula parâmetros nomeados, prevenindo que caracteres especiais sejam
          interpretados como SQL e tornando o código mais claro.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.queryWithParams} />

        <HighlightedSection
          title="Consultas com operações de modificação"
          items={['Uso obrigatório de @Modifying para UPDATE e DELETE']}
        />
        <QuickbiteHighlighter asParagraph>
          Em operações personalizadas que modificam o banco de dados (UPDATE e DELETE), é
          obrigatório o uso da anotação @Modifying para garantir que a operação seja executada
          corretamente pelo Spring Data JPA.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.modifyingQuery} />

        <HighlightedSection
          title="Consultas com condições complexas"
          items={[
            'Filtragem por propriedades encadeadas e joins entre entidades',
            'Cláusula WHERE específica para cada cenário',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Para consultas que envolvem diferentes condições e joins entre entidades, o uso de JPQL
          com cláusula WHERE específica permite filtrar registros por propriedades da entidade
          principal e de entidades relacionadas.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.complexQuery} />

        <HighlightedSection
          title="Consultas com agregação"
          items={['Operações como COUNT e SUM em @Query para relatórios e estatísticas']}
        />
        <QuickbiteHighlighter asParagraph>
          Operações de contagem, soma e agregação foram implementadas via funções COUNT e SUM dentro
          da @Query, facilitando geração de dados estatísticos e relatórios.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.aggregationQuery} />

        <HighlightedSection
          title='Busca "Case-Insensitive"'
          items={['Uso de LOWER() para comparar sem diferenciar maiúsculas de minúsculas']}
        />
        <QuickbiteHighlighter asParagraph>
          Para evitar que buscas dependam de letras maiúsculas ou minúsculas, apliquei LOWER()
          diretamente nas queries, garantindo comparações case-insensitive.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.caseInsensitiveQuery} />

        <HighlightedSection
          title="Filtro por intervalo de datas"
          items={['Uso da cláusula BETWEEN para definir datas inicial e final']}
        />
        <QuickbiteHighlighter asParagraph>
          No repositório de pedidos, implementei um método para buscar registros dentro de um
          intervalo de tempo usando BETWEEN na query JPQL, útil para relatórios e históricos.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.dateRangeQuery} />

        <HighlightedSection
          title="Consultas com ordenação"
          items={[
            'Ordenação automática baseada em padrão de nomenclatura do Spring Data JPA',
            'Exemplo: findByIsActiveTrueOrderBySortOrderAsc',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          A ordenação de resultados é um requisito comum, e o Spring Data JPA permite métodos que
          retornam registros automaticamente ordenados pela coluna desejada.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.orderingQuery} />
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Padrões de Implementação</h2>

        <HighlightedSection
          title="Padronização de nomes"
          items={['Uso de palavras-chave do Spring Data JPA para derivar consultas']}
        />
        <QuickbiteHighlighter asParagraph>
          Utilização de nomes com palavras-chave do Spring Data JPA para derivar consultas
          automaticamente para métodos do repositório.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.nameConventions} />

        <HighlightedSection
          title="Filtros por status"
          items={['Filtragem de dados com isActive, revoked, isAvailable']}
        />
        <QuickbiteHighlighter asParagraph>
          Alguns filtros por status também foram implementados (isActive, revoked, isAvailable),
          garantindo que apenas dados esperados sejam retornados.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.statusFilter} />

        <HighlightedSection
          title="Operador para valores opcionais"
          items={['Uso de Optional para métodos que podem retornar null']}
        />
        <QuickbiteHighlighter asParagraph>
          Optional foi usado para métodos que podem retornar valores nulos, para lidar com possíveis
          problemas.
        </QuickbiteHighlighter>
        <CodeBlock code={repositoryCode.optionalUsage} />
      </div>
    </div>
  );
};

export default RepositoryImpl;
