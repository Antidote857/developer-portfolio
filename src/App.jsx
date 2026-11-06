import './App.css'

const projects = [
  {
    number: '01',
    status: 'COMPLETED',
    type: 'BACKEND DEVELOPMENT',
    name: 'StockFlow',
    description:
      'An inventory management REST API built to manage products, track stock movements and monitor inventory levels. Includes product CRUD operations, stock validation, database migrations and automated integration tests.',
    technologies: ['C#', '.NET 10', 'ASP.NET Core', 'EF Core', 'SQL Server', 'xUnit'],
    github: 'https://github.com/Antidote857/StockFlow',
    featured: true,
  },
  {
    number: '02',
    status: 'ACTIVE DEVELOPMENT',
    type: 'FULL-STACK / WEB APPLICATION',
    name: 'REALM',
    description:
      'A community platform exploring how online communities can become more engaging and useful for creators. Developed using a modern JavaScript-based web stack.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'SQLite', 'REST APIs'],
    github: 'https://github.com/Antidote857/REALM',
  },
  {
    number: '03',
    status: 'COMPLETED',
    type: 'JAVA APPLICATION',
    name: 'Smart Queue Manager',
    description:
      'A Java console application for managing customer queues. Supports normal and priority queues, serving customers, searching, removing waiting customers and viewing queue statistics.',
    technologies: ['Java 21', 'OOP', 'Collections', 'Git', 'GitHub'],
    github: 'https://github.com/Antidote857/smart-queue-manager',
  },
  {
    number: '04',
    status: 'COMPLETED',
    type: 'JAVA / SEARCH APPLICATION',
    name: 'Spy-der',
    description:
      'A mini search engine project focused on searching and retrieving information from a collection of documents.',
    technologies: ['Java', 'Search', 'Problem Solving', 'Git', 'GitHub'],
    github: 'https://github.com/Antidote857/mini-search-engine',
  },
  {
    number: '05',
    status: 'COMPLETED',
    type: 'WEB DEVELOPMENT',
    name: 'Bridge-to-Learning',
    description:
      'A responsive website for an education-focused organisation, designed to communicate its services and provide visitors with a clear way to request consultations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Antidote857/bridge-to-learning',
  },
]

const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    skills: ['C#', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Frameworks & Development',
    skills: ['.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'React', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Databases & Tools',
    skills: ['SQL Server', 'PostgreSQL', 'SQLite', 'Git', 'GitHub', 'Visual Studio Code', 'IntelliJ IDEA', 'Maven'],
  },
  {
    number: '04',
    title: 'Technical Practices',
    skills: ['Object-Oriented Programming', 'CRUD Operations', 'Debugging', 'API Testing', 'xUnit', 'System Analysis', 'Problem Solving'],
  },
]

function App() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="Bhekinkosi Mguni home">
            BM
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="home">
          <div className="hero-content">
            <p className="hero-label">HELLO, I'M</p>

            <h1>Bhekinkosi Mguni</h1>

            <h2>IT Graduate & Junior Software Developer</h2>

            <p className="hero-description">
              I am a Bachelor of Information Technology in Business Systems
              graduate interested in building practical software, developing
              backend applications and solving real-world problems through
              technology.
            </p>

            <div className="hero-status">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Open to Graduate and Junior IT Opportunities</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>

              <a
                href="/BHEKINKOSI%20MGUNI%20-%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                View CV
              </a>

              <a
                href="https://github.com/Antidote857"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Business Systems. Technology. Development.</h2>
          </div>

          <div className="about-content">
            <div className="about-main">
              <p>
                I am a recent Bachelor of Information Technology in Business
                Systems graduate from Rosebank International University
                College. My academic background has given me an understanding
                of how technology supports business processes and
                organisational needs.
              </p>

              <p>
                I have developed practical software projects using C#, .NET,
                ASP.NET Core, Java, JavaScript and relational databases. I
                particularly enjoy backend development, working with APIs,
                database integration, debugging and testing.
              </p>

              <p>
                My projects include StockFlow, an inventory management REST
                API, as well as Java applications and web-based projects.
                Through these projects, I continue to strengthen my
                development skills and learn how to build reliable
                applications.
              </p>

              <p>
                I am looking for an opportunity to contribute, learn from
                experienced teams and grow as a software developer.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">01</span>
                <div>
                  <h3>Backend Development</h3>
                  <p>
                    Building REST APIs, implementing application logic and
                    integrating relational databases.
                  </p>
                </div>
              </div>

              <div className="highlight">
                <span className="highlight-number">02</span>
                <div>
                  <h3>Business Systems</h3>
                  <p>
                    Understanding business requirements and how software
                    applications support business operations.
                  </p>
                </div>
              </div>

              <div className="highlight">
                <span className="highlight-number">03</span>
                <div>
                  <h3>Continuous Improvement</h3>
                  <p>
                    Learning through hands-on projects, testing, debugging
                    and solving technical problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="section-heading">
            <p>EDUCATION</p>
            <h2>Academic Background.</h2>
          </div>

          <div className="education-card">
            <div>
              <p className="project-type">2022 — 2026</p>
              <h3>Bachelor of Information Technology in Business Systems</h3>
              <p>Rosebank International University College</p>
            </div>
            <span className="education-level">NQF LEVEL 7</span>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="section-heading">
            <p>TECHNICAL SKILLS</p>
            <h2>Technologies & Tools.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-category" key={group.number}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="section-heading">
            <p>SELECTED WORK</p>
            <h2>Projects I've Built.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card${project.featured ? ' featured-project' : ''}`}
                key={project.number}
              >
                <div className="project-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      View on GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="section-heading">
            <p>CONTACT</p>
            <h2>Let's Build Something.</h2>
          </div>

          <div className="contact-content">
            <div className="contact-intro">
              <p>
                I am currently exploring graduate and junior opportunities in
                software development and IT. I am keen to contribute to
                meaningful projects, develop my technical skills and learn
                from experienced professionals.
              </p>

              <p>
                If you would like to discuss an opportunity or learn more
                about my work, feel free to get in touch.
              </p>
            </div>

            <div className="contact-links">
              <a
                href="mailto:mgunibhekinkosi5@gmail.com"
                aria-label="Email Bhekinkosi Mguni"
              >
                <span>Email</span>
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Antidote857"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>

              <a
                href="https://developer-portfolio-six-blush.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Portfolio</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Bhekinkosi Mguni. Built with React and Vite.</p>
      </footer>
    </>
  )
}

export default App