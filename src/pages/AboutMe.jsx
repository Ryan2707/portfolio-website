import AboutMeText from '../components/AboutMeText';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <AboutMeText 
                paragraph1= "Hi! I'm Ryan, a 17-year-old developer who loves solving problems and turning ideas into real projects."
                paragraph2= "I'm passionate about web development and specialize in React, HTML, CSS, and JavaScript. I enjoy experimenting with UI/UX design and creating clean, responsive interfaces that feel great to use."
                paragraph3= "I also explore game development using C#, Unity, GDScript, and Godot, where I enjoy bringing interactive ideas and small game concepts to life."
                paragraph4= "I'm always learning—currently exploring new ways to improve my React skills and build better web interfaces. When I'm not coding, you’ll usually find me reading web novels, gaming, or playing basketball with friends">
            </AboutMeText>
        </div>
    );
}

export default AboutMe;