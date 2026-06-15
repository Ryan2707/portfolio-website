import "./AboutMe.css";

const frontendSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Auth.js",
  "REST APIs",
];

const mobileSkills = ["React Native"];

const gameSkills = ["Unity", "C#", "Godot", "GDScript"];

const toolSkills = ["Git", "GitHub", "VS Code", "Figma", "MongoDB Atlas"];

const AboutMe = () => {
  return (
    <main className="about">
      <header className="about-header">
        <span className="section-label">// about me</span>
        <h1>
          Who <span>I Am</span>
        </h1>
      </header>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            Hey! I'm <strong>Ryan</strong>, a 17-year-old Software Development
            student from the Netherlands with nearly three years of programming
            experience.
          </p>

          <p>
            My main focus is{" "}
            <span className="about-highlight">full-stack development</span>. I
            build modern web applications using React, Next.js, Node.js,
            Express.js, MongoDB, and Auth.js while creating experiences that are
            both functional and enjoyable to use.
          </p>

          <p>
            Besides web development, I also work with{" "}
            <span className="about-highlight">mobile and game development</span>
            . I build mobile applications using React Native and create games
            using Unity, C#, Godot, and GDScript.
          </p>

          <p>
            What I enjoy most about programming is solving problems, learning
            new technologies, and turning ideas into real projects. I'm always
            looking for opportunities to improve my skills and gain hands-on
            experience.
          </p>

          <blockquote className="about-quote">
            "The best way to learn is by building."
          </blockquote>

          <div className="about-focus">
            <h3>Current Focus</h3>

            <ul className="interest-list">
              <li>TypeScript</li>
              <li>PostgreSQL</li>
              <li>Prisma ORM</li>
              <li>Full-stack architecture</li>
              <li>Authentication & security</li>
            </ul>
          </div>
        </div>

        <aside className="developer-card">
          <h2>Tech Stack</h2>

          <div className="dev-profile">
            <p>
              <strong>17 y/o developer</strong>
            </p>

            <p>Based in the Netherlands 🇳🇱</p>

            <p>Software Development Student</p>

            <p>Building web, mobile & game projects</p>
          </div>

          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-tags">
              {frontendSkills.map((skill) => (
                <span key={skill} className="skill-tag frontend">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-tags">
              {backendSkills.map((skill) => (
                <span key={skill} className="skill-tag backend">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Mobile</h3>
            <div className="skill-tags">
              {mobileSkills.map((skill) => (
                <span key={skill} className="skill-tag mobile">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Game Development</h3>
            <div className="skill-tags">
              {gameSkills.map((skill) => (
                <span key={skill} className="skill-tag game">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools</h3>
            <div className="skill-tags">
              {toolSkills.map((skill) => (
                <span key={skill} className="skill-tag tool">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default AboutMe;
