import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';
import SimpleList from '@/components/ui/SimpleList';
import CodeBlock from '@/components/code-block/CodeBlock';
import QuickbiteHighlighter from '@/components/highlight/quickbite/QuickbiteHighlighter';
import { entityCodes } from '@/data/entityCodes';

const EntityImplementationPage: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação da camada de entidades</h1>

      <h2 className="section-subtitle">Visão Geral</h2>
      <QuickbiteHighlighter asParagraph>
        Essa camada funciona como a <strong>base do sistema</strong>. Todas as outras camadas
        dependem diretamente da forma como as <code>entidades</code> são modeladas, enquanto as
        entidades permanecem <strong>independentes das regras de negócio</strong> e dos fluxos da
        aplicação.
      </QuickbiteHighlighter>
      <SimpleList
        items={[
          'Clareza na representação do domínio',
          'Separação de responsabilidades entre camadas',
          'Segurança na criação e no estado dos objetos',
          'Consistência dos dados',
          'Baixo acoplamento entre contextos (auth, order, product)',
        ]}
      />
      <QuickbiteHighlighter asParagraph>
        Na camada de entidades não contém lógica de negócio complexa, apenas regras diretamente
        ligadas à persistência e ao ciclo de vida dos dados.
      </QuickbiteHighlighter>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Organização da estrutura</h2>
        <QuickbiteHighlighter asParagraph>
          A aplicação é dividida em microserviços, cada microserviço possui seu próprio conjunto de
          entidades. Essa organização garante que cada contexto cuide apenas dos dados que fazem
          sentido para o seu domínio, evitando dependências desnecessárias entre módulos.
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>Isso resulta na seguinte separação:</QuickbiteHighlighter>
        <SimpleList
          items={[
            'auth_service - usuário, perfis e tokens',
            'order_service - pedidos, itens de histórico e status',
            'product_service - execuções e validações específicas',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Essa separação evita dependências cruzadas desnecessárias e mantém cada serviço autônomo.
        </QuickbiteHighlighter>
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Modelagem das entidades</h2>
        <QuickbiteHighlighter asParagraph>
          As entidades foram modeladas para refletir situações reais do domínio, e não apenas
          estruturas técnicas de banco de dados. Cada entidade possui uma responsabilidade bem
          definida e representa um conceito claro do sistema, como usuário, pedido ou item de
          pedido.
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>
          Os atributos presentes em cada entidade foram escolhidos para atender necessidades reais
          do domínio, evitando campos genéricos ou sem significado. Sempre que existe uma relação
          entre conceitos, essa relação é representada no modelo, tornando o código mais legível e
          intuitivo.
        </QuickbiteHighlighter>
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Relacionamentos e dependência entre dados</h2>
        <QuickbiteHighlighter asParagraph>
          Quando uma entidade depende de outra para existir, essa dependência é refletida
          diretamente no modelo.
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>Exemplo:</QuickbiteHighlighter>
        <SimpleList
          items={[
            'Um pedido depende de seus itens',
            'Um token está sempre associado a um usuário',
            'Um histórico de status só faz sentido dentro do contexto de um pedido',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Essa abordagem deixa claro qual entidade é principal e quais fazem parte do seu ciclo de
          vida, reduzindo ambiguidades e evitando inconsistências durante a persistência.
        </QuickbiteHighlighter>
        <CodeBlock code={entityCodes.OrderEntity} />
        <CodeBlock code={entityCodes.OrderItemEntity} />
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Carregamento de dados sob demanda</h2>
        <QuickbiteHighlighter asParagraph>
          Para evitar carga desnecessárias de informações, os relacionamentos entre entidades foram
          configurados para que os dados relacionados sejam carregados apenas quando realmente
          necessário. Isso significa que ao buscar uma entidade principal, seus relacionamentos não
          são carregados automaticamente, sendo acessados apenas quando o fluxo da aplicação exige.
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>
          Essa estratégia melhora o <strong>desempenho das consultas</strong> e torna o
          comportamento do sistema mais previsível. Os relacionamentos utilizam
          <code>carregamento sob demanda (LAZY)</code>.
        </QuickbiteHighlighter>
        <CodeBlock code={entityCodes.fetchTypeLazy} />
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Controle do ciclo de vida das entidades</h2>
        <QuickbiteHighlighter asParagraph>
          As entidades gerenciam informações relacionadas ao seu próprio ciclo de vida, como datas
          de criação e atualização, garantindo registros consistentes e lógica de persistência
          centralizada.
        </QuickbiteHighlighter>
        <SimpleList
          items={[
            'Informações temporais consistentes',
            'Lógica de persistência concentrada na entidade',
            'Código simples e padronizado',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Esse histórico mínimo é automatizado via eventos JPA.
        </QuickbiteHighlighter>
        <CodeBlock code={entityCodes.generatedTimestamps} />
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Criação de entidades e estado consistente</h2>
        <QuickbiteHighlighter asParagraph>
          A criação de entidades foi pensada para evitar objetos em estados inválidos ou
          incompletos. Valores padrão são definidos no modelo, garantindo consistência mesmo quando
          nem todos os campos são informados.
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>
          Esse padrão também é integrado ao <code>Builder</code>.
        </QuickbiteHighlighter>
        <CodeBlock code={entityCodes.builderDefaultUserStatus} />
        <CodeBlock code={entityCodes.builderDefaultRevokedFlag} />
        <QuickbiteHighlighter asParagraph>
          Assim, a entidade é criada em estado válido mesmo com atributos ausentes no momento da
          construção.
        </QuickbiteHighlighter>
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Limites da camada de entidades</h2>
        <QuickbiteHighlighter asParagraph>
          A camada de entidades não contém regras de negócio complexas ou decisões dependentes de
          múltiplos casos de uso. Ela se limita a:
        </QuickbiteHighlighter>
        <SimpleList
          items={[
            'Representar o domínio',
            'Definir relacionamentos',
            'Garantir integridade estrutural',
            'Controlar o ciclo de vida dos dados',
          ]}
        />
        <QuickbiteHighlighter asParagraph>
          Regras de negócio ficam concentradas nas camadas de serviço, mantendo separação clara.
        </QuickbiteHighlighter>
      </div>

      <div className="dep-content tech-block">
        <h2 className="section-subtitle tech-title">Identidade e extensão de modelos</h2>
        <QuickbiteHighlighter asParagraph>
          Algumas entidades não representam conceitos independentes, mas extensões estruturais de
          outras entidades, compartilhando a chave primária para evitar duplicações.
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>
          Exemplo: relação entre <code>User</code> e <code>UserProfile</code>, onde UserProfile
          complementa os dados do usuário principal.
        </QuickbiteHighlighter>
        <CodeBlock code={entityCodes.userProfile} />
      </div>
    </div>
  );
};

export default EntityImplementationPage;
