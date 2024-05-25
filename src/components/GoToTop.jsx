import React, { useEffect, useState } from "react";
import "./GoToTop.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className="top-btn"
      onClick={goToBtn}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <FaArrowUp className="top-btn--icon" />
    </div>
  );
};

export default GoToTop;
