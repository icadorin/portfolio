import React, { useEffect, useState } from 'react';
import '@styles-quickbite/githubStatus.css';

type ConclusionStatus = 'success' | 'failure' | 'cancelled' | 'skipped' | null;
type RunStatus = 'queued' | 'in_progress' | 'completed';

interface GitHubRepo {
  updated_at: string;
  description: string | null;
}

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
}

interface GitHubWorkflowRun {
  status: RunStatus;
  conclusion: ConclusionStatus;
}

interface WorkflowRunsResponse {
  workflow_runs: GitHubWorkflowRun[];
}

const workflowStatusMap: Record<RunStatus | Exclude<ConclusionStatus, null> | string, string> = {
  success: 'Sucesso',
  failure: 'Falha',
  cancelled: 'Cancelado',
  skipped: 'Ignorado',
  queued: 'Em Fila',
  in_progress: 'Em Progresso',
  completed: 'Concluído',
};

const GitHubStatus: React.FC = () => {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [workflowStatus, setWorkflowStatus] = useState<GitHubWorkflowRun | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const repoPromise = fetch('https://api.github.com/repos/icadorin/quick-bite-backend').then(
          (res) => {
            if (!res.ok) throw new Error(`Erro HTTP (Repo)! status: ${res.status}`);
            return res.json();
          }
        );

        const commitsPromise = fetch(
          'https://api.github.com/repos/icadorin/quick-bite-backend/commits'
        ).then((res) => {
          if (!res.ok) throw new Error(`Erro HTTP (Commits)! status: ${res.status}`);
          return res.json();
        });

        const workflowsPromise = fetch(
          'https://api.github.com/repos/icadorin/quick-bite-backend/actions/runs'
        ).then((res) => {
          if (!res.ok) throw new Error(`Erro HTTP (Workflows)! status: ${res.status}`);
          return res.json();
        });

        const [repoResult, commitsResult, workflowsResult] = await Promise.all([
          repoPromise,
          commitsPromise,
          workflowsPromise,
        ]);

        setRepoData(repoResult as GitHubRepo);
        setCommits((commitsResult as GitHubCommit[]).slice(0, 3));
        const workflowsData = workflowsResult as WorkflowRunsResponse;
        if (workflowsData.workflow_runs.length > 0) {
          setWorkflowStatus(workflowsData.workflow_runs[0]);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Erro ao carregar dados do GitHub';
        setError(errorMessage);
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
    const interval = setInterval(fetchGitHubData, 300000);
    return () => clearInterval(interval);
  }, []);

  const getWorkflowStatusText = (workflow: GitHubWorkflowRun): string => {
    const key =
      workflow.status === 'completed' ? workflow.conclusion || 'completed' : workflow.status;
    return workflowStatusMap[key] || String(key);
  };

  const getWorkflowStatusClass = (workflow: GitHubWorkflowRun): string => {
    if (workflow.status === 'completed') {
      return workflow.conclusion || 'completed';
    }
    return workflow.status;
  };

  const formatGitHubDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return <div className="github-status loading">Carregando status do repositório...</div>;
  }

  if (error) {
    return <div className="github-status error">⚠️ **Erro:** {error}</div>;
  }

  return (
    <div className="github-container">
      <div className="github-status">
        <div className="github-grid">
          <div className="section-block">
            <h3>📊 Status do Repositório</h3>
            {repoData && (
              <div className="info-list">
                <div className="info-item">
                  <strong>Última atualização:</strong> {formatGitHubDate(repoData.updated_at)}
                </div>
                {workflowStatus && (
                  <div className="info-item">
                    <strong>GitHub Actions:</strong>
                    <span className={`status ${getWorkflowStatusClass(workflowStatus)}`}>
                      {getWorkflowStatusText(workflowStatus)}
                    </span>
                  </div>
                )}
                <div className="info-item">
                  <strong>Descrição:</strong> {repoData.description || 'Sem descrição'}
                </div>
              </div>
            )}
          </div>

          <div className="section-block">
            <h3>🕒 Últimos Commits</h3>
            <div className="info-list">
              {commits.map((commit) => (
                <div key={commit.sha} className="info-item commit-item">
                  <div className="commit-message">{commit.commit.message.split('\n')[0]}</div>
                  <div className="commit-meta">
                    por <strong>{commit.commit.author.name}</strong> •{' '}
                    {formatGitHubDate(commit.commit.author.date)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="https://github.com/icadorin/quick-bite-backend"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Ver repositório no GitHub
        </a>
      </div>
    </div>
  );
};

export default GitHubStatus;
