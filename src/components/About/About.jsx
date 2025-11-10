import React from 'react';
import './About.css'; // We'll create this CSS file for styling

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">My Journey in Computer Science & Beyond</p>
      </header>

      <section className="about-intro">
        <p>
          I'm Raktim Adak, a highly motivated B.Sc. Computer Science graduate with a strong foundation in software development, database management, and object-oriented programming.
          My passion lies in crafting robust, scalable applications and contributing to innovative projects.
        </p>
        <p>
          Throughout my academic career, I've cultivated a deep understanding of various programming paradigms and technologies, always eager to learn and adapt to new challenges in the ever-evolving tech landscape.
        </p>
      </section>

      <section className="education-section">
        <h2>My Academic Journey</h2>
        <div className="timeline-item">
          <h3>Bachelor of Science (HONORS) - Computer Science</h3>
          <p className="institution">The University of Burdwan, Burdwan, India</p>
          <p className="duration">April 2021 - June 2024</p>
          <p className="detail">CGPA: 8.50</p>
        </div>
        <div className="timeline-item">
          <h3>Higher Secondary (Science)</h3>
          <p className="institution">Burdwan Town School, Burdwan, India</p>
          <p className="duration">2019 - 2021</p>
          <p className="detail">Percentage: 74%</p>
        </div>
        <div className="timeline-item">
          <h3>Secondary</h3>
          <p className="institution">Burdwan Town School, Burdwan, India</p>
          <p className="duration">2019</p>
          <p className="detail">Percentage: 76% </p>
        </div>
      </section>

      <section className="skills-section">
        <h2>Technical Skills & Expertise</h2>
        <div className="skills-category">
          <h3><i className="fas fa-terminal"></i> Languages</h3>
          <ul>
            <li>Java </li>
            <li>Kotlin </li>
            <li>JavaScript (JS) </li>
            <li>SQL </li>
            <li>Python </li> 
          </ul>
        </div>
        <div className="skills-category">
          <h3><i className="fas fa-mobile-alt"></i> Mobile Development</h3>
          <ul>
            <li>Android (Native) </li>
            <li>React Native </li>
            <li>Jetpack Compose </li>
            <li>Android XML </li>
          </ul>
        </div>
        <div className="skills-category">
          <h3><i className="fas fa-code-branch"></i> Web Framework & Tools</h3>
          <ul>
            <li>Spring Boot (Java) </li>
            <li>HTML </li>
            <li>CSS </li>
            <li>API Calls </li>
          </ul>
        </div>
        <div className="skills-category">
          <h3><i className="fas fa-database"></i> Database</h3>
          <ul>
            <li>MySQL </li>
            <li>SQLite </li>
          </ul>
        </div>
        <div className="skills-category">
          <h3><i className="fas fa-tools"></i> Platforms & IDEs</h3>
          <ul>
            <li>Visual Studio Code </li>
            <li>Android Studio </li>
            <li>IntelliJ IDEA </li>
            <li>Git </li>
            <li>Postman </li>
          </ul>
        </div>
      </section>

      <section className="projects-section">
        <h2>Showcase Projects</h2>
        <div className="project-card">
          <h3>Keep Notes</h3>
          <p className="project-description">A web application used to create, store, edit, and delete notes.</p>
          <p className="project-tech"><strong>Technology used:</strong> Java, Spring Boot, MySQL, HTML </p>
          <a href="https://github.com/Raktim2003-ui/KeepNoteDemo" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub <i className="fas fa-external-link-alt"></i>
          </a>
        </div>

        <div className="project-card">
          <h3>Camera App</h3>
          <p className="project-description">A mobile application used for image capture and video recording.</p>
          <p className="project-tech"><strong>Technology used:</strong> Jetpack Compose, Kotlin, Android Studio </p>
          <a href="https://github.com/Raktim2003-ui/Demo_CAMERA_app" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub <i className="fas fa-external-link-alt"></i>
          </a>
        </div>

        <div className="project-card">
          <h3>Hyge</h3>
          <p className="project-description">A health-related mobile application.</p>
          <p className="project-tech"><strong>Technology used:</strong> Android XML, Java </p>
          {/* No GitHub link provided in resume, so none here */}
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p className="project-description">A web application that displays temperature, humidity, and wind speed based on user's location input.</p>
          <p className="project-tech"><strong>Technology used:</strong> JavaScript, HTML, CSS, API call </p>
          <a href="https://github.com/Raktim2003-ui/WeatherAppDemo" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </section>

      <section className="career-goals-section">
        <h2>My Career Aspirations</h2>
        <p>
          As a passionate B.Sc. Computer Science graduate, I am actively seeking challenging opportunities in software development. I am eager to apply my strong foundation in programming and problem-solving to contribute to innovative projects and grow as a developer. My goal is to build robust, scalable applications and make a meaningful impact in the tech industry.
        </p>
      </section>

      <footer className="about-footer">
        <p>Interested in my work or want to collaborate?</p>
        <a href="/contact" className="contact-cta-button">Let's Connect!</a>
      </footer>
    </div>
  );
}

export default About;