import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HOC from '../HOC/HOC'

export default class Stepper extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      bIsInfoValid: false,
      bFirstPage: true,
      bLastPage: false,
      iCurrentPageIndex: 0,
      iTotalPages: this.props.pages.length || 0
    }
  }

  ifFirstPage = () => {
    return (this.state.iCurrentPageIndex === 0) ? true : false
  }

  ifLastPage = () => {
    return (this.state.iCurrentPageIndex === this.state.iTotalPages - 1) ? true : false
  }

  shouldDisplayPrevButton = () => {
    if (this.ifFirstPage()) {
      return false      
    }
    return true
  }

  shouldDisplayNextButton = () => {
    if (this.ifLastPage()) {
      return false
    }
    return true
  }
  
  validateInformation = (bIsInfoValid) => {
    this.setState({
      ...this.state,
      bIsInfoValid: bIsInfoValid
    })
  }

  displayPage = () => {
    return HOC(this.props.pages[this.state.iCurrentPageIndex]);
  }

  displayPrevStep = () => {
    this.setState({
      ...this.state,
      iCurrentPageIndex: this.state.iCurrentPageIndex - 1
    })  
  }

  displayNextStep = () => {
    this.setState({
      ...this.state,
      iCurrentPageIndex: this.state.iCurrentPageIndex + 1
    })
  }

  render() {
    return (
      <>
        {this.displayPage()}
        {this.shouldDisplayPrevButton() ? <input type="button" value="Prev" onClick={this.displayPrevStep}/> : null }
        {this.shouldDisplayNextButton() ? <input type="button" value="Next" onClick={this.displayNextStep}/> : null }
      </>
    )
  }
}

Stepper.propTypes = {
  pages: PropTypes.array.isRequired
}