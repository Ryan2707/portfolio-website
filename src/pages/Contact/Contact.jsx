import './contact.css';

const Contact = () => {
  return (
    <main className="contact">
      <header className="contact-header">
        <span className="section-label">// get in touch</span>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <p>
          Interested in working together, discussing a project, or simply
          connecting? Feel free to reach out through any of the channels below.
          I'm always open to opportunities, collaborations, and conversations
          about technology.
        </p>
      </header>

      <section className="contact-card">
        <div className="contact-profile">
          <h2>Ryan Kramer</h2>

          <p>17 y/o Developer</p>
          <p>Based in the Netherlands 🇳🇱</p>
          <p>Software Development Student</p>

          <div className="status-badge">
            ● Open to Opportunities
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact</h3>

          <a
            href="mailto:Ryan270708@gmail.com"
            className="contact-link"
          >
            <span>Email</span>
            <strong>Ryan270708@gmail.com</strong>
          </a>

          <a
            href="tel:+31611246100"
            className="contact-link"
          >
            <span>Phone</span>
            <strong>+31 6 11246100</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/ryan-kramer-81953b3b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>LinkedIn</span>
            <strong>View Profile ↗</strong>
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
          <h3>Current Focus</h3>

          <p className="focus-text">
            Currently expanding my knowledge of TypeScript, PostgreSQL, and
            Prisma while exploring more scalable approaches to full-stack
            application development.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;