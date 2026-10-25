import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Custom websites and web applications built with React, Node.js, and modern frameworks. From landing pages to complex SaaS platforms, we deliver fast, scalable, and SEO-friendly solutions.",
      link: "/services/web-development",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps for Android & iOS using React Native and Flutter. We build intuitive, high-performance apps that your users will love.",
      link: "/services/mobile-app-development",
    },
    {
      icon: "🖥️",
      title: "Software Development",
      description:
        "Custom enterprise software solutions tailored to your business needs. From ERP systems to CRM tools, we engineer robust software that drives efficiency and growth.",
      link: "/services/software-development",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "User-centered design for web and mobile applications. We craft beautiful interfaces and seamless experiences backed by research, wireframing, and prototyping.",
      link: "/services/ui-ux-design",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description:
        "Result-driven digital marketing services including SEO, Social Media Marketing, and Google Ads. We help you reach the right audience and maximize your ROI.",
      link: "/services/digital-marketing",
    },
    {
      icon: "🎓",
      title: "IT Training & Workshops",
      description:
        "Professional training programs for students and corporates. Master in-demand technologies like React, Python, Java, and Data Science with hands-on, project-based learning.",
      link: "/services/it-training",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">OUR SERVICES</span>
          <h1 className="services-heading">What We Offer</h1>
          <p className="services-subtitle">
            We provide end-to-end technology solutions and professional training
            programs to help businesses grow and individuals build successful
            careers in IT.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
