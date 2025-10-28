import React from 'react';
import '@styles-quickbite/quickbiteHighlighter.css';
import MavenSnippet from '@/components/code-block/MavenSnippet';
import CodeBlock from '@/components/code-block/CodeBlock';
import QuickbiteHighlighter from '@/components/highlight/QuickbiteHighlighter';
import { testCodes } from '@/data/testCodes';

const TestsImplement: React.FC = () => {
  // prettier-ignore
  return (
    <div className="section">
      <h1 className="section-title">Implementação de Testes</h1>
      <h2 className="section-subtitle">Dependências de Teste</h2>
      <div className="section-content">
        <div className="tech-badge-container">
          <span className="tech-badge">JUnit 5</span>
          <span className="tech-badge">Mockito</span>
          <span className="tech-badge">Testcontainers</span>
          <span className="tech-badge">Spring Security Test</span>
        </div>
      </div>

      <div className="dep-content">
        <h3 className="tech-title">JUnit 5</h3>
        <p>Import da dependência no arquivo pom.xml</p>

        <MavenSnippet
          groupId="org.springframework.boot"
          artifactId="spring-boot-starter-test"
          scope="test"
        />

        <h3 className="sub-description">Integração com Mockito - @ExtendWith</h3>
        <QuickbiteHighlighter asParagraph={true}>
          A anotação @ExtendWith possibilita a integração do Mockito com o JUnit 5, ela permite
          utilzar as anotações do Mockito, como @Mock e @InjectMocks, para criar mocks e injetá-los.
          Assim os mocks são gerados automaticamente antes de cada teste.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.extendWith} />
      </div>

      <div className="dep-content">
        <h3 className="tech-title">Mockito</h3>

        <h3 className="sub-description">Criação de Mocks - @Mock</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Com o @Mock é possível criar um objetos simulado de uma classe. Por padrão, os métodos
          retornam valores padrão (null, 0, false). Caso seja iniciado com
          userRepository.findById(1) sem configuração, retornará null. InjectMocks 
          {/* ADICIONAR DESCRIÇÃO DO @INJECT */}
          {/* ADICIONAR DESCRIÇÃO DO @INJECT */}
          {/* ADICIONAR DESCRIÇÃO DO @INJECT */}
          {/* ADICIONAR DESCRIÇÃO DO @INJECT */}
        </QuickbiteHighlighter>

        <h3 className="sub-description">Definindo comportamento - when().thenReturn()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para definir o comportamento dos métodos do mock é necessário utilizar o Mockito.when.
          Neste exemplo, o when().thenReturn() configura o que o mock deve retornar, deve forma
          permite simular o comportamento normal do método.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenReturn} />

        <h3 className="sub-description">Simulando execeções - when().thenThrow()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Já para o when().thenThrow(), configuro o mock para lançar excessões, possibilitando
          testar como o código lida com erros e exceções.
        </QuickbiteHighlighter>
        <CodeBlock code={testCodes.whenThenThrow} />

        <h3 className="sub-description">Respostas dinâmicas - when().thenAnswer()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          O uso do when().thenAnswer() permite modificar o uso do mock. Enquantoo thenReturn()
          retorna um valor fixo, o thenAnswer() executa uma função lambda quando o método é chamado
          possibilitando criar respostas com valores dinâmicos, baseado nos argumentos que o método
          recebe. Nessa situação, o mock é configurado para retornar exatamente o mesmo valor do
          objeto RefreshToken que foi passado como parâmetro. Isso simula o funcionamento padrão
          do método save(), que geralmente retorna a entidade após salvar no banco de dados.
        </QuickbiteHighlighter>
        <CodeBlock code={ testCodes.whenThenAnswer } />

        <h3 className="sub-description">Verificação de chamadas - verify()</h3>
        <QuickbiteHighlighter asParagraph={true}>
          Para veficar as chamadas dos métodos e quantas vezes os métodos foram chamados. Com as
          opções de se chamado uma vez, n vezes ou não ser chamado nunca.
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


        ////////////////////////////////////////////////////
        <MavenSnippet groupId="org.testcontainers" artifactId="junit-jupiter" scope="test" />
        <MavenSnippet groupId="org.testcontainers" artifactId="postgresql" scope="test" />
        <MavenSnippet
          groupId="org.springframework.security"
          artifactId="spring-security-test"
          scope="test"
        />
      
    </div>
  );
};

export default TestsImplement;
