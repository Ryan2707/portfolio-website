import { Link } from 'react-router-dom';
import './Projects.css';
import ProjectInfo from '../../data/Projects';
import RocketBoostCard from '../../assets/RocketboostCard.png';
import Construction from '../../assets/Untitled.jpg';

const cardImages = {
  1: RocketBoostCard,
};

const Projects = () => {
  return (
    <main className="projects">
      <header className="projects-header">
        <span className="section-label">// my work</span>
        <h1>Featured <span>Projects</span></h1>
        <p>
          A collection of things I've built — games, web apps, and experiments.
        </p>
      </header>

      <div className="projects-grid">
        {ProjectInfo.map((project, i) => {
          const isReal = project.id === 1;
          const img = cardImages[project.id] || Construction;

          if (isReal) {
            return (
              <Link
                key={project.id}
                to="/rocketboost"
                className="project-card"
              >
                <div className="project-card-img-wrap">
                  <img
                    src={img}
                    alt={project.title}
                    className="project-card-img"
                  />
                  <div className="project-card-overlay">
                    <span className="project-card-view">View Project →</span>
                  </div>
                </div>
                <div className="project-card-body">
                  <span className="project-card-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-card-tags">
                    {(project.tags || []).map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <div key={project.id} className="project-card coming-soon">
              <span className="coming-soon-badge">Coming soon</span>
              <div className="project-card-img-wrap">
                <img
                  src={img}
                  alt="Coming soon"
                  className="project-card-img"
                />
              </div>
              <div className="project-card-body">
                <span className="project-card-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="project-card-title">???</h2>
                <p className="project-card-desc">Something new is in the works...</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;