import React from "react";
import "./PageBanner.css";

const PageBanner = ({ title }) => {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-banner-content">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;