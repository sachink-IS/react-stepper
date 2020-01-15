import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }


  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    return (this.state.hasError) ?
      <div>
        Something went wrong
      </div> : 
      this.props.children
  }
}
