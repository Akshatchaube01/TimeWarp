// index.jsx
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
ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
	<AnimatedCursor 
        innerSize={8}
        outerSize={30}
        color="254, 254, 254"
        outerAlpha={.2}
        innerScale={0.7}
        outerScale={3}
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
			<Route path='*' element={<Custom404 />} />
		</Routes>
	</Router>
);
