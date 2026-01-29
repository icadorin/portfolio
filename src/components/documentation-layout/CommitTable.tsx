import React from 'react';
import '@styles-quickbite/commit-table.css';

const CommitTable: React.FC = () => (
  <div className="table-wrapper">
    <table className="commit-table">
      <caption className="table-caption">Commits Relevantes de Correções</caption>
      <thead>
        <tr>
          <th scope="col">Título do Commit</th>
          <th scope="col">Descrição</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="commit-title">Correção de relacionamento</td>
          <td className="commit-description">Alterado de OneToMany para OneToOne em UserProfile</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/5d5baea800445ffafe05d4352ae9dc150255ce7a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Adição de endereço</td>
          <td className="commit-description">Adicionado campo address em UserProfile</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/da4b958ea3449318b5733dae2b204a37234f8296"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Correção de nome de variável</td>
          <td className="commit-description">Corrigido imaUrl para imageUrl</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/3a360ee9fe0f9e3f33405ad2b70cea2826239cac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Builder defaults e JDBC</td>
          <td className="commit-description">Adicionados defaults e suporte JSON nativo</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/76ec84dc1e2607c0fee16fdeaf32995ca5aa1250"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">List para Map</td>
          <td className="commit-description">Alterado ingredients/allergens de List para Map</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/ae022432e58f84715873045769f17bb5ebf67c09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Atualização mapToResponse</td>
          <td className="commit-description">Mapeamento manual de campos</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/7af983ffad05fc6762f7ac2e2f0e3fc0ccf756f4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Getters e Setters</td>
          <td className="commit-description">Adicionados via Lombok em RegisterRequest</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/744960c4ee3208c4b6809974765a31483a4c5edf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Tratamento de erros no login</td>
          <td className="commit-description">Adicionado try-catch para autenticação</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/18faecf2841ecb7e018e5f4178514b937166df2c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Validação de refresh token</td>
          <td className="commit-description">Resolvido problema com testes adicionados</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/2c97b2a69e4dd18079e42d80a01d7b2fd1abd20f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Propriedades de DB</td>
          <td className="commit-description">Ajustadas configs de bancos por serviço</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/7788d8803ed9411f67924850b22f7acaad9d556e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
        <tr>
          <td className="commit-title">Correção de campos em entidades</td>
          <td className="commit-description">Ajustes em testes e campos</td>
          <td className="commit-link">
            <a
              href="https://github.com/icadorin/quick-bite-backend/commit/86918513349ef422a6d18f4d0c21ec8c9841ec14"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CommitTable;
