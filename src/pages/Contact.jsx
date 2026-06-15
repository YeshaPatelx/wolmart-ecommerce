import React from "react";
import PageBanner from "../components/common/PageBanner/PageBanner";
import Breadcrumb from "../components/common/Breadcrumb/Breadcrumb";

import ContactInfo from "../components/contact/ContactInfo";
import ContactFaq from "../components/contact/ContactFaq";
import ContactForm from "../components/contact/ContactForm";

import "../components/contact/styles/contact.css";

const Contact = () => {
  return (
    <>
      <PageBanner title="Contact Us" />

      <div className="container">
        <Breadcrumb
          items={[
            { label: "Contact Us" }
          ]}
        />

        <ContactInfo />

        <div className="contact-layout">
          <ContactFaq />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;