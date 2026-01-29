import React from 'react';
import '@styles-quickbite/quickbite.css';
import '@styles-quickbite/quickbite-highlighter.css';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import CodeBlock from '@/components/code-block/CodeBlock';
import QuickbiteHighlighter from '@/components/highlight/quickbite/QuickbiteHighlighter';
import { HighlightedSection } from '@/components/documentation-layout/HighlightedSection';
import { SimpleSection } from '@/components/documentation-layout/SimpleSection';
import { testCodes } from '@/data/testCodes';

const TestsImplement: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Implementação de Testes</h1>

      <h2 className="section-subtitle">Dependências de Teste</h2>
      <div className="section-content">
        <div className="tech-badge-container">
          <span className="tech-badge">JUnit 5</span>
          <span className="tech-badge">Mockito</span>
        </div>
      </div>

      <div className="dep-content">
        <QuickbiteHighlighter asParagraph>
          <p>Import das dependências no arquivo pom.xml</p>
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph>
          Para realizar os testes, utilizei como dependência o pacote spring-boot-starter-test. Esse
          pacote reúne uma série de bibliotecas importantes para a execução dos teste no ambiente
          Spring-boot, incluindo o Junit 5 e o Mockito.
        </QuickbiteHighlighter>
        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-test"
          scope="test"
        />
      </div>

      <div className="tech-block">
        <h2 className="section-subtitle tech-title">Geral</h2>

        <HighlightedSection
          title="Cobertura de Testes"
          items={[
            'Happy paths (comportamentos esperados)',
            'Casos de erro e exceções',
            'Validações de entrada',
            'Comportamento de borda',
            'Integração entre componentes',
          ]}
        />

        <QuickbiteHighlighter asParagraph>
          Padrão utilizado: [Método]_[Cenário]_[Resultado Esperado]
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.case} />

        <QuickbiteHighlighter asParagraph>
          Para facilitar a manutenção e garantir a consistência dos testes, adicionei as mensagens
          esperadas em constantes.
        </QuickbiteHighlighter>
        <SimpleSection
          title=""
          items={[
            'Mensagens de erro padronizadas',
            'Dados de teste reutilizáveis',
            'Valores de configuração',
          ]}
        />
        <CodeBlock code={testCodes.testConstants} />

        <HighlightedSection
          title="Estrutura geral dos testes"
          items={[
            'Configuração de mocks (@Mock, @InjectMocks)',
            'Preparação de dados (@BeforeEach)',
            'Configuração de comportamentos (when().thenReturn())',
            'Execução do método sob teste',
            'Verificação de resultados (assertions)',
            'Validação de interações (verify())',
          ]}
        />
      </div>

      <div className="tech-block">
        <h2 className="section-subtitle tech-title">JUnit 5</h2>

        <QuickbiteHighlighter asParagraph>
          A anotação @ExtendWith possibilita a integração do Mockito com o JUnit 5, ela permite
          utilzar as anotações do Mockito, como @Mock e @InjectMocks, para criar mocks e injetá-los.
          Assim os mocks são gerados automaticamente antes de cada teste.
        </QuickbiteHighlighter>
        <p className="note">
          Nota: A anotação @ExtendWith é usada para integrar Mockito com JUnit 5.
        </p>
        <CodeBlock code={testCodes.extendWith} />

        <QuickbiteHighlighter asParagraph>
          Para que um método seja executado antes de cada teste, utiliza-se a anotação @BeforeEach.
          Dessa forma, é possível preparar os dados, inicializar objetos ou mocks, criando um
          ambiente previsível para realizar os testes.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.beforeEach} />

        <QuickbiteHighlighter asParagraph>
          Quando um bloco de teste é iniciado, é necessário usar a anotação @Test para marcar como
          um caso de teste, desta forma cada método é executado de forma independente pelo Junit. É
          possível combinar isso com o @BeforeEach, para estruturar os testes de forma organizada.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.testAnnotation} />
      </div>

      <div className="tech-block">
        <h2 className="section-subtitle tech-title">Mockito</h2>

        <QuickbiteHighlighter asParagraph>
          Com o @Mock é possível criar um objetos simulado de uma classe. Por padrão, os métodos
          retornam valores (null, 0, false). Já com o @InjectMocks, o cenário é diferente, ele cria
          uma instância real da classe que está sendo testada e injeta automaticamente os mocks.
          Dessa forma, os métodos da classe testada usam os mocks configurados, permitindo testar as
          dependências de forma isolada.
        </QuickbiteHighlighter>

        <HighlightedSection
          title="Assertivas - assertNotNull e assertEquals"
          items={[
            'assertNotNull(obj) — garante que o objeto não seja nulo.',
            'assertEquals(expected, actual) — verifica se o valor obtido é igual ao esperado.',
          ]}
        />
        <CodeBlock code={testCodes.assertions} />

        <QuickbiteHighlighter asParagraph>
          Para definir o comportamento dos métodos do mock é necessário utilizar o Mockito.when.
          Neste exemplo, o when().thenReturn() configura o mock que deve retornar, dessa forma
          permite simular o comportamento normal do método.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenReturn} />

        <QuickbiteHighlighter asParagraph>
          Já para o when().thenThrow(), configuro o mock para lançar exceções, possibilitando testar
          como o código lida com erros e exceções.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenThrow} />

        <QuickbiteHighlighter asParagraph>
          O uso do when().thenAnswer() permite modificar o funcionamento do mock. Enquanto
          thenReturn() retorna um valor fixo, o thenAnswer() executa uma função lambda quando o
          método é chamado possibilitando criar respostas com valores dinâmicos, baseado nos
          argumentos que o método recebe. Nessa situação, o mock é configurado para retornar
          exatamente o mesmo valor do objeto RefreshToken que foi passado como parâmetro. Isso
          simula o funcionamento padrão do método save(), que geralmente retorna a entidade após
          salvar no banco de dados.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenAnswer} />

        <QuickbiteHighlighter asParagraph>
          Para verificar as chamadas dos métodos e quantas vezes os métodos foram chamados é feito o
          uso do verify(), com as opções de chamada uma única vez, n vezes ou não ser chamado nunca.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.verify} />

        <QuickbiteHighlighter asParagraph>
          O Argument Matcher any() aceita qualquer argumento do tipo especificado como argumento
          para o método mockado. Isso é útil quando o valor exato do argumento não é relevante para
          o teste.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.argumentAny} />

        <QuickbiteHighlighter asParagraph>
          Para verificar argumentos com condições personalizadas é feito o uso do argThat().
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.argumentArgThat} />
      </div>
    </div>
  );
};

export default TestsImplement;
