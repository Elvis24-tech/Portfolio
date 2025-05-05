import './index.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Kariuki Elvis</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Welcome to My Portfolio</h2>
          <p>I'm Kariuki Elvis Muasya, a passionate developer creating innovative solutions.</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
        I'm a skilled software developer with a deep passion for crafting dynamic and user-centric web applications. Specializing in React and modern JavaScript frameworks, I thrive on transforming ideas into seamless digital experiences. My journey in tech is driven by a commitment to continuous learning, problem-solving, and innovation. From building intuitive e-commerce platforms to designing robust APIs, I bring precision and creativity to every project. I’m excited to collaborate on impactful solutions that push the boundaries of what's possible in web development.
        </p>
      </section>

      <section id="projects" className="section dark">
        <h2>Projects</h2>
        <p>
          Explore some of my recent works, including web applications, APIs, and open-source contributions. Each project reflects my commitment to quality and innovation.I have shared my GitHub link where you can be able to check all the work that i have done along my journey.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to reach out for collaboration or inquiries. Email me at kariukielvis140@gmail.com or contact me through 0776222127.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Kariuki Elvis Muasya. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;