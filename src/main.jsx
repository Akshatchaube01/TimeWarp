import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Custom404 from "./components/Custom404";
import "./main.css";
import Preloader from "./components/Preloader";
import ChatbotComponent from "./components/Chatbot"; // Import Chatbot

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const DemoSection = lazy(() => import("./components/DemoSection"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Models = lazy(() => import("./components/Models"));
const Privacy = lazy(() => import("./components/Privacy"));
const Licensing = lazy(() => import("./components/licensing.jsx"));
const Terms = lazy(() => import("./components/Terms"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Preloader />
    <Navbar /> {/* Place Navbar outside of Routes to ensure it's always visible */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/DemoSection" element={<DemoSection />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Models" element={<Models />} />
        <Route exact path="/privacy-policy" element={<Privacy />} />
        <Route exact path="/licensing" element={<Licensing />} />
        <Route exact path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </Suspense>
    <ChatbotComponent /> {/* Include Chatbot */}
  </Router>
);
