import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';
import '@styles-quickbite/quickbite.css';

import Table from '@/components/documentation-layout/CommitTable';
import { improvementsCommitData } from '@/data/commits/improvementsCommitData';
import { ProblemDecisionBenefit } from '@/components/documentation-layout/ProblemDecisionBenefit';
import { HighlightedSection } from '@/components/documentation-layout/HighlightedSection';
import CodeBlock from '@/components/code-block/CodeBlock';
import { codeImprovements } from '@/data/code/codeImprovements';

const ImprovementsRefined: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Melhorias no Backend</h1>

      <h2 className="section-subtitle">Visão geral</h2>
      <p className="section-intro">
        Esta seção apresenta melhorias estruturais e de código aplicadas no backend, conforme os
        microsserviços que foram desenvolvidos até o momento. Este conteúdo será atualizado conforme
        novas melhorias forem implementadas.
      </p>

      <div className="dep-content">
        <HighlightedSection
          title="Principais Melhorias Implementadas"
          items={[
            'Padronização de entidades com BaseEntity e SuperBuilder',
            'Implementação de mapeamento com MapStruct eliminando conversões manuais',
            'Centralização de exceções no módulo core com BaseBusinessException',
            'Criação de Specifications para consultas dinâmicas',
            'Validações com Bean Validation e handler global',
            'Uso de @Builder.Default para valores padrão em entidades',
            'Migração de List para Map em campos JSON com @JdbcTypeCode',
            'Criação de DTOs records para filtros e consultas',
            'Implementação de paginação em todos os endpoints',
            'Centralização de paths de API em constantes',
            'Uso de enum UserRole para autorização',
            'Criação de objeto leve AuthenticatedUser para security context',
            'Simplificação do filtro JWT usando claims',
            'Melhorias em testes com assertions mais precisas',
            'Configuração de mappers de patch para atualizações parciais',
            'Tratamento de exceções padronizado com ApiError',
            'Migração do API Gateway para modelo reativo',
          ]}
        />

        <HighlightedSection
          title="Benefícios das Melhorias"
          items={[
            'Maior segurança com validações centralizadas e tratamento de erros padronizado',
            'Código mais limpo e previsível com separação clara de responsabilidades',
            'Facilidade de manutenção com paths centralizados em constantes',
            'Melhor experiência de desenvolvimento com testes',
            'Escalabilidade com isolamento entre serviços',
            'Performance otimizada com uso de @JdbcTypeCode para JSON nativo',
            'Redução de acoplamento entre segurança e domínio com AuthenticatedUser',
            'APIs mais consistentes com padronização de respostas de erro',
          ]}
        />

        <h2 className="section-subtitle">Exemplos de Código – Decisões Técnicas Relevantes</h2>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Padronização de Entidades com BaseEntity e SuperBuilder
          </h3>
          <ProblemDecisionBenefit
            problem="As entidades tinham campos de auditoria duplicados e não havia padronização no uso do Lombok, causando inconsistências."
            decision="Criar BaseEntity no módulo core com campos de auditoria e usar @SuperBuilder para permitir herança de builders. Padronizar uso de @Getter/@Setter ao invés de @Data para evitar problemas com relacionamentos JPA."
            benefit="Código mais limpo, reaproveitamento de código, e consistência no comportamento das entidades. @SuperBuilder permite que subclasses também tenham builders funcionais."
          />
          <CodeBlock code={codeImprovements.baseEntity} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Garantindo Valores Padrão com @Builder.Default
          </h3>
          <ProblemDecisionBenefit
            problem="Ao usar o padrão Builder, atributos inicializados diretamente na classe não eram populados automaticamente, resultando em valores null."
            decision="Utilizar @Builder.Default para atributos que possuem valores padrão, garantindo que o builder os inicialize corretamente."
            benefit="Consistência na criação de objetos, evitando NullPointerException e garantindo que valores padrão sejam sempre aplicados."
          />
          <CodeBlock code={codeImprovements.builderDefault} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Mapeamento Nativo de JSON com @JdbcTypeCode
          </h3>
          <ProblemDecisionBenefit
            problem="Campos JSON eram mapeados como String e o service era responsável pela serialização manual, misturando lógica técnica com regras de negócio."
            decision="Usar @JdbcTypeCode(SqlTypes.JSON) para mapeamento nativo de Map<String, Object> para JSON no PostgreSQL."
            benefit="Separação clara de responsabilidades, eliminação de código boilerplate, e melhor performance com mapeamento nativo."
          />
          <CodeBlock code={codeImprovements.jdbcTypeCode} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Mapeamento com MapStruct e Configuração para Patch
          </h3>
          <ProblemDecisionBenefit
            problem="Mapeamento manual gerava código boilerplate e era propenso a erros. Para PATCH, era necessário verificar campo por campo."
            decision="Implementar MapStruct com mappers especializados e configuração compartilhada para patches."
            benefit="Redução drástica de código, mapeamento consistente, e atualizações parciais automáticas."
          />
          <CodeBlock code={codeImprovements.mapStructPatch} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Consultas Dinâmicas com Specifications</h3>
          <ProblemDecisionBenefit
            problem="Métodos nos repositórios cresciam exponencialmente com cada novo filtro, tornando o código difícil de manter."
            decision="Implementar JpaSpecificationExecutor e criar Specifications para consultas dinâmicas."
            benefit="Consultas flexíveis sem multiplicação de métodos, código mais limpo."
          />
          <CodeBlock code={codeImprovements.specifications} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Validação Centralizada com GlobalExceptionHandler
          </h3>
          <ProblemDecisionBenefit
            problem="Erros de validação eram tratados de forma inconsistente em cada controller."
            decision="Criar GlobalExceptionHandler unificado com respostas padronizadas."
            benefit="Respostas de erro consistentes, redução de código duplicado."
          />
          <CodeBlock code={codeImprovements.globalExceptionHandler} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Centralização de Paths e Endpoints Públicos
          </h3>
          <ProblemDecisionBenefit
            problem="Strings de paths espalhadas dificultavam manutenção e causavam erros."
            decision="Criar constantes ApiPaths e PublicEndPoints."
            benefit="Facilidade de manutenção, redução de erros, documentação viva."
          />
          <CodeBlock code={codeImprovements.apiPaths} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Objeto Leve AuthenticatedUser para Security Context
          </h3>
          <ProblemDecisionBenefit
            problem="O Principal era a entidade User completa, causando acoplamento desnecessário."
            decision="Criar objeto leve AuthenticatedUser com apenas id e email."
            benefit="Desacoplamento, menor tráfego, melhor performance."
          />
          <CodeBlock code={codeImprovements.authenticatedUser} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">
            Validação mais precisa de Telefone com Regex
          </h3>
          <ProblemDecisionBenefit
            problem="Validação manual no service misturava lógica de validação com regras de negócio."
            decision="Utilizar @Pattern com regex no DTO."
            benefit="Validação declarativa, código mais limpo, mensagens padronizadas."
          />
          <CodeBlock code={codeImprovements.phoneValidation} />
        </div>

        <div className="tech-block">
          <h3 className="sub-description tech-title">Helper para Testes de Validação</h3>
          <ProblemDecisionBenefit
            problem="Testes de validação tinham código repetitivo e difícil de manter."
            decision="Criar ValidationTestHelper com assertHasViolationOnField."
            benefit="Testes mais limpos, código reutilizável."
          />
          <CodeBlock code={codeImprovements.validationTestHelper} />
        </div>

        <h3 className="sub-description">Tabela de Commits - Melhorias</h3>
        <p>
          A tabela abaixo resume os commits de melhorias implementadas, organizados por categoria
          funcional.
        </p>
        <Table commits={improvementsCommitData} />

        <HighlightedSection
          title="Desafios Enfrentados e Soluções"
          items={[
            'Herança com Lombok Builder → @SuperBuilder',
            'Mapeamento JSON manual → @JdbcTypeCode com SqlTypes.JSON',
            'Consultas com múltiplos filtros → Specifications',
            'Atualizações parciais (PATCH) → Mappers com NullValuePropertyMappingStrategy.IGNORE',
            'Acoplamento segurança-domínio → AuthenticatedUser',
            'Strings de paths espalhadas → Constantes ApiPaths',
            'Exceções inconsistentes → BaseBusinessException + ApiError',
            'Testes frágeis → ValidationTestHelper',
          ]}
        />

        <HighlightedSection
          title="Melhorias nos Testes"
          items={[
            'Criação de ValidationTestHelper',
            'Testes independentes de ordem de mensagens',
            'Cobertura para exceções de autenticação',
            'Verificações detalhadas de tokens',
            'Testes para cenários de borda',
            'Migração para usar Specifications',
          ]}
        />

        <HighlightedSection
          title="Resultados e Impacto"
          items={[
            'Respostas de erro padronizadas',
            'Facilidade para adicionar novos filtros',
            'Segurança mais robusta com enums',
            'Manutenção simplificada com paths centralizados',
          ]}
        />

        <h2 className="section-subtitle">Conclusão</h2>
        <p>
          As melhorias implementadas transformaram o backend em uma solução coesa, seguindo as
          melhores práticas. A padronização com BaseEntity e SuperBuilder, o uso de MapStruct, as
          Specifications para consultas dinâmicas, e a centralização de exceções estabeleceram uma
          base sólida. A simplificação do security context com AuthenticatedUser e a centralização
          de paths trouxeram clareza e manutenibilidade. O tratamento de erros padronizado com
          GlobalExceptionHandler e ApiError garantiu consistência nas respostas da API.
        </p>
      </div>
    </div>
  );
};

export default ImprovementsRefined;
