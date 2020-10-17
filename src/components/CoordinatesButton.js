import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  setCoordinates = (event) => { 
    this.props.onReceiveCoordinates([event['clientX'], event['clientY']])
  }

  render(){
    return <button onClick={this.setCoordinates}>Coordinates</button>
  }

}