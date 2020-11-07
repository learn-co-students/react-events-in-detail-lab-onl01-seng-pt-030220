import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    clickHandler = (event) => {
        console.log(event)
        let newArray = [event.clientX, event.clientY]
         this.props.onReceiveCoordinates(newArray)
    }

    render(){
    return (<button onClick={this.clickHandler}> Click me!</button>)
    }
}
