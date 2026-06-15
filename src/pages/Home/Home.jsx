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
            Software Development student from the Netherlands building modern
            web and mobile applications with React, Next.js, Node.js, MongoDB,
            and React Native. Passionate about creating user-focused experiences
            and continuously learning new technologies.
          </p>

          <div className="home-ctas">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>

          <div className="home-stats">
            <div>
              <div className="home-stat-num">17</div>
              <div className="home-stat-label">Years old</div>
            </div>
            <div>
              <div className="home-stat-num">Full-Stack</div>
              <div className="home-stat-label">Development</div>
            </div>
            <div>
              <div className="home-stat-num">NL</div>
              <div className="home-stat-label">Based in</div>
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
