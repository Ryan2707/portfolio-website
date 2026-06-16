import { Link } from "react-router-dom";
import "./Home.css";
import picture from "../../assets/HomePage.jpg";

const Home = () => {
  return (
    <main className="home">
      <div className="home-grid">
        <div className="home-content">
          <p className="home-eyebrow">SOFTWARE DEVELOPMENT STUDENT</p>

          <h1 className="home-title">
            Ryan
            <br />
            <span className="home-title-accent">Kramer</span>
          </h1>

          <p className="home-subtitle">
            <span>&lt;</span> Software Developer <span>/&gt;</span>
          </p>

          <p className="home-desc">
            Hoi! Ik ben Ryan, een 17-jarige Software Development student aan het
            Techniek College Rotterdam.
            <br />
            <br />
            Mijn interesse in programmeren begon vanuit nieuwsgierigheid naar hoe
            games werken. Inmiddels bouw ik websites, mobiele apps en andere
            digitale projecten met technologieën zoals React, Next.js, Node.js,
            MongoDB en React Native.
            <br />
            <br />
            Ik leer het liefst door te bouwen, te experimenteren en nieuwe ideeën
            uit te proberen. Voor mij is programmeren niet alleen iets wat ik op
            school doe, maar ook een manier om mezelf uit te dagen en steeds iets
            nieuws te leren.
          </p>

          <div className="home-ctas">
            <Link to="/projects" className="btn btn-primary">
              Bekijk Projecten
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Neem Contact Op
            </Link>
          </div>

          <div className="home-stats">
            <div>
              <div className="home-stat-num">1 7</div>
              <div className="home-stat-label">Jaar oud</div>
            </div>

            <div>
              <div className="home-stat-num">2+</div>
              <div className="home-stat-label">Jaar ervaring</div>
            </div>

            <div>
              <div className="home-stat-num">NL</div>
              <div className="home-stat-label">Nederland</div>
            </div>
          </div>
        </div>

        <div className="home-image-wrap">
          <div className="home-image-ring">
            <img
              src={picture}
              alt="Ryan Kramer"
              className="home-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;