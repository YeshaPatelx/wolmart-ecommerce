import React from "react";
import "./button.css";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text }) => {
  return (
   <button className="custom-btn">
  {text}
  <FaArrowRight />
</button>
  );
};

export default Button;