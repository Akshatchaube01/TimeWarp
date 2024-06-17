import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import preloaderAnimation from "../assets/Preloader.json"; // Adjust path as needed
import "./Preloader.css";

const Preloader = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFadeIn(true);

    const timer = setTimeout(() => {
      setFadeIn(false);
      setTimeout(() => setLoading(false), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeIn ? 'fade-in' : 'fade-out'}`}>
      <Lottie className="preloader-animation" animationData={preloaderAnimation} />
    </div>
  );
};

export default Preloader;
