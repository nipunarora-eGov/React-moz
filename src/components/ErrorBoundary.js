import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Update state to indicate error
    this.setState({ hasError: true });
    // Log error details (optional)
    console.error('Error caught by error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when error occurs
      return <h1>Something went wrong, caught by error boundary. Please try again later.</h1>;
    }
    // Render children normally if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
