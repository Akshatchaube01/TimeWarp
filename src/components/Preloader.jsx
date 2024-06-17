import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import preloaderAnimation from "../assets/Preloader.json"; // Adjust path as needed
import "./Preloader.css";

const Preloader = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(false); // Fade out animation after 2 seconds
      setTimeout(() => setLoading(false), 500); // Set loading to false after additional 0.5 seconds
    }, 2500); // Total delay is 2.5 seconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  if (!loading) return null; // Render nothing if loading is false

  return (
    <div className={`preloader ${fadeIn ? "fade-in" : "fade-out"}`}>
      <Lottie className="preloader-animation" animationData={preloaderAnimation} />
    </div>
  );
};

export default Preloader;
