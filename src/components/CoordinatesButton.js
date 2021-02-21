// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

handleClick = (event) => {
let array = [event.clientY, event.clientX]
this.props.onReceiveCoordinates(array)
}

render() {

  return(
<div>
<button onClick={this.handleClick}></button>
</div>
  )
}

}
