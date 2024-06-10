import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AnimatedCursor from "react-animated-cursor";
import AboutUs from "./components/AboutUs";
import DemoSection from "./components/DemoSection";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Models from "./components/Models";
import Custom404 from "./components/Custom404";
import "./main.css";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import ChatbotComponent from "./components/Chatbot"; // Import Chatbot

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AnimatedCursor 
        innerSize={8}
        outerSize={30}
        color="0,0,280"
        outerAlpha={.6}
        innerScale={1.1}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    
    <Navbar />{" "}
    {/* Place Navbar outside of Routes to ensure it's always visible */}
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/AboutUs' element={<AboutUs />} />
      <Route exact path='/DemoSection' element={<DemoSection />} />
      <Route exact path='/ContactUs' element={<ContactUs />} />
      <Route exact path='/Models' element={<Models />} />
      <Route exact path='/privacy-policy' element={<Privacy />} />
      <Route exact path='/terms-and-conditions' element={<Terms />} />
      <Route path='*' element={<Custom404 />} />
    </Routes>
    <ChatbotComponent /> {/* Include Chatbot */}
  </Router>
);
