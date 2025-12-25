import React from 'react';
import '@styles-quickbite/quickbiteHighlighter.css';

import DependencySection from '@/components/dependencies/DependencySection';
import HighlightedList from '@/components/highlight/HighlightedList';
import SimpleList from '@/components/ui/SimpleList';

const DependenciesImplementation: React.FC = () => {
  return (
    <div className="section">
      <h1 className="section-title">Dependências</h1>

      <DependencySection
        title="Visão Geral"
        sections={[
          {
            title: 'Contexto',
            content: (
              <p>
                Esta seção descreve as principais dependências utilizadas no ecossistema Quickbite,
                com foco nas decisões técnicas e arquiteturais adotadas durante o desenvolvimento.
                Os detalhes de implementação e trechos de código são abordados nas seções
                específicas do projeto (Entidades, Repositórios, Serviços, Testes, etc.).
              </p>
            ),
          },
        ]}
      />

      <DependencySection
        title="Spring Boot Starter Web"
        maven={{
          groupId: 'org.springframework.boot',
          artifactId: 'spring-boot-starter-web',
        }}
        sections={[
          {
            title: 'O que é',
            content: (
              <p>
                O spring-boot-starter-web é a dependência responsável por permitir a criação de APIs
                REST utilizando o padrão Spring MVC, possibilitando o tratamento de requisições HTTP
                como GET, POST, PUT e DELETE.
              </p>
            ),
          },
          {
            title: 'Por que foi utilizado',
            content: (
              <p>
                Foi adotado porque o projeto é baseado em serviços que se comunicam via HTTP. Essa
                dependência padroniza a forma como os endpoints são expostos e simplifica a
                construção da camada de entrada da aplicação.
              </p>
            ),
          },
          {
            title: 'Como funciona',
            content: (
              <HighlightedList
                items={[
                  'Inicialização do servidor web embutido (Tomcat).',
                  'Conversão automática entre objetos Java e JSON (usando Jackson).',
                  'Disponibilização de anotações como @RestController e @GetMapping.',
                ]}
              />
            ),
          },
          {
            title: 'Onde foi utilizado',
            content: (
              <>
                <SimpleList
                  items={['API Gateway', 'Auth Service', 'Order Service', 'Product Service']}
                />
                <p>
                  Utilizado principalmente na camada de controllers, que representa o ponto de
                  entrada das requisições HTTP.
                </p>
              </>
            ),
          },
        ]}
      />

      <DependencySection
        title="Spring Boot Starter Data JPA"
        maven={{
          groupId: 'org.springframework.boot',
          artifactId: 'spring-boot-starter-data-jpa',
        }}
        sections={[
          {
            title: 'O que é',
            content: (
              <p>
                O Spring Data JPA é uma abstração sobre o Java Persistence API (JPA), utilizando o
                Hibernate como implementação padrão. Ele facilita a comunicação entre a aplicação e
                o banco de dados relacional.
              </p>
            ),
          },
          {
            title: 'Por que foi utilizado',
            content: (
              <p>
                Foi adotado para simplificar o acesso aos dados e evitar a escrita manual de SQL em
                grande parte dos casos.
              </p>
            ),
          },
          {
            title: 'Como funciona',
            content: (
              <>
                <p>
                  Através de interfaces que estendem JpaRepository, o Spring gera automaticamente:
                </p>
                <HighlightedList
                  items={[
                    'Operações básicas de CRUD (Create, Read, Update, Delete).',
                    'Consultas simples baseadas em nomes de métodos.',
                  ]}
                />
                <p>
                  Quando necessário, é possível definir consultas personalizadas usando JPQL ou
                  anotações como @Query.
                </p>
              </>
            ),
          },
          {
            title: 'Impacto no projeto',
            content: (
              <HighlightedList
                items={[
                  'Redução de código repetitivo',
                  'Repositórios mais claros e objetivos',
                  'Separação entre regra de negócio e acesso a dados',
                ]}
              />
            ),
          },
          {
            title: 'Onde foi utilizado',
            content: (
              <>
                <SimpleList items={['Auth Service', 'Order Service', 'Product Service']} />
                <p>Aplicado nas entidades e repositórios.</p>
              </>
            ),
          },
        ]}
      />

      <DependencySection
        title="Spring Security"
        maven={{
          groupId: 'org.springframework.boot',
          artifactId: 'spring-boot-starter-security',
        }}
        sections={[
          {
            title: 'O que é',
            content: (
              <p>
                Framework responsável por autenticação e autorização, controlando o acesso aos
                endpoints da aplicação.
              </p>
            ),
          },
          {
            title: 'Por que foi utilizado',
            content: (
              <p>
                Utilizado para garantir que apenas usuários autenticados consigam acessar recursos
                protegidos e para aplicar regras de segurança de forma centralizada.
              </p>
            ),
          },
          {
            title: 'Como funciona',
            content: (
              <SimpleList
                items={[
                  'Intercepta requisições HTTP',
                  'Valida autenticação e permissões',
                  'Bloqueia acessos não autorizados',
                ]}
              />
            ),
          },
          {
            title: 'Onde foi utilizado',
            content: (
              <SimpleList
                items={[
                  'Auth Service (processo de login e autenticação)',
                  'Order Service',
                  'Product Service',
                ]}
              />
            ),
          },
        ]}
      />

      <DependencySection
        title="JSON Web Token (JJWT)"
        maven={{
          groupId: 'io.jsonwebtoken',
          artifactId: 'jjwt-api',
        }}
        sections={[
          {
            title: 'O que é',
            content: (
              <p>
                Biblioteca utilizada para criação, assinatura e validação de JSON Web Tokens (JWT).
              </p>
            ),
          },
          {
            title: 'Por que foi utilizado',
            content: (
              <p>
                Permite uma abordagem stateless, desta forma o servidor não precisa manter sessão do
                usuário.
              </p>
            ),
          },
          {
            title: 'Como funciona',
            content: (
              <SimpleList
                items={[
                  'Usuário realiza o login',
                  'Um token JWT é gerado pelo Auth Service',
                  'Esse token é enviado pelo cliente em cada requisição',
                  'Os serviços validam o token antes de permitir o acesso',
                ]}
              />
            ),
          },
          {
            title: 'Onde foi utilizado',
            content: <SimpleList items={['Auth Service']} />,
          },
        ]}
      />

      <DependencySection
        title="Lombok"
        maven={{
          groupId: 'org.projectlombok',
          artifactId: 'lombok',
        }}
        sections={[
          {
            title: 'O que é',
            content: (
              <p>Biblioteca que automatiza a geração de código repetitivo durante a compilação.</p>
            ),
          },
          {
            title: 'Por que foi utilizado',
            content: (
              <p>Para evitar a escrita manual de getters, setters, construtores e builders.</p>
            ),
          },
          {
            title: 'Como funciona',
            content: (
              <HighlightedList
                items={[
                  '@Getter, @Setter ou @Data',
                  '@Builder',
                  '@NoArgsConstructor e @AllArgsConstructor',
                ]}
              />
            ),
          },
          {
            title: 'Impacto no projeto',
            content: (
              <HighlightedList
                items={[
                  'Menos código repetitivo',
                  'Classes mais curtas',
                  'Melhor manutenção a longo prazo',
                ]}
              />
            ),
          },
          {
            title: 'Onde foi utilizado',
            content: <SimpleList items={['Entidades', 'DTOs']} />,
          },
        ]}
      />
    </div>
  );
};

export default DependenciesImplementation;
