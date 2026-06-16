import { Link } from 'react-router-dom';
import ProjectInfo from '../data/Projects';
import '../components/rocketboost.css';
import { githubLinkRocketBoost } from '../component/links';

const RocketBoost = () => {
  const project = ProjectInfo.find((p) => p.id === 1) || ProjectInfo[0];

  return (
    <main className="project-detail">
      <Link to="/projects" className="project-detail-back">
        ← Terug naar projecten
      </Link>

      <div className="project-detail-grid">
        <div className="project-detail-info">
          <span className="section-label">// project details</span>

          <h1>
            <span>{project.title}</span>
          </h1>

          <div className="project-detail-tags">
            {(project.tags || []).map((t) => (
              <span key={t} className="skill-tag game">
                {t}
              </span>
            ))}
          </div>

          <p className="project-detail-desc">
            {project.description}
          </p>

          <div className="project-section">
            <h3>Waarom heb ik dit gebouwd?</h3>

            <p>{project.purpose}</p>
          </div>

          <div className="project-section">
            <h3>Wat heb ik geleerd?</h3>

            <ul className="project-learned-list">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail-links">
            <a
              href={githubLinkRocketBoost}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Bekijk op GitHub →
            </a>
          </div>
        </div>

        <div className="project-detail-img-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-detail-img"
          />
        </div>
      </div>
    </main>
  );
};

export default RocketBoost;