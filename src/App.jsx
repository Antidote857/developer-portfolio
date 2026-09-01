import './App.css'

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#home" className="logo">
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

      
      {/* Hero */}
<section id="home">
  <div className="hero-content">
    <p className="hero-label">HELLO, I'M</p>

    <h1>Bhekinkosi Mguni</h1>

    <h2>IT Graduate & Aspiring Software Developer</h2>

    <p className="hero-description">
      I build practical software, explore AI-powered applications,
      and solve problems through code.
    </p>

    <div className="hero-status">
      <span className="status-dot"></span>
      <span>Open to Software Development Opportunities</span>
    </div>

    <div className="hero-buttons">
  <a href="#projects" className="primary-button">
    View My Projects
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
    <h2>Building, Learning, Solving.</h2>
  </div>

  <div className="about-content">
    <div className="about-main">
      <p>
        I'm a recent Information Technology graduate with a strong interest
        in software development and practical problem solving.
      </p>

      <p>
        I enjoy taking ideas from concept to working software, investigating
        bugs, learning new technologies, and understanding how different
        parts of a system work together.
      </p>

      <p>
        My current development work includes REALM, an AI-powered community
        platform, as well as web development projects such as
        Bridge-to-Learning.
      </p>

      <p>
        I'm looking for opportunities where I can contribute to real-world
        software, learn from experienced developers, and continue growing
        as a software developer.
      </p>
    </div>

    <div className="about-highlights">
      <div className="highlight">
        <span className="highlight-number">01</span>
        <div>
          <h3>Software Development</h3>
          <p>
            Building applications and features using modern development tools
            and frameworks.
          </p>
        </div>
      </div>

      <div className="highlight">
        <span className="highlight-number">02</span>
        <div>
          <h3>Problem Solving</h3>
          <p>
            Debugging issues, investigating problems, and finding practical
            solutions.
          </p>
        </div>
      </div>

      <div className="highlight">
        <span className="highlight-number">03</span>
        <div>
          <h3>Continuous Learning</h3>
          <p>
            Constantly improving my technical skills through projects and
            hands-on development.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Skills */}
<section id="skills">
  <div className="section-heading">
    <p>TECHNICAL SKILLS</p>
    <h2>Tools I Work With.</h2>
  </div>

  <div className="skills-grid">

    <div className="skill-category">
      <span className="skill-number">01</span>

      <h3>Languages</h3>

      <div className="skill-list">
        <span>Java</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div className="skill-category">
      <span className="skill-number">02</span>

      <h3>Development</h3>

      <div className="skill-list">
        <span>React</span>
        <span>Vite</span>
        <span>Node.js</span>
        <span>REST APIs</span>
        <span>Databases</span>
      </div>
    </div>

    <div className="skill-category">
      <span className="skill-number">03</span>

      <h3>Tools</h3>

      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
        <span>IntelliJ IDEA</span>
        <span>NetBeans</span>
        <span>PyCharm</span>
        <span>npm</span>
      </div>
    </div>

    <div className="skill-category">
      <span className="skill-number">04</span>

      <h3>Core Strengths</h3>

      <div className="skill-list">
        <span>Debugging</span>
        <span>Problem Solving</span>
        <span>System Analysis</span>
        <span>Troubleshooting</span>
        <span>Clean Code</span>
        <span>Continuous Learning</span>
      </div>
    </div>

  </div>
</section>

      {/* Projects */}
<section id="projects">
  <div className="section-heading">
    <p>MY WORK</p>
    <h2>Featured Projects.</h2>
  </div>

  <div className="projects-grid">

    {/* REALM */}
    <article className="project-card featured-project">
      <div className="project-header">
        <span className="project-number">01</span>
        <span className="project-status">ACTIVE DEVELOPMENT</span>
      </div>

      <div className="project-content">
        <p className="project-type">AI / WEB APPLICATION</p>

        <h3>REALM</h3>

        <p className="project-description">
          An AI-powered community platform exploring how artificial
          intelligence can make online communities smarter while giving
          creators opportunities to build businesses around their
          communities.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>Vite</span>
          <span>AI</span>
          <span>REST APIs</span>
          <span>Git</span>
        </div>

        <div className="project-links">
          <a
            href="https://github.com/Antidote857/REALM"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </article>

    {/* Bridge-to-Learning */}
    <article className="project-card">
      <div className="project-header">
        <span className="project-number">02</span>
        <span className="project-status">COMPLETED</span>
      </div>

      <div className="project-content">
        <p className="project-type">WEB DEVELOPMENT</p>

        <h3>Bridge-to-Learning</h3>

        <p className="project-description">
          A responsive educational consulting website designed to present
          information clearly and provide a professional online presence
          for an education-focused organisation.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Responsive Design</span>
        </div>

        <div className="project-links">
          <a
            href="https://github.com/Antidote857/bridge-to-learning"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </article>

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
        I'm currently looking for opportunities to grow as a software
        developer, contribute to real-world projects, and learn from
        experienced development teams.
      </p>

      <p>
        If you're interested in my work or would like to discuss an
        opportunity, feel free to get in touch.
      </p>
    </div>

    <div className="contact-links">
      <a
        href="https://github.com/Antidote857"
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
        <span>→</span>
      </a>

      <a
  href="mailto:mgunibhekinkosi5@gmail.com"
>
  <span>mgunibhekinkosi5@gmail.com</span>
  <span>→</span>
</a>

      <a
  href="https://www.linkedin.com/in/bhekinkosi-mguni-a336073b4"
  target="_blank"
  rel="noreferrer"
>
  <span>LinkedIn</span>
  <span>→</span>
</a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Bhekinkosi Mguni</p>
      </footer>
    </>
  )
}

export default App