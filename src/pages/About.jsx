import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <p className="about-tag">ABOUT SDSOFTECH</p>

          <h1>
            We Help Students
            <br />
            Become <span>Job Ready</span>
          </h1>

          <p className="about-description">
            SDSOFTECH is a software development company and IT training
            institute focused on helping students build practical skills through
            real-world projects.
          </p>

          <p className="about-description">
            Our goal is to connect learning with industry requirements so
            students can prepare for successful careers in technology.
          </p>

          <a href="#courses" className="about-btn">
            Explore Our Courses →
          </a>
        </div>

        <div className="about-right">
          <div className="about-card">
            <div className="about-icon">💻</div>
            <h3>Practical Learning</h3>
            <p>Learn by building real-world projects.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">🚀</div>
            <h3>Career Focused</h3>
            <p>Develop skills for your future career.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">👨‍💻</div>
            <h3>Industry Skills</h3>
            <p>Practice modern tools and technologies.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">📚</div>
            <h3>Project Based</h3>
            <p>Turn your knowledge into practical experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
