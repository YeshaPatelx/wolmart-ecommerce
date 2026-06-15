import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { contactFaqData } from "../../data/contactFaqData";

const ContactFaq = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="contact-faq">
      <h3>People usually ask these</h3>

      {contactFaqData.map((faq) => (
        <div
          key={faq.id}
          className={`faq-item-wrapper ${
            activeFaq === faq.id ? "active" : ""
          }`}
        >
          <div
            className="faq-item"
            onClick={() => toggleFaq(faq.id)}
          >
            <span>{faq.question}</span>

            <FaAngleDown className="faq-icon" />
          </div>

          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactFaq;