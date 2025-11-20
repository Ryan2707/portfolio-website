import ProjectCard from "../components/ProjectCard";
import "./ProjectsCard.css";
import RocketBoost from "../assets/RocketboostCard.png";
import Construction from "../assets/Untitled.jpg";
const Projects = () => {
  return (
    <div>
      <section className="Projects">
        <ProjectCard
          className="RocketBoost"
          projectTitle="Rocket Boost"
          projectImg={RocketBoost}
          ProjectDetailPage="/rocketboost"
        />

        <ProjectCard
          className=""
          projectTitle="?"
          projectImg={Construction}
          ProjectDetailPage=""
        />

        <ProjectCard
          projectTitle="?"
          projectImg={Construction}
          ProjectDetailPage=""
        />

        <ProjectCard
          projectTitle="?"
          projectImg={Construction}
          ProjectDetailPage=""
        />
      </section>
    </div>
  );
};

export default Projects;
