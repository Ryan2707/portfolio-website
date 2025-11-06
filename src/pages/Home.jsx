import './Home.css'
import '../App.css'
import HomePageTopText from '../components/HomePageText';
import { HomePageBottomText } from '../components/HomePageText';
import picture from '../assets/HomePage.jpg';

const Home = () => {
    return (
        <div>
        <section className="Left">
        <HomePageTopText title="Ryan Kramer" subtitle="Software Developer" />
        <HomePageBottomText paragraph="Quality over Quantity. "/>
        </section>

        <section className="Right">
        <img src={picture} alt="Home Page" className="home-image"/>
        </section>
        </div>
    );
}

export default Home;
