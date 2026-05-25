import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import "./styles/Newsletter.css";

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="newsletter-wrapper">
                    {/* Left Content */}

                    <div className="newsletter-content-left">
                        <FiMail className="newsletter-icon" />

                        <div className="newsletter-text">
                            <h3 className="newsletter-title">
                                SUBSCRIBE TO OUR NEWSLETTER
                            </h3>

                            <p className="newsletter-description">
                                Get all the latest information on Events, Sales and Offers.
                            </p>
                        </div>
                    </div>


                    {/* Right Form */}
                    <div className="newsletter-form-wrapper">
                        <form className="newsletter-form">
                            <input
                                type="email"
                                className="newsletter-input"
                                placeholder="Your E-mail Address"
                            />

                            <button
                                type="submit"
                                className="newsletter-button"
                            >
                                <span className="newsletter-button-text">
                                    SUBSCRIBE
                                </span>

                                <FiArrowRight className="newsletter-button-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;