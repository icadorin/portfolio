import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';
import SimpleList from '@/components/ui/SimpleList';
import CodeBlock from '@/components/code-block/CodeBlock';
import { entityCodes } from '@/data/entityCodes';

const EntityImplementationPage: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação da camada de entidades</h1>

      {/* Overview */}
      <section className="doc-section">
        <h2 className="doc-section-title">Visão Geral</h2>
        <p>
          Essa camada funciona como a <strong>base do sistema</strong>. Todas as outras camadas
          dependem diretamente da forma como as <code>entidades</code> são modeladas, enquanto as
          entidades permanecem <strong>independentes das regras de negócio</strong> e dos fluxos da
          aplicação.
        </p>
        <SimpleList
          items={[
            'Clareza na representação do domínio',
            'Separação de responsabilidades entre camadas',
            'Segurança na criação e no estado dos objetos',
            'Consistência dos dados',
            'Baixo acoplamento entre contextos (auth, order, product)',
          ]}
        />
        <p>
          Na camada de entidades não contém lógica de negócio complexa, apenas regras diretamente
          ligadas à persistência e ao ciclo de vida dos dados.
        </p>
      </section>

      {/* Organização da estrutura */}
      <section className="doc-section">
        <h2 className="doc-section-title">Organização da estrutura</h2>
        <p>
          A aplicação é dividida em microserviços, cada microserviço possui seu próprio conjunto de
          entidades.
        </p>
        <p>
          Essa organização garante que cada contexto cuide apenas dos dados que fazem sentido para o
          seu domínio, evitando dependências desnecessárias entre módulos.
        </p>
        <p>Isso resulta na seguinte separação:</p>
        <SimpleList
          items={[
            'auth_service - usuário, perfis e tokens',
            'order_service - pedidos, itens de histórico e status',
            'product_service - execuções e validações específicas',
          ]}
        />
        <p>
          Essa separação evita dependências cruzadas desnecessárias e mantém cada serviço autônomo.
        </p>
      </section>

      {/* Modelagem das entidades */}
      <section className="doc-section">
        <h2 className="doc-section-title">Modelagem das entidades</h2>
        <p>
          As entidades foram modeladas para refletir situações reais do domínio, e não apenas
          estruturas técnicas de banco de dados.
        </p>
        <p>
          Cada entidade possui uma responsabilidade bem definida e representa um conceito claro do
          sistema, como usuário, pedido ou item de pedido. Os atributos presentes em cada entidade
          foram escolhidos para atender necessidades reais do domínio, evitando campos genéricos ou
          sem significado.
        </p>
        <p>
          Sempre que existe uma relação entre conceitos, essa relação é representada no modelo,
          tornando o código mais legível e intuitivo para quem o lê.
        </p>
      </section>

      {/* Relacionamentos e dependência entre dados */}
      <section className="doc-section">
        <h2 className="doc-section-title">Relacionamentos e dependência entre dados</h2>
        <p>
          Quando uma entidade depende de outra para existir, essa dependência é refletida
          diretamente no modelo.
        </p>
        <p>Exemplo:</p>
        <SimpleList
          items={[
            'Um pedido depende de seus itens',
            'Um token está sempre associado a um usuário.',
            'Um histórico de status só faz sentido dentro do contexto de um pedido.',
          ]}
        />
        <p>
          Essa abordagem deixa claro qual entidade é principal e quais fazem parte do seu ciclo de
          vida, reduzindo ambiguidades e evitando inconsistências durante a persistência.
        </p>
        <p>
          Um exemplo dessa dependência pode ser visto no relacionamento entre pedidos e itens de
          pedido. Um <code>OrderItem</code> não existe de forma independente e faz parte integral do{' '}
          <strong>ciclo de vida</strong> de um <code>Order</code>.
        </p>
        <CodeBlock code={entityCodes.OrderEntity} />
        <CodeBlock code={entityCodes.OrderItemEntity} />
      </section>

      {/* Carregamento de dados sob demanda */}
      <section className="doc-section">
        <h2 className="doc-section-title">Carregamento de dados sob demanda</h2>
        <p>
          Para evitar carga desnecessárias de informações, os relacionamentos entre entidades foram
          configurados para que os dados relacionados sejam carregados apenas quando realmente
          necessário.
        </p>
        <p>
          Isso significa que ao buscar uma entidade principal, seus relacionamentos não são
          carregados automaticamente. Os dados associados são acessados de forma direta somente
          quando o fluxo da aplicação exige.
        </p>
        <p>
          Essa estratégia melhora o <strong>desempenho das consultas</strong> e torna o
          comportamento do sistema mais previsível.
        </p>
        <p>
          Para evitar carregamentos desnecessários de dados, os relacionamentos entre entidades
          utilizam <code>carregamento sob demanda (LAZY)</code>.
        </p>
        <CodeBlock code={entityCodes.fetchTypeLazy} />
      </section>

      {/* Controle do ciclo de vida das entidades */}
      <section className="doc-section">
        <h2 className="doc-section-title">Controle do ciclo de vida das entidades</h2>
        <p>
          As entidades também são responsáveis por gerenciar informações relacionadas ao seu próprio
          ciclo de vida, como datas de criação e atualização.
        </p>
        <p>Esses dados são preenchidos automaticamente no momento correto, garantindo:</p>
        <SimpleList
          items={[
            'Os registros tenham informações temporais consistentes',
            'A lógica de persistência não se espalhe por outras camadas',
            'O código permaneça simples e padronizado',
          ]}
        />
        <p>
          Dessa forma, cada entidade carrega o histórico mínimo necessário para auditoria e
          rastreabilidade.
        </p>
        <p>
          As entidades controlam seu próprio ciclo de vida por meio de eventos JPA, automatizando o
          preenchimento de informações.
        </p>
        <CodeBlock code={entityCodes.generatedTimestamps} />
        <p>
          Essa abordagem evita que a lógica de controle de datas se espalhe por serviços ou
          controladores, mantendo a responsabilidade no próprio modelo de dados.
        </p>
      </section>

      {/* Criação de entidades e estado consistente */}
      <section className="doc-section">
        <h2 className="doc-section-title">Criação de entidades e estado consistente</h2>
        <p>
          A criação de entidades foi pensada para evitar objetos em estados inválidos ou
          incompletos.
        </p>
        <p>
          Valores padrão são definidos diretamente no modelo, garantindo que mesmo quando nem todos
          os campos são informados, a entidade seja criada em um estado consistente e seguro.
        </p>
        <p>
          Essa abordagem reduz erros em tempo de execução, melhora a legibilidade do código e
          facilita a manutenção do sistema.
        </p>
        <p>
          Para evitar entidades em estados inválidos, valores padrão são definidos diretamente no
          modelo e integrados ao padrão <code>Builder</code>.
        </p>
        <CodeBlock code={entityCodes.builderDefaultUserStatus} />
        <CodeBlock code={entityCodes.builderDefaultRevokedFlag} />
        <p>
          Isso garante que a entidade seja criada em um estado válido mesmo quando nem todos os
          atributos são passados de forma direta no momento da construção.
        </p>
      </section>

      {/* Limites da camada de entidades */}
      <section className="doc-section">
        <h2 className="doc-section-title">Limites da camada de entidades</h2>
        <p>
          A camada de entidades não contém regras de negócio complexas, validações de fluxo ou
          decisões que dependem de múltiplos casos de uso.
        </p>
        <p>Ela se limita a:</p>
        <SimpleList
          items={[
            'Representar o domínio',
            'Definir relacionamentos',
            'Garantir integridade estrutural',
            'Controlar o ciclo de vida dos dados',
          ]}
        />
        <p>
          As regras de negócio propriamente ditas ficam concentradas nas camadas de serviços,
          mantendo uma separação clara de responsabilidades.
        </p>
      </section>

      {/* Identidade e extensão de modelos */}
      <section className="doc-section">
        <h2 className="doc-section-title">Identidade e extensão de modelos</h2>
        <p>
          Em alguns cenários, uma entidade não representa um conceito independente do domínio, mas
          sim uma <strong>extensão estrutural</strong> de outra entidade principal. Nesses casos,
          criar uma nova identidade (chave primária própria) pode introduzir duplicações
          desnecessárias.
        </p>
        <p>
          Para resolver essa questão, o modelo de entidade compartilhada é utilizado, onde uma
          entidade herda a chave primária da entidade principal, reforçando a ideia de que ambas
          fazem parte do mesmo conjunto.
        </p>
        <p>
          Esse padrão foi aplicado na relação entre User e <code>UserProfile</code>, onde o perfil
          não existe de forma isolada, apenas complementa os dados do usuário principal.
        </p>
        <CodeBlock code={entityCodes.userProfile} />
        <p>
          Nesse modelo, <code>UserProfile</code> funciona como uma extensão direta da entidade User,
          compartilhando a mesma chave primária e garantindo uma única identidade no banco de dados.
        </p>
      </section>
    </div>
  );
};

export default EntityImplementationPage;
