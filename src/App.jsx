import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import DemoSection from './components/DemoSection';
import ContactUs from './components/ContactUs';
import Models from './components/Models';

const App = () => {
  return (
    
    <div>
      <Navbar />
      <Home />
      <hr/>

      <DemoSection />
      <ContactUs />
      <AboutUs />
      <Models/>
    </div>
  );
}

export default App;



