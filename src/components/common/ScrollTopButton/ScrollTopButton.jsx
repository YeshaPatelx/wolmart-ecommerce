import React, { useEffect, useState } from "react";
import "./ScrollTopButton.css";
import { FiChevronUp } from "react-icons/fi";

const ScrollTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;

      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <button
  className={`scroll-top-btn ${scrollPercent > 5 ? "show" : ""}`}
  onClick={scrollToTop}
  style={{
    "--progress": `${scrollPercent * 3.6}deg`,
  }}
>
  <span className="scroll-top-inner">
    <FiChevronUp />
  </span>
</button>
  );
};

export default ScrollTopButton;