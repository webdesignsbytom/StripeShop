import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga4';
// App
import App from './App';
// Context
import UserProvider from './context/UserContext';
// Styles
import './styles/index.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/navbar.css';
import './styles/backgrounds.css';
import './styles/fonts.css';

// Initialize Google Analytics with your tracking ID
ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
