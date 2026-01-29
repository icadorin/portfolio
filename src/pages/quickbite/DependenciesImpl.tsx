import React from 'react';
import '@styles-quickbite/quickbite-highlighter.css';

import MavenSnippet from '@/components/code-block/MavenSnippet';
import QuickbiteHighlighterSection from '@/components/highlight/quickbite/QuickbiteHighlighterSection';
import { HighlightedSection } from '@/components/documentation-layout/HighlightedSection';
import { SimpleSection } from '@/components/documentation-layout/SimpleSection';

const DependenciesImplementation: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Dependências</h1>

      <h2 className="section-subtitle">Visão Geral</h2>
      <p className="section-intro">
        Esta seção descreve as principais dependências utilizadas no ecossistema Quickbite, com foco
        nas decisões técnicas e arquiteturais adotadas durante o desenvolvimento. Os detalhes de
        implementação e exemplos de código são apresentados nas seções específicas de cada
        dependência.
      </p>

      <div className="dep-content">
        <div className="tech-block">
          <h2 className="section-subtitle tech-title">Spring Boot Starter Web</h2>

          <QuickbiteHighlighterSection>
            <p>Import da dependência no arquivo pom.xml</p>
            <MavenSnippet groupId="org.springframework.boot" artifactId="spring-boot-starter-web" />

            <h3 className="sub-description">O que é</h3>
            <p>
              Dependência responsável por permitir a criação de APIs REST utilizando o padrão Spring
              MVC, incluindo suporte nativo a HTTP, serialização JSON e servidor web embutido.
            </p>

            <h3 className="sub-description">Por que foi utilizado</h3>
            <p>
              Foi adotado porque o projeto é baseado em microsserviços que se comunicam via HTTP,
              oferecendo uma forma padronizada e robusta de exposição de APIs.
            </p>
          </QuickbiteHighlighterSection>
          <h3 className="sub-description">Como funciona</h3>
          <HighlightedSection
            title=""
            items={[
              'Inicialização automática de um servidor web embutido (Tomcat).',
              'Conversão automática entre objetos Java e JSON usando Jackson.',
              'Disponibilização de anotações como @RestController e @GetMapping.',
            ]}
          />

          <h3 className="sub-description">Onde foi utilizado</h3>
          <SimpleSection
            title=""
            items={['API Gateway', 'Auth Service', 'Order Service', 'Product Service']}
          />
        </div>

        <div className="tech-block">
          <h2 className="section-subtitle tech-title">Spring Boot Starter Data JPA</h2>

          <QuickbiteHighlighterSection>
            <p>Import da dependência no arquivo pom.xml</p>
            <MavenSnippet
              groupId="org.springframework.boot"
              artifactId="spring-boot-starter-data-jpa"
            />

            <h3 className="sub-description">O que é</h3>
            <p>
              Abstração sobre a Java Persistence API (JPA) que facilita o acesso a bancos de dados
              relacionais utilizando o Hibernate como implementação padrão.
            </p>

            <h3 className="sub-description">Por que foi utilizado</h3>
            <p>
              Reduz drasticamente a necessidade de escrita manual de SQL e promove uma separação
              clara entre regra de negócio e persistência.
            </p>
          </QuickbiteHighlighterSection>
          <h3 className="sub-description">Como funciona</h3>
          <HighlightedSection
            title=""
            items={[
              'Interfaces que estendem JpaRepository geram CRUD automaticamente.',
              'Consultas simples baseadas no nome dos métodos.',
              'Suporte a consultas personalizadas via JPQL ou @Query.',
            ]}
          />

          <h3 className="sub-description">Impacto no projeto</h3>
          <HighlightedSection
            title=""
            items={[
              'Redução de código repetitivo.',
              'Repositórios mais claros e objetivos.',
              'Menor acoplamento entre domínio e persistência.',
            ]}
          />

          <h3 className="sub-description">Onde foi utilizado</h3>
          <SimpleSection title="" items={['Auth Service', 'Order Service', 'Product Service']} />
        </div>

        <div className="tech-block">
          <h2 className="section-subtitle tech-title">Spring Security</h2>

          <QuickbiteHighlighterSection>
            <p>Import da dependência no arquivo pom.xml</p>
            <MavenSnippet
              groupId="org.springframework.boot"
              artifactId="spring-boot-starter-security"
            />

            <h3 className="sub-description">O que é</h3>
            <p>
              Framework responsável por autenticação e autorização, controlando o acesso aos
              endpoints da aplicação.
            </p>

            <h3 className="sub-description">Por que foi utilizado</h3>
            <p>
              Permite centralizar regras de segurança, garantindo que apenas usuários autenticados e
              autorizados acessem recursos protegidos.
            </p>
          </QuickbiteHighlighterSection>
          <h3 className="sub-description">Como funciona</h3>
          <SimpleSection
            title=""
            items={[
              'Intercepta requisições HTTP.',
              'Valida autenticação e permissões.',
              'Bloqueia acessos não autorizados.',
            ]}
          />

          <h3 className="sub-description">Onde foi utilizado</h3>
          <SimpleSection
            title=""
            items={['Auth Service (login e autenticação)', 'Order Service', 'Product Service']}
          />
        </div>

        <div className="tech-block">
          <h2 className="section-subtitle tech-title">JSON Web Token (JJWT)</h2>

          <QuickbiteHighlighterSection>
            <p>Import da dependência no arquivo pom.xml</p>
            <MavenSnippet groupId="io.jsonwebtoken" artifactId="jjwt-api" />

            <h3 className="sub-description">O que é</h3>
            <p>
              Biblioteca utilizada para criação, assinatura e validação de JSON Web Tokens (JWT).
            </p>

            <h3 className="sub-description">Por que foi utilizado</h3>
            <p>
              Permite uma abordagem stateless, eliminando a necessidade de manter sessão no
              servidor.
            </p>
          </QuickbiteHighlighterSection>
          <h3 className="sub-description">Como funciona</h3>
          <SimpleSection
            title=""
            items={[
              'Usuário realiza o login.',
              'Token JWT é gerado pelo Auth Service.',
              'Token é enviado em cada requisição.',
              'Serviços validam o token antes do acesso.',
            ]}
          />

          <h3 className="sub-description">Onde foi utilizado</h3>
          <SimpleSection title="" items={['Auth Service']} />
        </div>

        <div className="tech-block">
          <h2 className="section-subtitle tech-title">Lombok</h2>

          <QuickbiteHighlighterSection>
            <p>Import da dependência no arquivo pom.xml</p>
            <MavenSnippet groupId="org.projectlombok" artifactId="lombok" />

            <h3 className="sub-description">O que é</h3>
            <p>Biblioteca que automatiza a geração de código repetitivo durante a compilação.</p>

            <h3 className="sub-description">Por que foi utilizado</h3>
            <p>
              Evita a escrita manual de getters, setters, construtores e builders, mantendo as
              classes mais limpas.
            </p>
          </QuickbiteHighlighterSection>
          <h3 className="sub-description">Como funciona</h3>
          <HighlightedSection
            title=""
            items={[
              '@Getter, @Setter ou @Data',
              '@Builder',
              '@NoArgsConstructor e @AllArgsConstructor',
            ]}
          />

          <h3 className="sub-description">Impacto no projeto</h3>
          <HighlightedSection
            title=""
            items={[
              'Menos código repetitivo.',
              'Classes mais curtas.',
              'Melhor manutenção a longo prazo.',
            ]}
          />

          <h3 className="sub-description">Onde foi utilizado</h3>
          <HighlightedSection title="" items={['Entidades', 'DTOs']} />
        </div>
      </div>
    </div>
  );
};

export default DependenciesImplementation;
