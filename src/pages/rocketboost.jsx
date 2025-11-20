import ProjectInfo from '../data/Projects.js';
import RocketBoostComponent from '../components/ProjectDetail.jsx';

const RocketBoost = () => {
    const project = ProjectInfo.find(p => p.id === 1) || ProjectInfo[0];

    return (  
        <div>
            <RocketBoostComponent 
                boter={project.title}
                kaas={project.description}
                ei={project.image}
            />
        </div>
    );
}
 
export default RocketBoost;