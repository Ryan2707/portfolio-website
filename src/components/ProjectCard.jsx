import { Link } from "react-router-dom";

const ProjectCard = ({ projectTitle, projectImg, ProjectDetailPage }) => {
  return (
    <div className="project-card cursor-pointer">
      <h3 className="project-title">{projectTitle}</h3>

      <Link to={ProjectDetailPage}>
        <img
          src={projectImg}
          alt={projectTitle}
          className="project-image"
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
