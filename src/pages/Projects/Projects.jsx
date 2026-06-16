import { Link } from 'react-router-dom';
import './Projects.css';
import ProjectInfo from '../../data/Projects';

import RocketBoostCard from '../../assets/RocketboostCard.png';
import CodeCampusCard from '../../assets/CodeCampus1.png';
import Construction from '../../assets/Untitled.jpg';

const cardImages = {
  1: RocketBoostCard,
  2: CodeCampusCard,
};

const projectRoutes = {
  1: '/rocketboost',
  2: '/codecampus',
};

const Projects = () => {
  return (
    <main className="projects">
      <header className="projects-header">
        <span className="section-label">// projecten</span>

        <h1>
          Mijn <span>Projecten</span>
        </h1>

        <p>
          Een overzicht van projecten waar ik aan heb gewerkt. Sommige zijn
          gemaakt voor school, andere zijn ontstaan uit nieuwsgierigheid,
          nieuwe ideeën of om mezelf verder te ontwikkelen als developer.
        </p>
      </header>

      <div className="projects-grid">
        {ProjectInfo.map((project, i) => {
          const isReal = project.id === 1 || project.id === 2;

          const img = cardImages[project.id] || Construction;

          if (isReal) {
            return (
              <Link
                key={project.id}
                to={projectRoutes[project.id]}
                className="project-card"
              >
                <div className="project-card-img-wrap">
                  <img
                    src={img}
                    alt={project.title}
                    className="project-card-img"
                  />

                  <div className="project-card-overlay">
                    <span className="project-card-view">
                      Bekijk Project →
                    </span>
                  </div>
                </div>

                <div className="project-card-body">
                  <span className="project-card-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h2 className="project-card-title">
                    {project.title}
                  </h2>

                  <p className="project-card-desc">
                    {project.shortDescription}
                  </p>

                  <div className="project-card-tags">
                    {(project.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <div
              key={project.id}
              className="project-card coming-soon"
            >
              <span className="coming-soon-badge">
                Binnenkort
              </span>

              <div className="project-card-img-wrap">
                <img
                  src={img}
                  alt="Binnenkort beschikbaar"
                  className="project-card-img"
                />
              </div>

              <div className="project-card-body">
                <span className="project-card-number">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h2 className="project-card-title">
                  {project.title}
                </h2>

                <p className="project-card-desc">
                  Nieuw project volgt binnenkort.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;