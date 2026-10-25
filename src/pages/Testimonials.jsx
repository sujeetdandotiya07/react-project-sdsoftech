import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "MERN Stack",
    text: "PNINFOSYS ne meri career ko ek nayi direction di. Practical projects se bahut seekha.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    course: "Python",
    text: "The trainers are very experienced and supportive. Best institute in Gwalior!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    course: "Data Analytics",
    text: "Got placed within 2 months of course completion. Amazing training!",
    rating: 4,
  },
  {
    name: "Sneha Gupta",
    course: "Web Design",
    text: "From zero knowledge to building beautiful websites. Thank you PNINFOSYS!",
    rating: 5,
  },
  {
    name: "Vikash Kumar",
    course: "React.js",
    text: "Industry-level projects and hands-on experience made all the difference.",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    course: "Java Full Stack",
    text: "Excellent curriculum and placement support. Highly recommended!",
    rating: 4,
  },
];

function StarRating({ count }) {
  return (
    <span className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "star filled" : "star empty"}>
          ⭐
        </span>
      ))}
    </span>
  );
}

function TestimonialCard({ name, course, text, rating }) {
  return (
    <div className="testimonial-card">
      <span className="testimonial-quote-icon">❝</span>
      <p className="testimonial-text">"{text}"</p>
      <StarRating count={rating} />
      <h4 className="testimonial-name">{name}</h4>
      <span className="testimonial-course">{course} Batch</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <span className="testimonials-tag">TESTIMONIALS</span>
        <h2 className="testimonials-heading">What Our Students Say</h2>
        <p className="testimonials-subtitle">
          Hear from our students who transformed their careers with SDSOFTECH training programs. Their success is our greatest achievement.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
