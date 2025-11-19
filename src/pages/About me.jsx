import AboutMeText from '../components/AboutMeText';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <AboutMeText 
                paragraph1="Hi! I'm Ryan, a 17-year-old who loves solving problems."
                paragraph2="I'm passionate about web development and specialize in React, Node.js, Next.js, Electron.js, HTML, CSS, and JavaScript."
                paragraph3="I also enjoy exploring game development with"
                paragraph4="C#, Unity, GDScript, and Godot.">
            </AboutMeText>
        </div>
    );
}

export default AboutMe;