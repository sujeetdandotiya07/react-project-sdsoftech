import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="home">
        <div className="home-content">
          <p className="home-tag">WELCOME TO SDSOFTECH</p>

          <h1>
            Learn Skills.
            <br />
            Build Projects.
            <br />
            <span>Get Job Ready.</span>
          </h1>

          <p className="home-description">
            Learn Full Stack Development, Python and Data Analytics with
            practical projects and industry-focused training.
          </p>

          <div className="home-buttons">
            <Link to="/courses" className="btn-primary">
              Explore Courses
            </Link>

            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="home-image">
          <div className="code-card">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span>const</span> future = "Developer";
              </p>
              <p>
                <span>function</span> learnSkills() {"{"}
              </p>
              <p className="code-indent">buildProjects();</p>
              <p className="code-indent">getJobReady();</p>
              <p>{"}"}</p>
              <h2> &lt;Code. Learn. Grow. /&gt; </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h2>500+</h2>
            <p>Students Trained</p>
          </div>
          <div className="stat-item">
            <h2>10+</h2>
            <p>Courses Offered</p>
          </div>
          <div className="stat-item">
            <h2>95%</h2>
            <p>Placement Rate</p>
          </div>
          <div className="stat-item">
            <h2>50+</h2>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <p className="why-us-tag">WHY CHOOSE US</p>
        <h2 className="why-us-heading">
          Why Students Love <span>SDSOFTECH</span>
        </h2>
        <div className="why-us-grid">
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <h3>Industry Curriculum</h3>
            <p>
              Our courses are designed based on current industry demands and
              hiring trends.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">👨‍🏫</div>
            <h3>Expert Mentors</h3>
            <p>
              Learn from experienced professionals with real-world industry
              experience.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">💼</div>
            <h3>Placement Support</h3>
            <p>
              Resume building, mock interviews, and direct connections with
              hiring companies.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🛠️</div>
            <h3>Hands-on Projects</h3>
            <p>
              Build real projects that you can showcase in your portfolio to
              employers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Tech Career?</h2>
        <p>
          Join SDSOFTECH today and transform your future with practical skills.
        </p>
        <div className="cta-buttons">
          <Link to="/courses" className="btn-primary">
            View All Courses
          </Link>
          <Link to="/contact" className="btn-secondary btn-secondary-light">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
