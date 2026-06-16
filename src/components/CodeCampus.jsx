import { Link } from 'react-router-dom';
import './CodeCampus.css';
import ProjectInfo from '../data/Projects';

import CodeCampusHome from '../assets/CodeCampusHome.png';
import CodeCampusCourses from '../assets/CodeCampusCourses.png';
import CodeCampusInstructors from '../assets/CodeCampusInstructors.png';
import CodeCampusProfile from '../assets/CodeCampusProfile.png';
import CodeCampusStats from '../assets/CodeCampusStats.png';
import CodeCampusProgress from '../assets/CodeCampusProgress.png';
import CodeCampusInstructorsProfile from '../assets/CodeCampusInstructorProfile.png';

const CodeCampus = () => {
  const project = ProjectInfo.find((p) => p.id === 2);

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
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`skill-tag ${tag.type}`}
              >
                {tag.name}
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
            <h3>Mijn bijdrage</h3>

            <ul className="project-learned-list">
              <li>Werken in een bestaande React codebase</li>
              <li>Opsporen en oplossen van bugs</li>
              <li>Implementeren van nieuwe functionaliteiten</li>
              <li>Werken met Git branches en Pull Requests</li>
              <li>Samenwerken via GitHub</li>
              <li>Verbeteren van gebruikerservaring</li>
              <li>Responsive design optimaliseren</li>
            </ul>
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
              href={project.github}
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

      <section className="project-section">
        <h2>Belangrijkste Functionaliteiten</h2>

        <div className="feature-showcase">

          <div className="feature-item">
            <div className="feature-content">
              <h3>Dashboard & Navigatie</h3>
              <p>
                De homepage vormt het centrale startpunt van het platform.
                Gebruikers kunnen snel navigeren naar cursussen, berichten,
                Q&A, studiegroepen en andere onderdelen van de applicatie.
              </p>
            </div>

            <img src={CodeCampusHome} alt="Dashboard" />
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Cursus Overzicht</h3>
              <p>
                Gebruikers kunnen cursussen zoeken, filteren en sorteren.
                Elke cursus bevat informatie zoals niveau, duur,
                beoordelingen, aantal deelnemers en populariteit.
              </p>
            </div>

            <img src={CodeCampusCourses} alt="Cursussen" />
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Instructor Overzicht</h3>
              <p>
                Een overzicht van alle beschikbare instructeurs met hun
                beoordelingen, expertisegebieden, studentenaantallen
                en gekoppelde cursussen.
              </p>
            </div>

            <img src={CodeCampusInstructors} alt="Instructors" />
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Instructor Profiel</h3>
              <p>
                Iedere instructeur beschikt over een eigen profielpagina met
                expertise, statistieken en beschikbare cursussen. Gebruikers
                kunnen instructeurs volgen om op de hoogte te blijven van
                nieuwe content.
              </p>
            </div>

            <img
              src={CodeCampusInstructorsProfile}
              alt="Instructor Detail"
            />
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Gebruikersaccount</h3>
              <p>
                Gebruikers kunnen hun profiel beheren, persoonlijke gegevens
                aanpassen, een profielfoto uploaden en instellingen beheren.
              </p>
            </div>

            <img src={CodeCampusProfile} alt="Profiel" />
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Persoonlijke Statistieken</h3>
              <p>
                Het platform houdt leeractiviteit bij, waaronder totale
                studietijd, actieve leerstreaks en afgeronde cursussen.
                Deze gegevens worden lokaal opgeslagen via Local Storage.
              </p>
            </div>

            <img src={CodeCampusStats} alt="Statistieken" />
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Voortgang Tracking</h3>
              <p>
                Gebruikers kunnen hun voortgang per cursus volgen. Hierdoor
                is direct zichtbaar hoeveel procent van een cursus voltooid
                is en hoeveel tijd eraan besteed is.
              </p>
            </div>

            <img src={CodeCampusProgress} alt="Voortgang" />
          </div>

        </div>
      </section>
    </main>
  );
};

export default CodeCampus;