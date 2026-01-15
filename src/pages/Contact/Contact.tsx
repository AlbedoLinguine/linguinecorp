import './Contact.css'

function Contact() {
  return (
    <div className="contact">
        <title>Contact Us - Linguine Corp | Get in Touch</title>
        <meta name="description" content="Contact Linguine Corp. Visit our headquarters in Genoa, Italy or send us a message. We're here to answer your questions about our authentic Italian pasta products." />
      <div className="contact-header">
        <h1>📞 Contact Us</h1>
        <p>Get in touch with the Linguine Corp family</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Visit Our Headquarters</h2>
          <div className="info-item">
            <h3>🏢 Address</h3>
            <p>
              Via del Basilico 123<br />
              16126 Genoa, Italy
            </p>
          </div>
          
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+39 010 123 4567</p>
          </div>
          
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>info@linguinecorp.it</p>
          </div>
          
          <div className="info-item">
            <h3>🕒 Business Hours</h3>
            <p>
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            
            <button type="submit">Send Message 🍝</button>
          </form>
        </div>
      </div>

      <div className="social-section">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="#" className="social-link">📘 Facebook</a>
          <a href="#" className="social-link">📷 Instagram</a>
          <a href="#" className="social-link">🐦 Twitter</a>
          <a href="#" className="social-link">💼 LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
