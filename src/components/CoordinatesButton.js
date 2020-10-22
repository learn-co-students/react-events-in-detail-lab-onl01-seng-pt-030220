// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    saveCoordinates = (event) => {
        const coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return(
            <button onClick={this.saveCoordinates} >Get Coordinates</button>
        )
    }
}