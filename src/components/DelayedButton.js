// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
    handleClick = (event) => {
        console.log(this)
        event.persist()
        setTimeout(
            () => this.props.onDelayedClick(event), this.props.delay
        )
    }

    render(){
        // console.log(this)
        return(
            <div>
                <button onClick={this.handleClick}>Delayed Button</button>
            </div>
        )
    }
}