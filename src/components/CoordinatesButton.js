// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        console.log(this)
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        // console.log(this)
        return(
            <div>
                <button onClick={this.handleClick}>Coordinates Button</button>
            </div>
        )
    }
}