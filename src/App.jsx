import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import DemoSection from './components/DemoSection';
import ContactUs from './components/ContactUs';
import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Models from './components/Models';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />}/>
          <Route path='/AboutUs' element={<AboutUs />}/>
          <Route path='/DemoSection' element={<DemoSection />}/>
          <Route path='/ContactUs' element={<ContactUs />}/>
          <Route path='/Models' element={<Models />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;



