
import React from 'react'

class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props)
            // this.state = {}
    }

    handleClick = (event) => {
        let array = [event.clientY, event.clientX]
        // console.log(event.clientY, event.clientX)
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <button onClick={this.handleClick}>COORDINATES</button>
        )
    }
}

export default CoordinatesButton
