import { Link } from 'react-router-dom';
import './WorkoutApp.css';
import ProjectInfo from '../../../data/Projects';

import WorkoutAppActiveWorkout from '../../../assets/WorkoutAppProject/WorkoutAppActiveWorkout.png';
import WorkoutAppAgenda from '../../../assets/WorkoutAppProject/WorkoutAppAgenda.png';
import WorkoutAppInlog from '../../../assets/WorkoutAppProject/WorkoutAppInlog.png';
import WorkoutAppNieuweWorkout from '../../../assets/WorkoutAppProject/WorkoutAppNieuweWorkout.png';
import WorkoutAppOefeningen from '../../../assets/WorkoutAppProject/WorkoutAppOefeningen.png';
import WorkoutAppOefeningenWorkoutDataBase from '../../../assets/WorkoutAppProject/WorkoutAppOefeningen-WorkoutDataBase.png';
import WorkoutAppOefeningenVervangen from '../../../assets/WorkoutAppProject/WorkoutAppOefeningVervangen.png';
import WorkoutAppOverzicht from '../../../assets/WorkoutAppProject/WorkoutAppOverzicht.png';
import WorkoutAppRegistratie from '../../../assets/WorkoutAppProject/WorkoutAppRegistratie.png';
import WorkoutAppTemplates from '../../../assets/WorkoutAppProject/WorkoutAppTemplates.png';
import WorkoutAppUserDataBase from '../../../assets/WorkoutAppProject/WorkoutAppUserDataBase.png';
import WorkoutAppWorkoutDataBase from '../../../assets/WorkoutAppProject/WorkoutAppWorkoutDataBase.png';

const WorkoutApp = () => {
  const project = ProjectInfo.find((p) => p.id === 3);

  if (!project) {
    return <p>Project niet gevonden.</p>;
  }

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
              <li></li>
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

          {/* 1. Registratie */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Registratie</h3>
              <p>
                Nieuwe gebruikers kunnen een account aanmaken om hun workouts,
                trainingsgegevens en voortgang op te slaan.
              </p>
            </div>

            <img src={WorkoutAppRegistratie} alt="Registratie" />
          </div>

          {/* 2. Inlog */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Inloggen</h3>
              <p>
                Gebruikers kunnen veilig inloggen om toegang te krijgen tot hun
                persoonlijke trainingsomgeving.
              </p>
            </div>

            <img src={WorkoutAppInlog} alt="Inloggen" />
          </div>

          {/* 3. User Database */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Gebruikersdatabase</h3>
              <p>
                Alle gebruikersgegevens worden centraal opgeslagen zodat
                accounts, instellingen en trainingsinformatie behouden blijven.
              </p>
            </div>

            <img
              src={WorkoutAppUserDataBase}
              alt="Gebruikersdatabase"
            />
          </div>

          {/* 4. Overview */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Workout Overzicht</h3>
              <p>
                Een overzicht van alle aangemaakte workouts waarmee gebruikers
                snel hun trainingsschema's kunnen beheren.
              </p>
            </div>

            <img src={WorkoutAppOverzicht} alt="Workout Overzicht" />
          </div>

          {/* 5. Templates */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Workout Templates</h3>
              <p>
                Maak gebruik van templates om sneller nieuwe workouts samen te
                stellen en consistent te trainen.
              </p>
            </div>

            <img src={WorkoutAppTemplates} alt="Workout Templates" />
          </div>

          {/* 6. Nieuwe Workouts */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Nieuwe Workout Aanmaken</h3>
              <p>
                Gebruikers kunnen volledig gepersonaliseerde workouts opstellen
                op basis van hun trainingsdoelen.
              </p>
            </div>

            <img
              src={WorkoutAppNieuweWorkout}
              alt="Nieuwe Workout"
            />
          </div>

          {/* 7. Workout Database */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Workout Database</h3>
              <p>
                Alle aangemaakte workouts worden opgeslagen zodat ze later
                eenvoudig aangepast of opnieuw gebruikt kunnen worden.
              </p>
            </div>

            <img
              src={WorkoutAppWorkoutDataBase}
              alt="Workout Database"
            />
          </div>

          {/* 8. Oefeningen */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Oefeningen</h3>
              <p>
                Gebruikers kunnen oefeningen toevoegen aan hun workouts en deze
                organiseren per spiergroep of trainingsdoel.
              </p>
            </div>

            <img src={WorkoutAppOefeningen} alt="Oefeningen" />
          </div>

          {/* 9. Oefeningen Vervangen */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Oefeningen Vervangen</h3>
              <p>
                Bestaande oefeningen kunnen eenvoudig vervangen worden door
                alternatieven zonder de workout opnieuw op te bouwen.
              </p>
            </div>

            <img
              src={WorkoutAppOefeningenVervangen}
              alt="Oefeningen Vervangen"
            />
          </div>

          {/* 10. Oefeningen Database */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Oefeningen Database</h3>
              <p>
                Een uitgebreide database met oefeningen inclusief informatie
                over uitvoering en spiergroepen.
              </p>
            </div>

            <img
              src={WorkoutAppOefeningenWorkoutDataBase}
              alt="Oefeningen Database"
            />
          </div>

          {/* 11. Agenda */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Agenda</h3>
              <p>
                Plan trainingen vooruit en behoud overzicht over je volledige
                trainingsweek.
              </p>
            </div>

            <img src={WorkoutAppAgenda} alt="Agenda" />
          </div>

          {/* 12. Active Workout */}
          <div className="feature-item">
            <div className="feature-content">
              <h3>Actieve Workout</h3>
              <p>
                Tijdens een training kunnen sets, herhalingen en gewichten
                realtime worden bijgehouden voor optimale voortgangsregistratie.
              </p>
            </div>

            <img
              src={WorkoutAppActiveWorkout}
              alt="Actieve Workout"
            />
          </div>

        </div>
      </section>
    </main>
  );
};

export default WorkoutApp;