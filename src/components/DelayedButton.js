import React, { Component } from 'react';

class DelayedButton extends Component {
    handler = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.handler}></button>
            </div>
        );
    }
}

export default DelayedButton;