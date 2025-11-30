import React from 'react';
import '@styles-quickbite/quickbiteHighlighter.css';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import CodeBlock from '@/components/code-block/CodeBlock';
import QuickbiteHighlighter from '@/components/highlight/QuickbiteHighlighter';
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
        <p>Import das dependências no arquivo pom.xml</p>
        <QuickbiteHighlighter asParagraph={true}>
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
      <div className="dep-content">
        <h3 className="tech-title">Geral</h3>
        <h3 className="sub-description">Cobertura de Testes</h3>
        <ul className="list">
          <li className="list-item">Happy paths (comportamentos esperados)</li>
          <li className="list-item">Casos de erro e exceções</li>
          <li className="list-item">Validações de entrada</li>
          <li className="list-item">Comportamento de borda</li>
          <li className="list-item">Integração entre componentes</li>
        </ul>
        <h3 className="sub-description">Padrões de Nomenclatura</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Padrão utilizado: [Método]_[Cenário]_[Resultado Esperado]
        </QuickbiteHighlighter>
        <QuickbiteHighlighter asParagraph={true}>Exemplo:</QuickbiteHighlighter>
        <ul className="list">
          <li className="list-item">register_ShouldCreateUserSuccessfully</li>
          <li className="list-item">login_ShouldThrowExceptionWhenCredentialsAreInvalid</li>
          <li className="list-item">getCategoryById_ShouldReturnCategoryWhenExists</li>
        </ul>
        <h3 className="sub-description">Organização com Constantes</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para facilitar a manutenção e garantir a consistência dos testes, adicionei as mensagens
          esperadas em constantes.
        </QuickbiteHighlighter>
        <ul className="list">
          <li className="list-item">Mensagens de erro padronizadas</li>
          <li className="list-item">Dados de teste reutilizáveis</li>
          <li className="list-item">Valores de configuração</li>
        </ul>
        <h3 className="sub-description">Estrutura geral dos testes</h3>
        <ul className="list">
          <li className="list-item">
            <QuickbiteHighlighter>Configuração de mocks (@Mock, @InjectMocks)</QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>Preparação de dados (@BeforeEach)</QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>
              Configuração de comportamentos (when().thenReturn())
            </QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>Execução do método sob teste</QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>Verificação de resultados (assertions)</QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>Validação de interações (verify())</QuickbiteHighlighter>
          </li>
        </ul>
      </div>

      <div className="dep-content">
        <h3 className="tech-title">JUnit 5</h3>

        <h3 className="sub-description">Integração com Mockito - @ExtendWith</h3>
        <QuickbiteHighlighter asParagraph={true}>
          A anotação @ExtendWith possibilita a integração do Mockito com o JUnit 5, ela permite
          utilzar as anotações do Mockito, como @Mock e @InjectMocks, para criar mocks e injetá-los.
          Assim os mocks são gerados automaticamente antes de cada teste.
        </QuickbiteHighlighter>
        <p className="note">
          Nota: A anotação @ExtendWith é usada para integrar Mockito com JUnit 5.
        </p>
        <CodeBlock code={testCodes.extendWith} />

        <h3 className="sub-description">@BeforeEach</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para que um método seja executado antes de cada teste, utiliza-se a anotação @BeforeEach.
          Dessa forma, é possível preparar os dados, inicializar objetos ou mocks, criando um
          ambiente previsível para realizar os testes.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.beforeEach} />

        <h3 className="sub-description">@Test</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Quando um bloco de teste é iniciado, é necessário usar a anotação @Test para marcar como
          um caso de teste, desta forma cada método é executado de forma independente pelo Junit. É
          possível combinar isso com o @BeforeEach, para estruturar os testes de forma organlizada.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.testAnnotation} />
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Mockito</h3>

        <h3 className="sub-description">Criação de Mocks - @Mock e @InjectMocks</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Com o @Mock é possível criar um objetos simulado de uma classe. Por padrão, os métodos
          retornam valores (null, 0, false). Por exemplo, se o método userRepository.findById(1) é
          chamado sem configuração, ele retorna null. Já com o @InjectMocks, o cenário é diferente,
          ele cria uma instância real da classe que está sendo testada e injeta automaticamente os
          mocks. Dessa forma, os métodos da classe testada usam os mocks configurados, permitindo
          testas as dependências de forma isolada.
        </QuickbiteHighlighter>

        <h3 className="sub-description">Assertivas - assertNotNull e assertEquals</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para validar o comportamento esperado nos teste são usados métodos assertivos.
        </QuickbiteHighlighter>
        <ul className="list">
          <li className="list-item">
            <QuickbiteHighlighter>
              assertNotNull(obj) — garante que o objeto não seja nulo.
            </QuickbiteHighlighter>
          </li>
          <li className="list-item">
            <QuickbiteHighlighter>
              assertEquals(expected, actual) — verifica se o valor obtido é igual ao esperado.
            </QuickbiteHighlighter>
          </li>
        </ul>
        <CodeBlock code={testCodes.assertions} />

        <h3 className="sub-description">Definindo comportamento - when().thenReturn()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para definir o comportamento dos métodos do mock é necessário utilizar o Mockito.when.
          Neste exemplo, o when().thenReturn() configura o mock que deve retornar, dessa forma
          permite simular o comportamento normal do método.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenReturn} />

        <h3 className="sub-description">Simulando exceções - when().thenThrow()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Já para o when().thenThrow(), configuro o mock para lançar excessões, possibilitando
          testar como o código lida com erros e exceções.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenThrow} />

        <h3 className="sub-description">Respostas dinâmicas - when().thenAnswer()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          O uso do when().thenAnswer() permite modificar o funcionamento do mock. Enquanto
          thenReturn() retorna um valor fixo, o thenAnswer() executa uma função lambda quando o
          método é chamado possibilitando criar respostas com valores dinâmicos, baseado nos
          argumentos que o método recebe. Nessa situação, o mock é configurado para retornar
          exatamente o mesmo valor do objeto RefreshToken que foi passado como parâmetro. Isso
          simula o funcionamento padrão do método save(), que geralmente retorna a entidade após
          salvar no banco de dados.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenAnswer} />

        <h3 className="sub-description">Verificação de chamadas - verify()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para veficar as chamadas dos métodos e quantas vezes os métodos foram chamados é feito o
          uso do verify(), com as opções de chamada uma única vez, n vezes ou não ser chamado nunca.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.verify} />

        <h3 className="sub-description">Argument Matchers any()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          O Argument Matcher any() aceita qualquer argumento do tipo especificado como argumento
          para o método mockado. Isso é útil quando o valor exato do argumento não é relevante para
          o teste.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.argumentAny} />

        <QuickbiteHighlighter asParagraph={true}>
          Para verificar argumentos com condições personalizadas é feito o uso do argThat().
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.argumentArgThat} />
      </div>
    </div>
  );
};

export default TestsImplement;
