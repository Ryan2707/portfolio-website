import { Link } from "react-router-dom";

const ProjectCard = ({ projectTitle, projectImg, ProjectDetailPage }) => {
  return (
    <div className="project-card cursor-pointer">

      <Link to={ProjectDetailPage}>
        <img
          src={projectImg}
          alt={projectTitle}
          className="project-image"
        />
      </Link>
      <h3 className="project-title">{projectTitle}</h3>
    </div>
  );
};

export default ProjectCard;
