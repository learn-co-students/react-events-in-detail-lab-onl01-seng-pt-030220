// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

    callback = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return(
            <button onClick={this.callback} >Delay</button>
        )
    }
}