import "./AboutMe.css";

const frontendSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Design",
  "React Router",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "Auth.js",
  "JWT",
  "REST APIs",
  "CRUD Operations",
  "Role-Based Access",
  "Middleware",
];

const databaseSkills = [
  "MongoDB",
  "MongoDB Atlas",
  "Mongoose",
];

const mobileSkills = [
  "React Native",
  "Expo",
  "Navigation",
  "AsyncStorage",
];

const gameSkills = [
  "Unity",
  "C#",
  "Godot",
  "GDScript",
];

const toolSkills = [
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "Postman",
];

const learningSkills = [
  "TypeScript",
  "PostgreSQL",
  "Prisma ORM",
];

const AboutMe = () => {
  return (
    <main className="about">
      <header className="about-header">
        <span className="section-label">// over mij</span>

        <h1>
          Wie <span>Ik Ben</span>
        </h1>
      </header>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            Hoi! Ik ben <strong>Ryan</strong>, een 17-jarige Software
            Development student aan het Techniek College Rotterdam.
          </p>

          <p>
            Mijn interesse in programmeren begon doordat ik nieuwsgierig was
            naar hoe games eigenlijk werken. Wat begon als interesse groeide al
            snel uit tot een hobby waarbij ik niet alleen wilde begrijpen hoe
            software werkt, maar het ook zelf wilde bouwen.
          </p>

          <p>
            Ik leer het liefst door dingen uit te proberen. In plaats van alleen
            theorie te lezen, start ik graag een project om nieuwe technieken te
            ontdekken en te zien wat er mogelijk is. Voor mij is programmeren
            een combinatie van creativiteit, probleemoplossing en continu
            blijven leren.
          </p>

          <p>
            Tijdens mijn opleiding ligt de focus vooral op frontend
            development, maar inmiddels bouw ik ook backend systemen, mobiele
            applicaties met React Native en experimenteer ik met game
            development. Ik vind het leuk om ideeën om te zetten naar iets dat
            daadwerkelijk werkt en gebruikt kan worden.
          </p>

          <p>
            Buiten programmeren besteed ik mijn tijd aan gamen, basketball,
            sporten en tijd doorbrengen met vrienden. Die afwisseling zorgt
            ervoor dat ik altijd met frisse energie aan nieuwe projecten kan
            werken.
          </p>

          <blockquote className="about-quote">
            "De beste manier om te leren is door te bouwen."
          </blockquote>

          <div className="about-focus">
            <h3>Huidige Focus</h3>

            <ul className="interest-list">
              <li>TypeScript</li>
              <li>PostgreSQL</li>
              <li>Prisma ORM</li>
              <li>Software Architectuur</li>
              <li>Authenticatie & Beveiliging</li>
            </ul>
          </div>
        </div>

        <aside className="developer-card">
          <h2>Tech Stack</h2>

          <div className="dev-profile">
            <p>
              <strong>17-jarige Software Developer</strong>
            </p>

            <p>📍 Nederland</p>

            <p>🎓 Techniek College Rotterdam</p>

            <p>💻 Software Development Student</p>

            <p>🌐 Webapplicaties</p>

            <p>📱 Mobiele Apps</p>

            <p>🎮 Games & Prototypes</p>
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
            <h3>Databases</h3>

            <div className="skill-tags">
              {databaseSkills.map((skill) => (
                <span key={skill} className="skill-tag database">
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

          <div className="skill-group">
            <h3>Momenteel aan het leren</h3>

            <div className="skill-tags">
              {learningSkills.map((skill) => (
                <span key={skill} className="skill-tag learning">
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