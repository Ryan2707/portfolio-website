import { Link } from 'react-router-dom';
import './Projects.css';
import ProjectInfo from '../../../data/Projects';
import '../../../data/SkillTags.css';
import RocketBoostCard from '../../../assets/RocketBoostProject/RocketboostCard.webp';
import CodeCampusCard from '../../../assets/CodeCampusProject/CodeCampusDetail.webp';
import WorkoutAppCard from '../../../assets/WorkoutAppProject/WorkoutAppOverzicht.webp';
import Construction from '../../../assets/Untitled.webp';

const cardImages = {
  1: RocketBoostCard,
  2: CodeCampusCard,
  3: WorkoutAppCard,
  4: Construction,
  5: Construction,
};

const projectRoutes = {
  1: '/rocketboost',
  2: '/codecampus',
  3: '/workoutapp',
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
          const isReal = !!projectRoutes[project.id];

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
                    key={tag.name}
                    className={`project-tag ${tag.type}`}
                    >
                    {tag.name}
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
      Projectpagina volgt
    </span>

    <div className="project-card-img-wrap">
      <img
        src={img}
        alt={project.title}
        className="project-card-img"
        loading="lazy"
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
        {project.shortDescription}
      </p>

      {project.tags?.length > 0 && (
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`project-tag ${tag.type}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);
          
        })}
      </div>
    </main>
  );
};

export default Projects;