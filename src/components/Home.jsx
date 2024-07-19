import "./Home.css"; // Import CSS file for Home component
import { lines } from "./option.js";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import ParticleRing from "./ParticleRing.jsx";
import TypewriterEffect from "./Typewriter.jsx";
import Preloader from "./Preloader.jsx";

const Home = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const newTextStyles = {
    fontSize: windowWidth < 768 ? "80px" : "100px",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
    color: "#fff",
  };

  const paragraphStyles = {
    textAlign: "center",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 10,
    color: "#fff", // Set text color to white
  };

  // Button styles
  const buttonStyles = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)", // Center horizontally
    bottom: "calc(25% + 0px)", // Position it closer to the main text
    backgroundColor: "transparent",
    color: "#00bfff", // Light blue font color
    border: "2px solid #00bfff", // Light blue border
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s, color 0.3s, transform 0.3s", // Add transition properties
  };

  const buttonHoverStyles = {
    backgroundColor: "#00bfff", // Light blue background color on hover
    color: "#fff", // White font color on hover
  };

  // State to manage button hover
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <div>
      <div className="container">
        {/* keep particles at top */}
        {/* <Particles id="tsparticles" options={useMemo(() => lines)} /> */}
        <ParticleRing className="z-20" />
        <div style={newTextStyles} className="main-text">
          <p style={{ ...newTextStyles, margin: 0 }}>TimeWarp</p>
        </div>
        <p style={paragraphStyles} className="text-xl w-screen">
          {/* Understanding history, embracing the present, and envisioning the future */}
          <TypewriterEffect
            text="Understanding history, embracing the present, and envisioning the future"
            speed={40}
          />
        </p>
        <a href="/AboutUs" style={{ textDecoration: "none" }}>
          <button
            style={{
              ...buttonStyles,
              ...(isButtonHovered ? buttonHoverStyles : {}),
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="mx-0"
          >
            Know more
          </button>
        </a>
      </div>
      <Preloader />
    </div>
  );
};

export default Home;
