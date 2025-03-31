import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Google
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID); // Replace with your GA tracking ID

// Hook to track page views
export const usePageTracking = () => {
  const location = useLocation();

  console.log('ANALYTICS');
  
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);
};

// Hook to track custom events
export const useEventTracking = () => {
  const trackEvent = (category, action, label, value) => {
    ReactGA.send({
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
    });
  };

  return trackEvent;
};

// Hook to track social interactions
export const useSocialTracking = () => {
  const trackSocial = (network, action, target) => {
    ReactGA.send({
      hitType: 'social',
      socialNetwork: network,
      socialAction: action,
      socialTarget: target,
    });
  };

  return trackSocial;
};

// Hook to track exceptions
export const useExceptionTracking = () => {
  const trackException = (description, fatal = false) => {
    ReactGA.send({
      hitType: 'exception',
      exDescription: description,
      exFatal: fatal,
    });
  };

  return trackException;
};

// Hook to set custom dimensions or metrics
export const useCustomMetrics = () => {
  const setCustomMetric = (dimension, metric) => {
    ReactGA.set({
      [dimension]: metric,
    });
  };

  return setCustomMetric;
};

//   const trackEvent = useEventTracking();
//   const trackSocial = useSocialTracking();
//   const trackException = useExceptionTracking();
//   const setCustomMetric = useCustomMetrics();

//   useEffect(() => {
//     // Example of tracking a custom event
//     trackEvent('User', 'Page Load', 'MyComponent Loaded');

//     // Example of setting a custom metric
//     setCustomMetric('dimension1', 'Custom Dimension Value');

//     // Example of tracking an exception
//     try {
//       // Code that might throw an error
//     } catch (error) {
//       trackException('An error occurred', true);
//     }
//   }, []);

//   const handleButtonClick = () => {
//     trackEvent('User', 'Click', 'My Button');
//   };

//   const handleShare = () => {
//     trackSocial('Facebook', 'Share', '/home');
//   };
