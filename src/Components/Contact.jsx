import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        {/* Left: Form */}
        <form className="contact-form">
          <h2 className="contact-form-heading">Send Us a Message</h2>

          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your full name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email address" required />
          </div>

          {/* <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject of your message" />
          </div> */}

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {/* Right: Info Text */}
        <div className="contact-info">
          <h2 className="contact-heading">Get in Touch!</h2>
          <p>
            We’d love to hear from you. Whether you have inquiries about our current exhibitions, need assistance with art collections, or simply want to connect, fill out the form. Our team is here to help you explore the world of art and answer any questions you may have. Let’s create something beautiful together!
          </p>
          <p><strong>Location:</strong> London, United Kingdom</p>
          <p><strong>Phone:</strong> +44 7555 169137</p>
          <p><strong>Email:</strong> <a href="mailto:contact@alinda-kring.com">contact@alinda-kring.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
