import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './Home.css'; // Import CSS file for Home component

const Home = () => {
  // Refs for the container and spheres
  const containerRef = useRef();
  const spheresRef = useRef([]);

  useEffect(() => {
    let animationId;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create multiple spheres
    const numSpheres = 4;
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00bfff }); // Light blue color
    for (let i = 0; i < numSpheres; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      // Adjust position to stay away from text
      sphere.position.set(Math.random() * 20 - 10, Math.random() * 5 - 15, Math.random() * 20 - 10);
      scene.add(sphere);
      spheresRef.current.push(sphere);
    }

    // Animation function
    const animate = () => {
      animationId = requestAnimationFrame(animate);
    
      spheresRef.current.forEach((sphere, index) => {
        const time = performance.now() * 0.001;
        const amplitude = 0.5;
        const frequency = 0.5;
        sphere.position.y = Math.sin(frequency * time + index) * amplitude;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      // Dispose geometries and materials of all spheres
      spheresRef.current.forEach(sphere => {
        sphere.geometry.dispose();
        sphere.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  const newTextStyles = {
    fontSize: '100px',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    color: '#fff', // Set text color to white
  };

  const paragraphStyles = {
    textAlign: 'center',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 10,
    color: '#fff', // Set text color to white
  };

  // Button styles
  const buttonStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
    bottom: 'calc(25% + 0px)', // Position it closer to the main text
    backgroundColor: 'transparent',
    color: '#00bfff', // Light blue font color
    border: '2px solid #00bfff', // Light blue border
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s', // Add transition properties
  };
  
  const buttonHoverStyles = {
    backgroundColor: '#00bfff', // Light blue background color on hover
    color: '#fff', // White font color on hover
  };

  // State to manage button hover
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <>
    <div className="container">
      {/* <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/DemoSection">Demo Section</a></li>
          <li><a href="/Models">Models</a></li>
          <li><a href="/ContactUs">Contact Us</a></li>
        </ul>
      </nav> */}
      <div ref={containerRef} className="canvas-container" />
      <div style={newTextStyles} className='main-text'>
        <p style={{ ...newTextStyles, margin: 0 }}>TimeWarp</p>
      </div>
      <p style={paragraphStyles}>
        Understanding history, embracing the present, and envisioning the future
      </p>
      <a href="/AboutUs" style={{ textDecoration: 'none' }}>
        <button 
          style={{ ...buttonStyles, ...(isButtonHovered ? buttonHoverStyles : {}) }} 
          onMouseEnter={() => setIsButtonHovered(true)} 
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Know more
        </button>
      </a>
    </div>
    </>
  );
}

export default Home;
