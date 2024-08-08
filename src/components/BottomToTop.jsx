import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 200); // Change 200 to your desired scroll distance
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={goToTop}
          className="flex justify-center items-center fixed bottom-20 right-5 w-12 h-12 bg-blue-500 text-white rounded-full cursor-pointer transition-transform transform hover:bg-blue-700 hover:-translate-y-1"
          style={{ zIndex: 9999 }} 
        >
          <FaArrowUp className="text-lg" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
