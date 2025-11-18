import './Home.css'
import '../App.css'
import HomePageTopText from '../components/HomePageText';
import { HomePageBottomText } from '../components/HomePageText';
import picture from '../assets/HomePage.jpg';
import CallToAction from '../components/Call-To-Action';

const Home = () => {
    return (
        <div>
        <section className="Left">
            <HomePageTopText title="Ryan Kramer" subtitle="Software Developer" />
            <HomePageBottomText paragraph="Quality over Quantity. "/>
        
             <div className="call-to-action-container">
                <CallToAction title="View My Work" link="/projects" />
                 <CallToAction title="Get in Touch" link="/contact" />
             </div>
         </section>

        <section className="Right">
        <img src={picture} alt="Home Page" className="home-image" loading="eager"/>
        </section>
        </div>
    );
}

export default Home;
