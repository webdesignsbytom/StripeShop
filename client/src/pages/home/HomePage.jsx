import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Components
import Navbar from '../../components/nav/Navbar';
import FooterComponent from '../../components/footer/FooterComponent';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';

const HomePage = React.memo(() => {
  usePageTracking();

  return (
    <>
      {/* Page */}
      <div className='grid min-h-screen overflow-hidden bg-colour1 text-colour2 dark:bg-colour2 dark:text-colour1 font-poppins'>
        <div className='grid'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <HomePageMainContainer />

          {/* Footer */}
          <FooterComponent />
        </div>
      </div>
    </>
  );
});

export default HomePage;
