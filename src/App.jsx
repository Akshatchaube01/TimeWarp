import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import DemoSection from './components/DemoSection';
import ContactUs from './components/ContactUs';
import Models from './components/Models';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Preloader onLoaded={handleLoaded} />
      ) : (
        <>
      <Navbar />
      <Home />
      <hr/>

      <DemoSection />
      <ContactUs />
      <AboutUs />
      <Models/>
      </>
      )}

    </div>
  );
}

export default App;



