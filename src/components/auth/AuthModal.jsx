import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaGoogle
} from "react-icons/fa";
import "./styles/authModal.css";

const AuthModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("signin");

    if (!isOpen) return null;

    return (
        <div className="auth-overlay">
            <div className="auth-modal">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>

                {/* Tabs */}
                <div className="auth-tabs">
                    <button
                        className={activeTab === "signin" ? "active" : ""}
                        onClick={() => setActiveTab("signin")}
                    >
                        SIGN IN
                    </button>

                    <button
                        className={activeTab === "signup" ? "active" : ""}
                        onClick={() => setActiveTab("signup")}
                    >
                        SIGN UP
                    </button>
                </div>

                {/* Sign In */}
                {activeTab === "signin" && (
                    <div className="auth-content">

                        <div className="form-group">
                            <label className="auth-label">
                                Username or email address *
                            </label>
                            <input
                                type="text"
                                className="auth-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="auth-label">
                                Password *
                            </label>
                            <input
                                type="password"
                                className="auth-input"
                            />
                        </div>

                        <div className="auth-options">
                            <label className="custom-checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span>Remember me</span>
                            </label>

                            <Link
                                to="/forgot-password"
                                className="forgot-link"
                            >
                                Lost your password?
                            </Link>
                        </div>

                        <button className="auth-btn">
                            SIGN IN
                        </button>

                        <div className="social-wrapper">
                            <p className="social-title">
                                Sign in with social account
                            </p>


                            <div className="social-icons">
                                <button className="social-icon facebook">
                                    <FaFacebookF />
                                </button>

                                <button className="social-icon twitter">
                                    <FaTwitter />
                                </button>

                                <button className="social-icon google">
                                    <FaGoogle />
                                </button>
                            </div>

                        </div>

                    </div>
                )}

                {/* Sign Up */}
                {activeTab === "signup" && (
                    <div className="auth-content">

                        <div className="form-group">
                            <label className="auth-label">
                                Your Email address *
                            </label>

                            <input
                                type="email"
                                className="auth-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="auth-label">
                                Password *
                            </label>

                            <input
                                type="password"
                                className="auth-input"
                            />
                        </div>

                        <p className="privacy-text">
                            Your personal data will be used to support your
                            experience throughout this website, to manage
                            access to your account, and for other purposes
                            described in our{" "}
                            <Link to="/privacy-policy" className="privacy-link">
                                privacy policy
                            </Link>.
                        </p>

                        <Link
                            to="/vendor-register"
                            className="vendor-link"
                        >
                            Signup as a vendor?
                        </Link>

                        <label className="custom-checkbox agree">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span>I agree to the privacy policy</span>
                        </label>

                        <button className="auth-btn">
                            SIGN UP
                        </button>

                        <div className="social-wrapper">
                            <p className="social-title">
                                Sign up with social account
                            </p>

                            <div className="social-icons">
                                <a href="/" className="social-icon facebook">
                                    <FaFacebookF />
                                </a>

                                <a href="/" className="social-icon twitter">
                                    <FaTwitter />
                                </a>

                                <a href="/" className="social-icon google">
                                    <FaGoogle />
                                </a>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthModal;