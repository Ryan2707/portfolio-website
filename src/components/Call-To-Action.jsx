import { useNavigate } from "react-router-dom";

const CallToAction = ({ title, link }) => {
    const navigate = useNavigate();

    return ( 
        <div 
            className="call-to-action" 
            onClick={() => navigate(link)}
        >
            <h1 className="call-to-action-text">{title}</h1>
        </div>
    );
}
 
export default CallToAction;
