import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import GoToTop from './components/BottomToTop';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const DemoSection = lazy(() => import('./components/DemoSection'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Models = lazy(() => import('./components/Models'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <>
            <Navbar />
            <Home />
            <GoToTop />
            <hr />
            <DemoSection />
            <ContactUs />
            <AboutUs />
            <Models />
          </>
        </Suspense>
      )}
    </div>
  );
}

export default App;
