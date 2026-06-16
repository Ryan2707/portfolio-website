import "./contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <header className="contact-header">
        <span className="section-label">// contact</span>

        <h1>
          Neem <span>Contact Op</span>
        </h1>

        <p>
          Heb je een vraag, een idee voor een project of wil je gewoon contact
          opnemen? Stuur gerust een bericht. Ik sta altijd open voor nieuwe
          ervaringen, interessante gesprekken en kansen om mezelf verder te
          ontwikkelen als developer.
        </p>
      </header>

      <section className="contact-card">
        <div className="contact-profile">
          <h2>Ryan Kramer</h2>

          <p>Software Development Student</p>
          <p>Techniek College Rotterdam</p>
          <p>Web, Mobile & Game Development</p>

          <div className="status-badge">
            ● Open voor nieuwe kansen
          </div>
        </div>

        <div className="contact-section">
          <h3>Contactgegevens</h3>

          <a
            href="mailto:Ryan270708@gmail.com"
            className="contact-link"
          >
            <span>E-mail</span>
            <strong>Ryan270708@gmail.com</strong>
          </a>

          <a
            href="tel:+31611246100"
            className="contact-link"
          >
            <span>Telefoon</span>
            <strong>+31 6 11246100</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/ryan-kramer-81953b3b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>LinkedIn</span>
            <strong>Profiel bekijken ↗</strong>
          </a>

          <a
            href="https://github.com/Ryan2707"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>GitHub</span>
            <strong>github.com/Ryan2707 ↗</strong>
          </a>
        </div>

        <div className="contact-section">
          <h3>Waar ik momenteel mee bezig ben</h3>

          <p className="focus-text">
            Op dit moment verdiep ik mij verder in TypeScript, PostgreSQL en
            Prisma. Daarnaast blijf ik werken aan webapplicaties, mobiele apps
            met React Native en andere projecten waarmee ik mijn vaardigheden
            als developer verder kan uitbreiden.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;