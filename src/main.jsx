// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import DemoSection from './components/DemoSection';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar /> {/* Place Navbar outside of Routes to ensure it's always visible */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/AboutUs" element={<AboutUs />} />
      <Route exact path="/DemoSection" element={<DemoSection />} />
      <Route exact path="/ContactUs" element={<ContactUs />} />
    </Routes>
  </Router>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );