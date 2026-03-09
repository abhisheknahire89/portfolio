import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section, .metric-card, .project, .timeline-item');
    revealElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">AN.</div>
          <nav>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">

        {/* --- Hero Section --- */}
        <section id="hero" className="hero">
          <h1>Abhishek Nahire</h1>
          <h2>Product Manager | Founder | Healthcare AI Builder</h2>
          <p>
            Founder and Product Builder with 3+ years of experience building 0→1 products, leading user research, and executing go-to-market strategies.
          </p>
          <div className="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            Hyderabad, India
          </div>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#" className="btn btn-outline">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Contact</a>
          </div>
        </section>

        {/* --- Impact Metrics Section --- */}
        <section className="metrics">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">371+</div>
              <div className="metric-label">Patient Consultations Processed</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">91%</div>
              <div className="metric-label">Diagnostic Accuracy Achieved</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100+</div>
              <div className="metric-label">Doctor Interviews Conducted</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">60-90m</div>
              <div className="metric-label">Documentation Time Saved Per Doctor</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">₹1L</div>
              <div className="metric-label">Grant from IIT Hyderabad iTIC Incubator</div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="projects">
          <h2 className="section-title font-display">Featured Projects</h2>

          <div className="project">
            <div className="project-header">
              <h3 className="project-title font-display">Aivana Health Intelligence</h3>
              <p className="project-subtitle">India's first multilingual AI clinical documentation platform designed to automate clinical documentation for doctors.</p>
            </div>
            <div className="project-details">
              <div>
                <div className="project-block">
                  <h4>Problem</h4>
                  <p>Doctors spend significant time writing SOAP notes and prescriptions, reducing time for patient care.</p>
                </div>
                <div className="project-block">
                  <h4>Research</h4>
                  <p>Conducted over 100 interviews with doctors and hospital administrators to understand documentation workflows and pain points.</p>
                </div>
                <div className="project-block">
                  <h4>Solution</h4>
                  <p>Built an AI system that listens to consultations and generates: SOAP notes, prescriptions, structured medical records.</p>
                </div>
              </div>
              <div className="project-sidebar">
                <div className="project-block">
                  <h4>Impact</h4>
                  <ul>
                    <li>371 patient consultations processed</li>
                    <li>91% diagnostic accuracy</li>
                    <li>Hospital pilot deployments</li>
                    <li>60–90 minutes saved daily per doctor</li>
                  </ul>
                </div>
                <div className="project-block">
                  <h4>Products</h4>
                  <ul>
                    <li>VEDA — patient-facing health intelligence platform</li>
                    <li>Aivana OPD — ambient AI clinical documentation system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-header">
              <h3 className="project-title font-display">Gamified Diagnosis Platform</h3>
              <p className="project-subtitle">AI-powered platform for medical students and doctors to practice differential diagnosis through simulated clinical cases.</p>
            </div>
            <div className="project-details">
              <div>
                <div className="project-block">
                  <h4>Impact</h4>
                  <ul>
                    <li>₹1L grant from IIT Hyderabad iTIC Incubator</li>
                    <li>Winner of Tongali Startup Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="experience">
          <h2 className="section-title font-display">Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">Founder & CEO</div>
                <div className="timeline-date">Oct 2024 – Present</div>
              </div>
              <div className="timeline-subtitle">Aivana Health Intelligence | Hyderabad</div>
              <div className="timeline-content">
                <ul>
                  <li>Built multilingual AI clinical documentation platform</li>
                  <li>Conducted 100+ user research interviews</li>
                  <li>Led product roadmap and GTM strategy</li>
                  <li>Established hospital pilot partnerships</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">Product Manager Intern</div>
                <div className="timeline-date">May 2024 – Jul 2024</div>
              </div>
              <div className="timeline-subtitle">Zangoh</div>
              <div className="timeline-content">
                <ul>
                  <li>Conducted research with 200+ users</li>
                  <li>Increased engagement by 15%</li>
                  <li>Delivered 3 PRDs for engineering teams</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">Strategy Manager Intern</div>
                <div className="timeline-date">Dec 2023 – Jan 2024</div>
              </div>
              <div className="timeline-subtitle">Sarvodaya's Manjeera</div>
              <div className="timeline-content">
                <ul>
                  <li>Improved user engagement by 10%</li>
                  <li>Increased retention by 7%</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">Research Associate</div>
                <div className="timeline-date">Jul 2024 – Sep 2024</div>
              </div>
              <div className="timeline-subtitle">ONEINART</div>
              <div className="timeline-content">
                <ul>
                  <li>Conducted research on Indian traditional art forms</li>
                  <li>Produced articles and cultural insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="skills">
          <h2 className="section-title font-display">Skills & Tools</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Product & Strategy</h3>
              <div className="skill-list">
                <span className="skill-tag">Product Lifecycle Management</span>
                <span className="skill-tag">User Research</span>
                <span className="skill-tag">PRD Writing</span>
                <span className="skill-tag">Roadmap Planning</span>
                <span className="skill-tag">Agile Development</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Growth & GTM</h3>
              <div className="skill-list">
                <span className="skill-tag">Go-to-Market Strategy</span>
                <span className="skill-tag">Market Research</span>
                <span className="skill-tag">Pricing Strategy</span>
                <span className="skill-tag">Business Development</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-list">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Notion</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Linear</span>
                <span className="skill-tag">Google Analytics</span>
                <span className="skill-tag">Mixpanel</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Achievements Section --- */}
        <section id="achievements" className="achievements">
          <h2 className="section-title font-display">Achievements</h2>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>₹1,00,000 Grant Recipient</h4>
                <p>iTIC Incubator IIT Hyderabad</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🥇</div>
              <div className="achievement-content">
                <h4>1st Place</h4>
                <p>Tongali Startup Competition</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎖️</div>
              <div className="achievement-content">
                <h4>4th Place</h4>
                <p>Ideastorm IIT Roorkee</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎤</div>
              <div className="achievement-content">
                <h4>Speaker</h4>
                <p>Reen Conference IISc Bangalore</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🏏</div>
              <div className="achievement-content">
                <h4>Inter-IIT Athlete</h4>
                <p>Cricket</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Publications Section --- */}
        <section id="publications" className="publications">
          <h2 className="section-title font-display">Publications</h2>

          <div className="publication-card">
            <h3 className="publication-title font-display">Harnessing Generative AI as a Knowledge Companion in the Venture Creation Process</h3>
            <p className="publication-venue">European Conference on Innovation and Entrepreneurship (ECIE 2025)</p>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="contact-section">
          <h2 className="font-display">Let's Connect</h2>
          <p>If you're looking for a product professional who bridges the gap between technical complexity and user needs, I'd love to chat.</p>

          <div className="contact-links">
            <a href="mailto:abhisheknahire89@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              abhisheknahire89@gmail.com
            </a>
            <a href="tel:+918446163990" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +91 8446163990
            </a>
            <a href="#" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <div className="container">
          &copy; {new Date().getFullYear()} Abhishek Nahire. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
