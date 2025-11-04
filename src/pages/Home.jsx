import './Home.css'
import picture from '../assets/20251104_150236.jpg'
const Home = () => {
    return (
        <div>
        <section className="Left">
            <h1>Welcome to My Portfolio</h1>
        </section>

        <section className="Right">
        <img className="img" src={picture} alt="" />
        </section>
        </div>
    );
}

export default Home;
