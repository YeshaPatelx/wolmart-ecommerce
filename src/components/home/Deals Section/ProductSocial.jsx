import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
  FaLinkedinIn,
  FaBalanceScale,
} from "react-icons/fa";

import { FiHeart } from "react-icons/fi";

const ProductSocial = () => {
  return (
    <div className="socials">

      <div className="icon">
        <FaFacebookF />
      </div>

      <div className="icon">
        <FaTwitter />
      </div>

      <div className="icon">
        <FaPinterestP />
      </div>

      <div className="icon">
        <FaWhatsapp />
      </div>

      <div className="icon">
        <FaLinkedinIn />
      </div>

      <div className="divider"></div>

      <div className="wishlist">
        <FiHeart className="action-icon" />
        <FaBalanceScale className="action-icon" />
      </div>

    </div>
  );
};

export default ProductSocial;