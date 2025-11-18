import ProjectCard from "../components/ProjectCard";
import './ProjectsCard.css';
import RocketBoost from '../assets/RocketboostCard.png';

const Projects = () => {
    return (
        <div>
            <section className="Projects">
                <ProjectCard 
                    className='RocketBoost' 
                    projectTitle='Rocket Boost' 
                    projectImg={RocketBoost}
                    ProjectDetailPage="/src/pages/rocketboost.jsx"
                />

                <ProjectCard 
                    className='2'
                    projectTitle='2'
                    projectImg=""
                    ProjectDetailPage=""
                />

                <ProjectCard 
                    projectTitle='3'
                    projectImg=""
                    ProjectDetailPage=""
                />

                <ProjectCard 
                    projectTitle='4'
                    projectImg=""
                    ProjectDetailPage=""
                />
            </section>
        </div>
    );
};

export default Projects;
