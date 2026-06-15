import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
const DownloadsContent = () => {
    return (
        <div className="account-section">
            <div className="account-section-title">
                <FiDownload />
                <h3>Downloads</h3>
            </div>

            <p>No downloads available.</p>

             <div className="orders-footer">
                <Link to="/shop" className="go-shop-btn">
                    Go Shop
                    <FiArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default DownloadsContent;