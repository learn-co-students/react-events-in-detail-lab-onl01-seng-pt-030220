import React, { Component, useCallback } from 'react'

export default class DelayedButton extends Component {

  click = (e) => {
    e.persist()
    setTimeout(()=>{this.props.onDelayedClick(e)}, this.props.delay)
    
  }

  render(){
    return <button onClick={this.click}>Delay</button>
  }

}