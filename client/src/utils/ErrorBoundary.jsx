import React, { Component } from 'react';

// ErrorBoundary class to catch rendering errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service (you can replace this)
    console.error("Error occurred:", error);
    console.info("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return this.props.fallback || <p>Something went wrong!</p>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
