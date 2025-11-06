// components/GitHubStatus.jsx
import React, { useEffect, useState } from 'react';

const GitHubStatus = () => {
  const [repoData, setRepoData] = useState(null);
  const [commits, setCommits] = useState([]);
  const [workflowStatus, setWorkflowStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        const repoResponse = await fetch(
          'https://api.github.com/repos/icadorin/quick-bite-backend'
        );
        const repoData = await repoResponse.json();
        setRepoData(repoData);

        const commitsResponse = await fetch(
          'https://api.github.com/repos/icadorin/quick-bite-backend/commits'
        );
        const commitsData = await commitsResponse.json();
        setCommits(commitsData.slice(0, 5));

        const workflowsResponse = await fetch(
          'https://api.github.com/repos/icadorin/quick-bite-backend/actions/runs'
        );
        const workflowsData = await workflowsResponse.json();
        if (workflowsData.workflow_runs.length > 0) {
          setWorkflowStatus(workflowsData.workflow_runs[0]);
        }
      } catch (err) {
        setError('Erro ao carregar dados do GitHub');
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();

    const interval = setInterval(fetchGitHubData, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return <div className="github-status loading">Carregando status do repositório...</div>;
  if (error) return <div className="github-status error">{error}</div>;

  return (
    <div className="github-status">
      <h3>📊 Status do Repositório</h3>

      <div className="github-stats">
        {repoData && (
          <div className="repo-info">
            <div className="stat">
              <strong>⭐ Stars:</strong> {repoData.stargazers_count}
            </div>
            <div className="stat">
              <strong>🍴 Forks:</strong> {repoData.forks_count}
            </div>
            <div className="stat">
              <strong>👀 Watchers:</strong> {repoData.watchers_count}
            </div>
            <div className="stat">
              <strong>📅 Última atualização:</strong>{' '}
              {new Date(repoData.updated_at).toLocaleDateString('pt-BR')}
            </div>
          </div>
        )}

        {workflowStatus && (
          <div className="workflow-status">
            <strong>GitHub Actions:</strong>
            <span className={`status ${workflowStatus.conclusion || workflowStatus.status}`}>
              {workflowStatus.conclusion || workflowStatus.status}
            </span>
          </div>
        )}
      </div>

      <div className="recent-commits">
        <h4>Últimos Commits:</h4>
        {commits.map((commit, index) => (
          <div key={commit.sha} className="commit">
            <div className="commit-message">{commit.commit.message.split('\n')[0]}</div>
            <div className="commit-meta">
              por {commit.commit.author.name} •{' '}
              {new Date(commit.commit.author.date).toLocaleDateString('pt-BR')}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/icadorin/quick-bite-backend"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        🔗 Ver repositório no GitHub
      </a>
    </div>
  );
};

export default GitHubStatus;
