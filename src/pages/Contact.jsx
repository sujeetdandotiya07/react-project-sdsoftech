import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const contactCards = [
    { icon: "📍", label: "Address", value: "Gwalior, Madhya Pradesh, India" },
    { icon: "📧", label: "Email", value: "info@sujeetdandotiya.com" },
    { icon: "📞", label: "Phone", value: "+91 6267652566" },
    { icon: "🕐", label: "Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">CONTACT US</span>
          <h1 className="contact-heading">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a question or want to enroll? Reach out to us.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column — Info Cards */}
          <div className="contact-info">
            {contactCards.map((card) => (
              <div className="contact-info-card" key={card.label}>
                <span className="contact-info-icon">{card.icon}</span>
                <div>
                  <h3 className="contact-info-label">{card.label}</h3>
                  <p className="contact-info-value">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column — Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Course Enrollment">Course Enrollment</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
