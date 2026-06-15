import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail />,
    title: "E-mail Address",
    text: "mail@example.com"
  },
  {
    icon: <FiPhone />,
    title: "Phone Number",
    text: "(123) 456-7890 / (123) 456-9870"
  },
  {
    icon: <FiMapPin />,
    title: "Address",
    text: "Lawrence, NY 11345, USA"
  },
  {
    icon: <FiFileText />,
    title: "Fax",
    text: "1-800-570-7777"
  }
];

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <h2>Contact Information</h2>

      <p className="contact-info-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore.
      </p>

      <div className="contact-info-grid">
        {contactInfo.map((item, index) => (
          <div className="contact-info-card" key={index}>
            <div className="contact-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;