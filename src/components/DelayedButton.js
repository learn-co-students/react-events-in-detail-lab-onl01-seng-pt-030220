import React from 'react'

class DelayedButton extends React.Component {
    constructor(props) {
        super(props)
            this.state = {}
        
    }
    clickHandler = (event) => {
        event.persist()
        console.log(this.props)
       setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
    }
    render() {
        return (
            <button onClick={this.clickHandler}> DELAY </button>
        )
    }
}

export default DelayedButton
