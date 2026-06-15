import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>

      <div className="form-group">
        <label>Your Name</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Your Email</label>
        <input type="email" />
      </div>

      <div className="form-group">
        <label>Your Message</label>
        <textarea rows="6"></textarea>
      </div>

      <button className="contact-btn">
        SEND NOW
      </button>
    </div>
  );
};

export default ContactForm;