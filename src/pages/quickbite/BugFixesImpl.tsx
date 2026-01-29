import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';
import '@styles-quickbite/quickbite.css';

import BugFixesCommitTable from '@/components/documentation-layout/CommitTable';
import { ProblemDecisionBenefit } from '@/components/documentation-layout/ProblemDecisionBenefit';
import { HighlightedSection } from '@/components/documentation-layout/HighlightedSection';
import { SimpleSection } from '@/components/documentation-layout/SimpleSection';
import { codeFixes } from '@/data/codeFixes';
import CodeBlock from '@/components/code-block/CodeBlock';

const BugFixesEnterprise: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Refatoração e Correções no Backend do QuickBite</h1>

      <h2 className="section-subtitle">Visão geral</h2>
      <p className="section-intro">
        Esta seção apresenta correções e refatorações aplicadas no backend, destacando problemas
        técnicos identificados ao longo do desenvolvimento e as decisões adotadas para resolvê-los.
        Os exemplos a seguir ilustram ajustes de modelagem, validação, persistência e tratamento de
        erros, sempre com foco em previsibilidade, manutenibilidade e boas práticas.
      </p>

      <div className="dep-content">
        <HighlightedSection
          title="Principais Problemas Técnicos Identificados e Corrigidos"
          items={[
            'Modelagem incorreta de relacionamentos JPA gerando inconsistência de dados (OneToMany → OneToOne)',
            'Adição de campos essenciais em entidades (ex: endereço em perfil de usuário)',
            'Correções de nomes de variáveis e tipografias no código',
            'Implementação de defaults no builder e suporte nativo a JSONB no PostgreSQL',
            'Mudança de estruturas de dados para maior flexibilidade (List para Map)',
            'Mapeamento manual de DTOs para evitar dependências automáticas falhas',
            'Adição de getters/setters via Lombok em DTOs',
            'Melhoria no tratamento de erros em métodos críticos como login',
            'Resolução de issues com validação de tokens de refresh',
            'Ajustes em configurações de bancos de dados por serviço',
            'Correções em campos de entidades e testes',
          ]}
        />

        <HighlightedSection
          title="Benefícios das Correções"
          items={[
            'Maior consistência e integridade dos dados com relacionamentos corretos',
            'Construção de objetos mais segura com valores default garantidos',
            'Performance otimizada com mapeamento nativo de JSON no banco',
            'Validações robustas reduzindo erros em runtime',
            'Isolamento completo entre serviços para melhor escalabilidade',
            'Testes mais resilientes e cobertura abrangente de cenários',
          ]}
        />

        <h2 className="section-subtitle">Exemplos de Código – Decisões Técnicas Relevantes</h2>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Correção de Relacionamento em UserProfile</h3>
          <ProblemDecisionBenefit
            problem="O relacionamento estava modelado como OneToMany, gerando inconsistência de chave e queries incorretas."
            decision="Ajustar para OneToOne com @MapsId e tabela correta."
            benefit="Integridade referencial garantida e queries previsíveis."
          />
          <CodeBlock code={codeFixes.relationshipFix} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Adição de Endereço em UserProfile</h3>
          <CodeBlock code={codeFixes.addAddress} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Correção de Nome de Variável</h3>
          <CodeBlock code={codeFixes.correctImageUrl} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Adição de Builder default e jsonb para mapeamento
          </h3>
          <ProblemDecisionBenefit
            problem="Ao utilizar o padrão Builder, os atributos que são inicializados diretamente na entidade não são populados automaticamente sem o uso de @Builder.Default. Também, sem a definição do tipo jsonb, o Hibernate não consegue mapear corretamente campo JSON para o banco de dados."
            decision="Utilizar @Builder.Default para atributos que possuem valores padrão e definir o tipo jsonb para campos do tipo Map."
            benefit="Garantir valores padrão e consistentes ao usar o Builder e persistência correta de estruturas JSON no banco de dados."
          />
          <CodeBlock code={codeFixes.builderDefaults} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Mudança de List para Map</h3>
          <ProblemDecisionBenefit
            problem="Campos tipados com List faziam com que o service conhecesse detalhes de persistência, sendo responsável pela serialização dos dados. Havia lógica técnica misturada com regra de negócio."
            decision="Ajustar a tipagem para Map<String, Object> e definir o campo como jsonb com @JdbcTypeCode (SqlTypes.JSON)"
            benefit="Melhor separação de responsabilidades, o service passa a orquestrar dados, enquanto a persistência e a conversão JSON ficam a cargo do Hibernate, eliminando a necessidade de conversões manuais."
          />
          <CodeBlock code={codeFixes.listToMap} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Mapeamento direto de entidade para response
          </h3>
          <ProblemDecisionBenefit
            problem="O uso de ObjectMapper para conversão automática e desserialização de campos JSON submetia o service a lidar com detalhes de serialização e tratamento de exceção, além de introduzir mapeamento implícito."
            decision="Remover o uso de conversão automática e realizar mapeamento manual e explícito de todos os campos da entidade para o DTO de resposta, utilizando estruturas já desserializadas pelo Hibernate."
            benefit="Código mais previsível, melhor separação de responsabilidades, entre persistência (Hibernate) e mapeamento de resposta (DTO), eliminando lógica técnica do service."
          />
          <CodeBlock code={codeFixes.mapToResponse} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Adição de Getters/Setters em DTO</h3>
          <CodeBlock code={codeFixes.gettersSetters} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Login com tratamento de erro e ciclo de refresh token
          </h3>
          <ProblemDecisionBenefit
            problem="O fluxo de autenticação não tratava exceções específicas de forma controlada, expondo mensagens genéricas ou falhas inesperadas. Além disso, não tinha uma garantia direta de que o refresh token era gerado, persistido e validado corretamente."
            decision="Implementar tratamento de forma direta para AuthenticationException no login e adicionar testes automatizados para validar a geração, persistência e estado do refresh token."
            benefit="Fluxo de autenticação mais seguro e previsível, mensagens de erro controladas, maior confiabilidade no gerenciamento de sessão e cobertura de testes em um ponto crítico do sistema."
          />
          <CodeBlock code={codeFixes.errorHandlingLogin} />
          <CodeBlock code={codeFixes.refreshToken} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Padronização de propriedades de banco por serviço
          </h3>
          <ProblemDecisionBenefit
            problem="As configurações de banco de dados estavam misturadas com valores reais de ambiente, o que gerava risco de exposição de credenciais."
            decision="Criar arquivos application.properties.example contendo apenas valores de referência, mantendo as configurações reais fora do versionamento."
            benefit="Maior segurança, padronização de ambiente e facilidade de onboarding."
          />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Handler global de validação</h3>
          <ProblemDecisionBenefit
            problem="Erros de validação eram tratados de forma inconsistente espalhados pelos controllers, dificultando padronização de mensagens e manutenção de código."
            decision="Centralizar o tratamento de exceções de validação em um handler global utilizando @RestControllerAdvice e @ExceptionHandler."
            benefit="Padronização das respostas de erro, redução de código duplicado e manutenção facilitada."
          />
          <CodeBlock code={codeFixes.validationAndErrorHandling} />
        </div>

        <HighlightedSection
          title="Desafios Enfrentados e Soluções"
          items={[
            'Conversões JSON manuais propensas a erros - Solução: Uso de @JdbcTypeCode para mapeamento nativo.',
            'Validações inconsistentes - Solução: Handler global e anotações Bean Validation.',
            'Testes frágeis - Solução: Matchers flexíveis e verificações explícitas com Mockito.',
            'Dependências cíclicas - Solução: Mapeamento manual em DTOs.',
          ]}
        />

        <HighlightedSection
          title="Melhorias nos Testes"
          items={[
            'Testes que não dependem da ordem das mensagens de validação, usando Matchers.anyOf',
            'Cobertura para exceções de autenticação e estados de usuário (inativo/suspenso)',
            'Verificações detalhadas para geração e persistência de tokens',
            'Testes para cenários de borda como nomes duplicados e parâmetros inválidos',
            'Isolamento com mocks para repositórios e managers',
          ]}
        />

        <HighlightedSection
          title="Resultados e Impacto"
          items={[
            'Redução significativa de erros de validação em runtime',
            'Melhoria perceptível na performance de consultas com uso de JSON nativo',
            'Alta cobertura de testes em serviços críticos',
            'Padronização de código reduzindo retrabalho',
            'Maior escalabilidade com isolamento de dados por serviço',
          ]}
        />

        <h3 className="sub-description">Tabela de Commits Relevantes</h3>
        <p>
          A tabela abaixo resume commits relevantes, priorizando correções que envolveram decisões
          arquiteturais, ajustes de modelagem e melhorias em robustez e validação.
        </p>
        <BugFixesCommitTable />

        <h2 className="section-subtitle">Conclusão</h2>
        <p>
          Essas refatorações transformaram o backend em uma solução robusta, com foco em qualidade
          de código, segurança e performance. As mudanças não apenas corrigiram bugs, mas
          estabeleceram padrões que facilitam manutenções futuras e escalabilidade.
        </p>
      </div>
    </div>
  );
};

export default BugFixesEnterprise;
