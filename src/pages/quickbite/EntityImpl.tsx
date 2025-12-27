import React from 'react';
import '@styles-quickbite/quickbiteHighlighter.css';

import LayerSection from '@/components/documentation/LayerSection';
import SimpleList from '@/components/ui/SimpleList';
import CodeBlock from '@/components/code-block/CodeBlock';
import { entityCodes } from '@/data/entityCodes';

const EntityImplementation: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação da camada de entidades</h1>
      <LayerSection
        title="Implementação da camada de entidades"
        overview={
          <>
            <p>
              A camada de entidades representa o modelo de dados central da aplicação. Ela define
              quais dados existem, como eles se relacionam e quais regras estruturais precisam ser
              respeitadas para que a persistência ocorra de forma consistencia.
            </p>
            <p>
              Essa mada funciona como a base do sistema, todas as outras camadas dependem da forma
              como as entidades são modeladas, mas as entidades não dependem das regras de negócio
              ou dos fluxos da aplicação.
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
              Na camada de entidades não contém lógica de negócio complexa, apenas regras
              diretamente ligadas à persistência e ao ciclo de vida dos dados.
            </p>
          </>
        }
        sections={[
          {
            title: 'Organização a estrutura',
            description: (
              <>
                <p>
                  A aplicação é dividida em microserviços, cada microserviço possui seu próprio
                  conjunto de entidades.
                </p>

                <p>
                  Essa organização garante que cada contexto cuide apenas dos dados que fazem
                  sentido para o seu domínio, evitando dependências desnecessárias entre módulos.
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
                  Essa separação evita dependências cruzadas desnecessárias e matém cada serviço
                  autonômo.
                </p>
              </>
            ),
          },
          {
            title: 'Modelagem das entidades',
            description: (
              <>
                <p>
                  As entidades foram modeladas para refletir situações reais do domínio, e não
                  apenas estruturas técnicas de bando de dados.
                </p>
                <p>
                  Cada entidade possui uma responsabilidade bem definida e representa um conceito
                  claro do sistema, como usuário, pedido ou item de pedido. Os atributos presentes
                  em cada entidade foram escolhidos para atender necessidades reais do domínio,
                  evitando campos genéricos ou sem significado.
                </p>
                <p>
                  Sempre que existe uma relação entre conceitos, essa relação é representada no
                  modelo, tornando o código mais legível e intuitivo para quem o lê.
                </p>
              </>
            ),
          },
          {
            title: 'Relacionamentos e dependência entre dados',
            description: (
              <>
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
                  Essa abordagem deixa claro qual entidade é principal e quais fazem parte do seu
                  ciclo de vida, reduzindo ambiguidades e evitando incosistências durante a
                  persistência.
                </p>

                <p>
                  Um exemplo dessa dependência pode ser visto no relacionamento entre pedidos e
                  itens de pedido. Um orderItem não existe de forma independente e faz parte
                  integral do ciclo de vida do order.
                </p>

                <CodeBlock code={entityCodes.OrderEntity} />
                <CodeBlock code={entityCodes.OrderItemEntity} />
              </>
            ),
          },
          {
            title: 'Carregamento de dados sob demanda',
            description: (
              <>
                <p>
                  Para evitar carga desnecessárias de informações, os relacionamentos entre
                  entidades foram configurados para que os dados relacionados sejam carregados
                  apenas quando realmente necessário.
                </p>

                <p>
                  Isso significa que ao buscar uma entidade principal, seus relacionamentos não
                  carregados automaticamente. Os dados associoados são acessados de forma direta
                  somente quando o fluxo da aplicação exige.
                </p>

                <p>
                  Essa estratégia melhora o desempenho das consultas e torna o comportamento do
                  sistema mais previsível
                </p>

                <p>
                  Para evitar carregamentos desnecessários dados, os relacionamentos entre entidades
                  utilizam carretamento sob demanda (LAZY).
                </p>

                <CodeBlock code={entityCodes.fetchTypeLazy} />
              </>
            ),
          },
          {
            title: 'Controle do ciclo de vida das entidades',
            description: (
              <>
                <p>
                  As entidades também são responsáveis por gerenciar informações relacionadas ao seu
                  prórpio ciclo de vida, como datas de criação e atualização.
                </p>

                <p>Esses dados são preenchidos automaticamente no momento correto, garantido:</p>

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
                  As entidades controlam seu próprio ciclo de vida por meio de eventos JPA,
                  automatizando o preenchimento de informações.
                </p>

                <CodeBlock code={entityCodes.generatedTimestamps} />

                <p>
                  Essa abordagem evita que a lógica de controle de datas se espalhe por serviços ou
                  controldadores, mantendo a responsabilidade no próprio modelo de dados.
                </p>
              </>
            ),
          },
          {
            title: 'Criação de entidades e estado consistente',
            description: (
              <>
                <p>
                  A criação de entidades foi pensada para evitar objetos em estados inválidos ou
                  incompletos.
                </p>

                <p>
                  Valores padrão são definidos diretamente no modelo, garantido que mesmo quando nem
                  todos os campos são informados, a entidade seja criada em um estado consistente e
                  seguro.
                </p>

                <p>
                  Essa abordagem reduz erros em tempo de execução, melhora a legibilidade do código
                  e facilidade a manutenção do sistema.
                </p>

                <p>
                  Para evitar entidades em estados inválidos, valores padrão são definidos
                  diratamente no modelo e integrado ao padrão Builder.
                </p>

                <CodeBlock code={entityCodes.builderDefaultUserStatus} />
                <CodeBlock code={entityCodes.builderDefaultRevokedFlag} />

                <p>
                  Isso garante que a entidade seja criada em um estado válido mesmo quando nem todos
                  os atributos são passado de forma direta no momento da construção.
                </p>
              </>
            ),
          },
          {
            title: 'Limites da camada de entidades',
            description: (
              <>
                <p>
                  A camada de entidades não contém regras de negócio complexas, validações de fluxo
                  ou decisões que dependem de múltiplos casos de uso.
                </p>

                <p>Ela de limita a:</p>

                <SimpleList
                  items={[
                    'Representar o domínio',
                    'Definir relacionamentos',
                    'Garantir integridade estrutural',
                    'Controlar o ciclo de vida dos dados',
                  ]}
                />

                <p>
                  As regras de negócio propriamente ditas ficam concentradas nas camadas de
                  serviços, mantendo uma separação clara de responsabilidades
                </p>
              </>
            ),
          },
          {
            title: 'Identidade e extensão de modelos',
            description: (
              <>
                <p>
                  Em alguns cenários, uma entidade não representa um conceito independentedo
                  domínio, mas sim uma extensão estrutural de outra entidade principal. Nesses
                  casos, criar uma nova identidade (chave primária própria) pode introduzir
                  duplicações desnecessárias.
                </p>
                <p>
                  Para resolver essa questão, o modelo de entidade compartilhada é utilizado, onde
                  uma entidade herda a chave primária da entidade principal, isso reforça a ideia de
                  que ambas fazem parte do mesmo conjunto.
                </p>
                <p>
                  EEsse padrão foi aplicado na relação entre User e UserProfile, onde o perfil não
                  existe de forma isolada, apenas complementa os dados do usuário principal.
                </p>

                <CodeBlock code={entityCodes.userProfile} />

                <p>
                  Nesse modelo, UserProfile funciona como uma extensão direta da entidade User,
                  compartilhando a mesma chave primária e garantindo uma única identidade no banco
                  de dados.
                </p>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default EntityImplementation;
