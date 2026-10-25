import React from "react";
import "./Courses.css";

const coursesData = [
  {
    id: 1,
    title: "MERN Stack Development",
    description:
      "MongoDB, Express.js, React.js, Node.js — build full-stack web apps from scratch with industry-standard tools.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: "₹15,000",
    color: "#2563eb",
  },
  {
    id: 2,
    title: "Python Programming",
    description:
      "Core Python, Django, Flask, automation, and scripting — master one of the most versatile programming languages.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    price: "₹10,000",
    color: "#34d399",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Excel, SQL, Power BI, Tableau, and data visualization — turn raw data into actionable business insights.",
    duration: "5 Months",
    level: "Intermediate",
    price: "₹12,000",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "HTML, CSS, JavaScript, responsive design, and Bootstrap — craft beautiful, mobile-friendly websites.",
    duration: "3 Months",
    level: "Beginner",
    price: "₹8,000",
    color: "#ef4444",
  },
  {
    id: 5,
    title: "React.js Mastery",
    description:
      "Hooks, Redux, Router, API integration, and deployment — become a confident React developer.",
    duration: "3 Months",
    level: "Intermediate",
    price: "₹10,000",
    color: "#8b5cf6",
  },
  {
    id: 6,
    title: "Java Full Stack",
    description:
      "Core Java, Spring Boot, Hibernate, and MySQL — build robust enterprise-grade applications.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: "₹15,000",
    color: "#ec4899",
  },
];

function Courses() {
  return (
    <section className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <span className="courses-tag">OUR COURSES</span>
          <h1 className="courses-heading">Learn. Build. Grow.</h1>
          <p className="courses-subtitle">
            Practical, project-based training programs designed to transform
            beginners into job-ready professionals. Get hands-on experience with
            real-world projects and expert mentorship.
          </p>
        </div>

        <div className="courses-grid">
          {coursesData.map((course) => (
            <div className="course-card" key={course.id}>
              <div
                className="course-card-topbar"
                style={{ backgroundColor: course.color }}
              ></div>
              <div className="course-card-body">
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-description">{course.description}</p>
                <div className="course-card-badges">
                  <span className="course-badge course-badge-duration">
                    ⏱ {course.duration}
                  </span>
                  <span className="course-badge course-badge-level">
                    📊 {course.level}
                  </span>
                </div>
                <div className="course-card-footer">
                  <span className="course-card-price">{course.price}</span>
                  <button className="btn-primary course-enroll-btn">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
