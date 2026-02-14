import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">SHV</a>
          <div className="navbar-menu">
            <a href="#about" className="navbar-link">About</a>
            <a href="#skills" className="navbar-link">Skills</a>
            <a href="#experience" className="navbar-link">Experience</a>
            <a href="#projects" className="navbar-link">Projects</a>
            <a href="#education" className="navbar-link">Education</a>
            <a href="#contact" className="navbar-link">Contact</a>
            <a href="/Resume_SudarshanHV.pdf" download className="navbar-btn">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello There! You've come searching for *drumrolls*</p>
          <h1 className="hero-name">Sudarshan H V</h1>
          <h2 className="hero-title">Software Developer | SDE-2 at SkyHigh Security</h2>
          <p className="hero-description">
            I build scalable software solutions with expertise in systems programming,
            infrastructure optimization, and full-stack development. Currently working on
            ARM-based processor porting and on SkyHigh Client Proxy.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="/Resume_SudarshanHV.pdf" download className="btn btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a <span className="highlight">Software Developer (SDE-2)</span> currently working at
            SkyHigh Security, where I'm engineering the porting of the Client Proxy to ARM-based processors,
            potentially leading to $2 million in ARR.
          </p>
          <p>
            Previously at MathWorks, I improved coverage collection time by <span className="highlight">50%</span> using
            worker thread pools in Golang and multithreading in C++, while reducing infrastructure failures by
            <span className="highlight"> 20%</span> through the application of design patterns.
          </p>
          <p>
            I graduated from <span className="highlight">IIT Tirupati</span> in 2022 with a B.Tech in Electrical
            Engineering, achieving a 9.07 CGPA. Beyond coding, I was the Head of the IIT Tirupati Debate Club,
            leading the team to victories against international universities.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Golang</span>
              <span className="skill-tag">Perl</span>
              <span className="skill-tag">MATLAB</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Systems & Infrastructure</h3>
            <div className="skill-tags">
              <span className="skill-tag">ARM Processors</span>
              <span className="skill-tag">Multithreading</span>
              <span className="skill-tag">Concurrency</span>
              <span className="skill-tag">TCP/IP</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">gRPC</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">DevOps & Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">SonarQube</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Maven</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Methodologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Agile</span>
              <span className="skill-tag">SDLC</span>
              <span className="skill-tag">TDD</span>
              <span className="skill-tag">OOD</span>
              <span className="skill-tag">Design Patterns</span>
              <span className="skill-tag">SOLID Principles</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Debugging & Analysis</h3>
            <div className="skill-tags">
              <span className="skill-tag">GDB</span>
              <span className="skill-tag">Wireshark</span>
              <span className="skill-tag">Profiling</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Security & Networking</h3>
            <div className="skill-tags">
              <span className="skill-tag">ZTNA</span>
              <span className="skill-tag">Client Proxy</span>
              <span className="skill-tag">HTTPS</span>
              <span className="skill-tag">Network Protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience section" id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {/* SkyHigh Security */}
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">Software Developer (SDE-2)</h3>
              <p className="experience-company">SkyHigh Security</p>
              <p className="experience-period">September 2025 - Present</p>
            </div>
            <div className="experience-skills">
              <span className="experience-skill">C++</span>
              <span className="experience-skill">ARM Processors</span>
              <span className="experience-skill">Client Proxy</span>
              <span className="experience-skill">ZTNA</span>
            </div>
            <ul className="experience-description">
              <li>
                Engineering the porting of SkyHigh Client Proxy to ARM-based processors, ensuring
                continued product compatibility and protecting 2 million USD in ARR
              </li>
            </ul>
          </div>

          {/* MathWorks - Senior Associate */}
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">Senior Associate Software Developer (SDE-2)</h3>
              <p className="experience-company">MathWorks</p>
              <p className="experience-period">January 2025 - September 2025</p>
            </div>
            <div className="experience-skills">
              <span className="experience-skill">Java</span>
              <span className="experience-skill">Golang</span>
              <span className="experience-skill">C++</span>
              <span className="experience-skill">Multithreading</span>
              <span className="experience-skill">Concurrency</span>
            </div>
            <ul className="experience-description">
              <li>
                Improved coverage collection time by 50% using a worker thread pool (Golang) and
                multithreading (C++)
              </li>
              <li>
                Applied design patterns (Singleton, Factory, Observer) to enhance coverage workflows,
                reducing infrastructure failures by 20%
              </li>
              <li>
                Led Agile collaboration across US and UK teams to align goals and timelines
              </li>
              <li>
                Onboarded 30+ hardware devices (Bluetooth, BLE, STM32, TIC2000) across 10 teams into
                scheduling infrastructure, boosting test scalability
              </li>
              <li>
                Leveraged Java collections, C++ STL classes, and templates to enable multiport operations
                in Windows and Linux environments, improving port usage efficiency by 30%
              </li>
            </ul>
          </div>

          {/* MathWorks - Associate */}
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">Associate Software Developer (SDE-1)</h3>
              <p className="experience-company">MathWorks</p>
              <p className="experience-period">April 2023 - December 2024</p>
            </div>
            <div className="experience-skills">
              <span className="experience-skill">Java</span>
              <span className="experience-skill">MATLAB</span>
              <span className="experience-skill">REST APIs</span>
              <span className="experience-skill">Perl</span>
              <span className="experience-skill">Golang</span>
              <span className="experience-skill">gRPC</span>
            </div>
            <ul className="experience-description">
              <li>
                Developed automatic leasing mechanism for USB, Ethernet, and Bluetooth hardware over
                network for 15+ teams using USB-over-TCP/IP technologies
              </li>
              <li>
                Spearheaded complete SDLC for network hardware resource leasing, reducing dropped tests
                by 30% for 15 hardware teams
              </li>
              <li>
                Architected gRPC-based Perl to Golang solution to move 20% of test selection code and
                improve API communication times by 50%
              </li>
              <li>
                Engineered automated test selection processes across 200,000+ tests, reducing testing
                times by 25%
              </li>
            </ul>
          </div>

          {/* MathWorks - EDG */}
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">Associate in Engineering Development Group (EDG)</h3>
              <p className="experience-company">MathWorks</p>
              <p className="experience-period">August 2022 - March 2023</p>
            </div>
            <div className="experience-skills">
              <span className="experience-skill">C++</span>
              <span className="experience-skill">Docker</span>
              <span className="experience-skill">GitHub Actions</span>
              <span className="experience-skill">SonarQube</span>
              <span className="experience-skill">GDB</span>
            </div>
            <ul className="experience-description">
              <li>
                Eliminated 800 compiler warnings and refactored Simulink Mask C++ codebase using OOD
                and SOLID principles based on C++11+ standards
              </li>
              <li>
                Resolved complex technical inquiries from 5+ clients monthly regarding MathWorks products,
                achieving a 5-star satisfaction rating
              </li>
              <li>
                Containerized a MEAN application with 3000+ active users, standardizing DevOps workflows
              </li>
              <li>
                Developed SonarQube and GitHub Actions pipeline to capture C++ coverage with 75% threshold
                for line coverage
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">IRS Assisted Interference Management for 6G Networks</h3>
            <p className="project-description">
              Designed 3-channel models for distributed IRS systems with potential for interference cancellation.
              Analyzed models for 2-user Gaussian interference channel in 6G wireless networks.
            </p>
            <div className="experience-skills">
              <span className="experience-skill">Wireless Networks</span>
              <span className="experience-skill">6G</span>
              <span className="experience-skill">Signal Processing</span>
            </div>
          </div>

          <div className="project-card">
            <h3 className="project-title">gRPC-based Microservices Migration</h3>
            <p className="project-description">
              Architected and implemented a gRPC-based solution to migrate 20% of test selection code from Perl
              to Golang, improving API communication times by 50% and enhancing system scalability.
            </p>
            <div className="experience-skills">
              <span className="experience-skill">gRPC</span>
              <span className="experience-skill">Golang</span>
              <span className="experience-skill">Microservices</span>
              <span className="experience-skill">Protobuf</span>
            </div>
          </div>

          <div className="project-card">
            <h3 className="project-title">Hardware Resource Leasing Infrastructure</h3>
            <p className="project-description">
              Developed end-to-end automatic leasing mechanism for network hardware resources (USB, Ethernet,
              Bluetooth) using VirtualHere and myUTN, serving 15+ teams and reducing dropped tests by 30%.
            </p>
            <div className="experience-skills">
              <span className="experience-skill">Java</span>
              <span className="experience-skill">TCP/IP</span>
              <span className="experience-skill">REST APIs</span>
              <span className="experience-skill">SDLC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-image-container">
            <img
              src="/college-image.png"
              alt="IIT Tirupati Campus"
              className="education-image"
            />
          </div>
          <div className="education-content">
            <h3 className="education-degree">B.Tech in Electrical Engineering</h3>
            <p className="education-school">IIT (Indian Institute of Technology) Tirupati</p>
            <p className="education-details">Graduated in 2022 • CGPA: 9.07/10.0</p>
            <p className="education-description">
              Specialized in electrical engineering with a focus on signal processing and wireless communications.
              Completed research on IRS-assisted interference management for next-generation 6G networks.
            </p>

            <div className="education-courses">
              <h4>Relevant Coursework:</h4>
              <p className="courses-list">
                Data Structures & Algorithms, Computer Networking, Operating Systems,
                Machine Learning (Stanford Online)
              </p>
            </div>

            <div className="education-courses">
              <h4>Leadership:</h4>
              <p className="courses-list">
                Head of IIT Tirupati Debate Club • Led the team to victories against international
                universities and other IITs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm currently open to new opportunities and interesting projects. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-links">
            <a
              href="mailto:sudarshanhv99@gmail.com"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Email
            </a>
            <a
              href="https://linkedin.com/in/sudarshanhv"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/SudarshanHV"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
          </div>
          <a href="/Resume_SudarshanHV.pdf" download className="btn btn-primary">
            📥 Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
