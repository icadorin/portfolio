import React from 'react';
import '@styles-quickbite/commit-table.css';
import { CommitItem } from '@app-types/commit';

interface CommitTableProps {
  commits: CommitItem[];
}

const CommitTable: React.FC<CommitTableProps> = ({ commits }) => (
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
        {commits.map((commit) => (
          <tr key={commit.link}>
            <td className="commit-title">{commit.title}</td>
            <td className="commit-description">{commit.description}</td>
            <td className="commit-link">
              <a href={commit.link} target="_blank" rel="noopener noreferrer">
                Visualizar
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CommitTable;
