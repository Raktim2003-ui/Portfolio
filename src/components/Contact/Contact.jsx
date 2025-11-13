import  { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
     try {
    const response = await fetch("https://portfoliobackendcode-3.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Something went wrong. Please check the console.");
  }
    
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p className="subtitle">I'm excited to connect and explore opportunities.</p>
      </header>

      <section className="contact-info-section">
        <h2>Reach Out Directly</h2>
        <div className="info-grid">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p><a href="mailto:raktimadak2003@gmail.com">raktimadak2003@gmail.com  </a></p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <h3>Mobile</h3>
            <p><a href="tel:+916294099566">+91 6294099566</a></p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>Burdwan, West Bengal, India</p>
          </div>
        </div>
      </section>

      <section className="social-connect-section">
        <h2>Connect Online</h2>
        <div className="social-links-grid">
          <a href="https://www.linkedin.com/in/raktim-adak-a828a0238" target="_blank" rel="noopener noreferrer" className="social-link-item">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn Profile</span>
          </a>
          <a href="https://github.com/Raktim2003-ui" target="_blank" rel="noopener noreferrer" className="social-link-item">
            <i className="fab fa-github"></i>
            <span>GitHub Portfolio</span>
          </a>
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer" className="social-link-item">
            <i className="fab fa-github"></i>
            <span>Naukri Profile</span>
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Me a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Typing..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>Thank you for visiting my portfolio. I look forward to hearing from you!</p>
      </footer>
    </div>
  );
}

export default Contact;