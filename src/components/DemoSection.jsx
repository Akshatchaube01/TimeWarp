import React from 'react';
import './DemoSection.css';

const DemoSection = () => {
  return (
    <div className="demo-container">
      <h2 className="demo-title">* Demo Section * </h2>
      <div className="video-container">
        <iframe
          width="870"
          height="515"
          src="https://www.youtube.com/embed/o9pNopC1BMU?autoplay=1&loop=1&playlist=o9pNopC1BMU&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="demo-description">
        Take a sneak peek into our time-traveling adventures! Explore simulations, historical reenactments, and futuristic scenarios that will transport you through the ages.
      </p>
      <div className="technology-explanation">
        <h2>* Technology Used *</h2>
        <p>
        <b>1. ReactJS : </b> ReactJS is a popular JavaScript library for building user interfaces, particularly for single-page applications. It's known for its component-based architecture, which allows developers to create reusable UI components. In the context of this project, ReactJS is used for developing the frontend of the app, handling user interactions, and managing the application state.
        </p>
        <p>
        <b>2. ThreeJS : </b>  ThreeJS is a JavaScript library used for creating and displaying 3D graphics in web browsers. It provides APIs for creating and manipulating 3D objects, scenes, and animations using WebGL, a JavaScript API for rendering interactive 3D graphics. In this project, ThreeJS is likely used to render the historical maps and 3D elements in the augmented reality environment.
        </p>
        <p>
        <b>3. Unity : </b> Unity is a powerful and widely used game development platform that supports the creation of games and interactive experiences across various platforms, including desktop, mobile, and virtual reality (VR). In the context of this project, Unity will likely be used to develop more advanced AR/VR features, such as immersive environments, interactions, and animations.
        </p>
        <p>
        <b>4. WebGL : </b>WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D graphics within any compatible web browser without the use of plug-ins. It is based on OpenGL ES and provides a low-level interface for rendering 3D graphics in web applications. WebGL is likely used in conjunction with ThreeJS and Unity to render 3D graphics and scenes in the web browser.
        </p>
        <p>
        <b>5. AR/VR tools : </b> Various AR/VR tools and frameworks may be used to enhance the augmented reality experience in the app. These tools could include ARKit and ARCore for mobile AR, as well as VR frameworks like Oculus SDK or SteamVR for virtual reality experiences. These tools provide capabilities such as motion tracking, spatial mapping, and gesture recognition, which are essential for creating immersive AR/VR experiences.
        </p>
      </div>
      <div className="resource-column">
        <h2>* Resources *</h2>
        <ul>
          <li><a href='https://docs.unity3d.com/Manual/index.html'>Unity Docs</a></li>
          <li><a href='https://docs.unity3d.com/ScriptReference/'>Script Reference</a></li>
          <li><a href='http://www.google.com'>API Reference</a></li>
          <li><a href='https://unity.com/learn/get-started'>Unity Learning</a></li>
        </ul>
      </div>
    </div>
  );
}

export default DemoSection;
